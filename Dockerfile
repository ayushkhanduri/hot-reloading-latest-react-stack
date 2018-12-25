FROM mhart/alpine-node AS build-app

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build:production

FROM nginx:1.15.7-alpine AS nginx-server

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-app /usr/src/app/build/ /usr/share/nginx/html

EXPOSE 80
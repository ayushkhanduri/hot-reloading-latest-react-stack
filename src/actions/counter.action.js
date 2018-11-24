
type clockAction = {
    type: string
};


export const incrementCounter = ():clockAction  => (
    {
        type: "INCREMENT"
    }
)
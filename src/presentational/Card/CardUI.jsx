import React from 'react';

import {Card,Col,Row} from 'antd';

import './card.css';

const CardUI = ({data,deleteCard}) => (
    <Row gutter={16} className='card-container'>
        {
            data.map(item => 
                (<Col key={item.id} span={8}>
                    <span onClick={(e) =>{
                            console.log(item.id);
                            deleteCard(item.id); }
                        } className="close"> X </span>
                    <Card title={item.title} bordered={false}>
                        {item.content}
                    </Card>
                </Col>
                )
                
            )
        }
        
    </Row>
);

export default CardUI;
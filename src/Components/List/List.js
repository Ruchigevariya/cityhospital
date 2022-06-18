import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function List({data , getid}) {
    
    return (
        <div>
            {
                data.map((o, i) => {
                    return (
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {o.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    {o.price}
                                </CardSubtitle>
                                <CardText>
                                    {o.expiry    }
                                </CardText>
                                <Button onClick={()=>getid(o.id)}>Click</Button>
                            </CardBody>
                        </Card>
                    )

                })
            }
        </div>
    );
}

export default List;
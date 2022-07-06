import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

function ListAppointment(props) {
    const [data, setdata] = useState([]);
    const history = useHistory();

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("bookappointment"));
        setdata(localData);
    }

    useEffect(() => {
        getData();
    },[])

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("bookappointment"));

        console.log(id);

        let fData = localData.filter((l) => l.id !== id)

        localStorage.setItem("bookappointment",JSON.stringify(fData));
        getData()
    }

    const handleEdit = (id) => {
        console.log(id);
        history.push("/bookappointment", {id:id} )
    }

    return (
        <div>
            <main id="main">
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>List an Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink to={"/bookappointment"}>Bookappointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink to={"/listappointment"}>ListAppointment</NavLink>
                                </div>
                            </div>
                        </div>
                        <div>

                            {
                                data.map((d, i) => {
                                    return (
                                        <Card
                                        >
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {d.name}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    {d.date}
                                                </CardSubtitle>
                                                <Button  onClick={()=>handleEdit(d.id)}>
                                                    Edit
                                                </Button>
                                                <Button onClick={()=>handleDelete(d.id)}>
                                                    Delete
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    )

                                })
                            }
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}

export default ListAppointment;
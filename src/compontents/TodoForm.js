import React, { useContext, useState } from 'react';
import { Button, Container, FormControl, InputGroup, Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';


const TodoForm = () => {

    const [event, setEvent] = useState('');
    const { addEvent } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            id: Math.floor(Math.random() * 1000),
            event
        }
        addEvent(newEvent);
        setEvent('')

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Container>
                    <Row>
                        <Col>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Write something"
                                    aria-label="issue"
                                    value={event} onChange={(e) => { setEvent(e.target.value) }}
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Button type="submit" variant="outline-danger">Add</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </form>

        </div>
    )
}

export default TodoForm;
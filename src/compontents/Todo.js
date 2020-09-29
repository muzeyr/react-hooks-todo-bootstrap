import React, { useContext } from 'react';
import { Alert, Button, ListGroup } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

const Todo = ({ item }) => {

    const { deleteEvent } = useContext(GlobalContext);
    const deleteRow = (id) => {
        deleteEvent(id)
    }
    return (<div>
        <Alert variant="danger" onClose={() => deleteRow(item.id)} dismissible>
            <p>
                {item.event}
            </p>
        </Alert>
    </div>)
}

export default Todo;
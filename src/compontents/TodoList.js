import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import Todo from './Todo';


const TodoList=()=>{

    const {events} = useContext(GlobalContext);
    return (
        <div>
            <ListGroup>
            {events.map(item=>(
                <Todo item ={item} key={item.id}></Todo>
            ))}

            </ListGroup>
        </div>
    )
}

export default TodoList;
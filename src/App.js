import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TodoForm from './compontents/TodoForm';
import TodoList from './compontents/TodoList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
       <GlobalProvider>
        
        <TodoForm></TodoForm>

        <TodoList></TodoList>

      </GlobalProvider>

    </div>
  );
}

export default App;

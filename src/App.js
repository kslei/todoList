import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Item from './components/Item';
import ModalWindow from './components/ModalWindow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [vis, setVis] = useState(false)
  const [todo, setTodo] = useState('')
  
  const onModal = (todo) => {
    setTodo(todo)
    setVis(true)
  }
  const handleClose = () => {
    setVis(false)
    setTodo('')
  }
  const addTodo = (todo) => {
    dispatch({type: "ADD_TODO", payload: todo})
    handleClose()
  }
  const removeTodo = (todo) => {
    dispatch({type: "REMOVE_TODO", payload: todo.id})
  }
  
  return (
    <Container>
      <Header />
      <Row className='font-monospace text-info mx-1 d-none d-sm-flex'>
        <Col lg={2} sm={3}>Назва</Col>
        <Col lg={4} sm={6}>Опис</Col>
        <Col lg={2} sm={3}>Статус</Col>
      </Row>
      {todos.map(todo => 
        <Item key={todo.id} todo={todo} onModal={onModal} remove={removeTodo} addTodo={addTodo} />  
      )}
      <Row className='p-2'>
        <Col sm={8}></Col>
        <Col sm={4} className="d-grid gap-1">
          <Button variant="outline-success" size="sm" className='font-monospace' onClick={() => onModal({id: Date.now(), title: '', description: '', status: false})}>Додати завдання</Button>
        </Col>
      </Row>
      {vis &&
        <ModalWindow vis={true} todo={todo} handleClose={handleClose} addTodo={addTodo} />
      }
      
    </Container>
  );
}

export default App;

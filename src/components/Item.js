import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Item = ({todo, onModal, remove, addTodo}) => {
  
  return (
  <Container>
    <Row className='bg-light font-monospace my-2'>
      <Col className='d-sm-none text-info' xs={3}>Назва</Col>
      <Col lg={2} sm={3} xs={9}>{todo.title}</Col>
      <Col className='d-sm-none text-info' xs={3}>Опис</Col>
      <Col lg={4} sm={6} xs={9}>{todo.description}</Col>
      <Col className='d-sm-none text-info' xs={3}>Статус</Col>
      <Col lg={2} sm={3} xs={9}>
        <Form.Check type='checkbox' name='status' checked={todo.status} onChange={e => addTodo({ id: todo.id, title: todo.title, description: todo.description, status: e.target.checked })} id={todo.id} label={todo.status === true ? 'Виконано' : 'Не виконано'}></Form.Check>
      </Col>
      <Col lg={2} sm='6' className="d-grid gap-1">
        <Button variant="warning" size="sm" className='font-monospace' onClick={() => onModal(todo)}>Редагувати</Button>
      </Col>
      <Col lg={2} sm='6' className="d-grid gap-1">
        <Button variant="danger" size="sm" className='font-monospace' onClick={() => remove(todo)}>Видалити</Button>
      </Col>
    </Row>
  </Container>
  );
};
export default Item;
import React, {useEffect, useState} from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';

const ModalWindow = ({todo, handleClose, addTodo}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState('Поле не може бути порожнім');
  const [titleDirty, setTitleDirty] = useState(false);
  const [descriptionError, setDescriptionError] = useState('Поле не може бути порожнім');
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [disabled, setDisabled] = useState(false)

  useEffect(()=>{
    setTitle(todo.title)
    setDescription(todo.description)
    if(todo.title && todo.description) {
      setTitleError('')
      setDescriptionError('')
    }
  }, [todo])

  useEffect(()=>{
    if(titleError || descriptionError) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [titleError, descriptionError])

  const inputHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        if (String(e.target.value).length > 1) {
          setTitleError('')
        } else {
          setTitleError("Некоректна назва")
        }
        if (String(e.target.value).length === 0) setTitleError('Поле "Назва" не може бути порожнім')
      break
      case 'description':
        setDescription(e.target.value)
        if (String(e.target.value).length > 1) {
          setDescriptionError('')
        } else {
          setDescriptionError("Некоректний опис")
        }
        if (String(e.target.value).length === 0) setDescriptionError('Поле "Опис" не може бути порожнім')
      break
      default: return
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitleDirty(true)
       break
      case 'description':
        setDescriptionDirty(true)
      break
      default: return
    }
  }

  const setTodo = () => {
    addTodo({id: todo.id, title: title, description: description, status: todo.status})
  }
  
  return (
  <Container>
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label htmlFor="inputTitle" name="nputTitle">Введіть назву завдання</Form.Label>
          <Form.Control type="text" id="inputTitle" name="title" value={title || ''} placeholder='Введіть назву' onChange={e => inputHandler(e)} onBlur={e => blurHandler(e)} ></Form.Control>
          {(titleDirty && titleError.length)
            ?<Form.Text className='text-danger'>{titleError}</Form.Text>
            :<Form.Text>Назва має бути довшою за 1 символ</Form.Text>
          }
        </Form.Group>
        <Form.Group className='my-2'>
          <Form.Label htmlFor="inputDescription" name="inputDescription">Введіть опис завдання</Form.Label>
          <Form.Control type="text" id="inputDescription" name="description" value={description || ''} placeholder='Введіть опис' onChange={e => inputHandler(e)} onBlur={e => blurHandler(e)} ></Form.Control>
          {(descriptionDirty && descriptionError)
            ?<Form.Text className='text-danger'>{descriptionError}</Form.Text>
            :<Form.Text >Опис має бути довшим за 1 символ</Form.Text>
          }
          
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Закрити</Button>
        <Button variant="primary" onClick={setTodo} disabled={disabled}>Зберегти</Button>
      </Modal.Footer>
    </Modal>
  </Container>
  );
};
export default ModalWindow;
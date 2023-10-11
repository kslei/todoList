import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Header = () => {
  
  return (
  <Container>
    <Row className='h1 p-2 bg-info text-bg-primary d-flex justify-content-center'>Список завданнь</Row>
  </Container>
  );
};
export default Header;
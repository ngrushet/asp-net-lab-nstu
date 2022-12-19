import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const AdminPanel = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={1}>
          <Button>Добавить категорию</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;

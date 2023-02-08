import React from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SearchForm() {
  return (
    <div className='search-form'>
      <Form>
      <Row>
        <Col xs={9}>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Button variant='warning' type='submit'>Search</Button>
        </Col>
      </Row>
    </Form>
    </div>
  )
}

export default SearchForm

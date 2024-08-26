import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber },
    });
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          pattern="\d{3}-\d{4}-\d{4}"
          placeholder="전화번호를 입력하세요."
          inputMode="numeric"
          title="전화번호는 010-0000-0000 형식으로 입력하세요."
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <div className="Button-control">
          <Button variant="primary" type="submit">
            추가
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;

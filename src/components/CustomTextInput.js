import React from 'react';
import { Container, Form } from 'react-bootstrap';

function CustomTextInput({ selected, setSelected, short, setDisableNext }) {
  const onChangeTextInput = e => {
    if (e.target.value.length > 0) setDisableNext(false);
    else setDisableNext(true);
    setSelected([e.target.value]);
  };

  return (
    <Container>
      {short ? (
        <Form.Group>
          <Form.Control
            type="text"
            value={selected[0] || ''}
            onChange={onChangeTextInput}
          />
        </Form.Group>
      ) : (
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="4"
            value={selected[0] || ''}
            onChange={onChangeTextInput}
          />
        </Form.Group>
      )}
    </Container>
  );
}

export default CustomTextInput;

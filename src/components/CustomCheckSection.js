import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { selectedButtonColor } from '../utils/Config';

function CustomCheckSection({
  selected,
  _setSelected,
  setExtra,
  options,
  setDisableNext,
  multiple = false,
  other = false,
}) {
  const [otherInput, setOtherInput] = useState('');

  const setSelected = newItem => {
    const cloneSelected = multiple ? selected.slice() : [];
    const index = selected.indexOf(newItem);
    if (index > -1) {
      cloneSelected.splice(index, 1);
    } else {
      cloneSelected.push(newItem);
    }
    if (
      cloneSelected.length === 1 && cloneSelected.indexOf(other) > -1
        ? otherInput.length > 0
        : cloneSelected.length > 0
    )
      setDisableNext(false);
    else setDisableNext(true);
    _setSelected(cloneSelected);
  };

  const onChangeOtherInput = e => {
    const newValue = e.target.value;
    if (newValue.length > 0) setDisableNext(false);
    else setDisableNext(true);
    setExtra(newValue);
    setOtherInput(newValue);
  };

  const selectOther = () => {
    setSelected(other);
  };

  const isSelected = option => selected.indexOf(option) !== -1;

  const selectItem = (option, _other = false) => (
    <Row style={styles.row} key={option}>
      <div
        style={Object.assign(
          {
            backgroundColor: isSelected(option) ? selectedButtonColor : 'white',
            color: isSelected(option) ? 'white' : 'black',
            border: `1px solid ${isSelected(option) ? 'transparent' : 'black'}`,
          },
          styles.selectButton
        )}
        onClick={() => (!_other ? setSelected(option) : selectOther())}
        onKeyPress={event => event.key === 'Enter' && setSelected(option)}
        role="button"
        tabIndex="0"
      >
        {option}
      </div>
    </Row>
  );

  return (
    <Container>
      {options.map(option => selectItem(option, false))}
      {other && selectItem(other, true)}
      {isSelected(other) && (
        <Form.Group>
          <Form.Control
            type="text"
            value={otherInput}
            onChange={onChangeOtherInput}
          />
        </Form.Group>
      )}
    </Container>
  );
}

const styles = {
  row: {
    justifyContent: 'center',
    padding: 5,
  },
  selectButton: {
    padding: 10,
    borderRadius: 5,
    cursor: 'pointer',
  },
};

export default CustomCheckSection;

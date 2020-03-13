import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import ReactGA from 'react-ga';
import { txts } from '../utils/Config';
import { SaveFirestore } from './api';

function QuestionNavigation({
  selected,
  extra,
  resetAnswers,
  emailInput,
  step,
  setStep,
  disableNext,
  resetDisableNext,
  FIRST_QUESTION_INDEX,
}) {
  const skipClicked = () => {
    SaveFirestore(
      { skipInQuestionIndex: step - FIRST_QUESTION_INDEX },
      emailInput
    );
    localStorage.setItem('step', 1e10);
    setStep(1e10);
    ReactGA.event({
      category: 'onboarding',
      action: 'button',
      label: 'skip',
      value: step + 1 - FIRST_QUESTION_INDEX,
    });
  };

  const nextClicked = () => {
    const data = {};
    data[`question_${step - FIRST_QUESTION_INDEX}`] = { data: selected, extra };
    SaveFirestore(data, emailInput);
    resetAnswers();
    resetDisableNext();
    localStorage.setItem('step', step + 1);
    setStep(step + 1);
    ReactGA.event({
      category: 'onboarding',
      action: 'button',
      label: 'next',
      value: step + 1 - FIRST_QUESTION_INDEX,
    });
  };

  return (
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Row>
        <Col xs={3} style={{ textAlign: 'left' }}>
          <Button variant="secondary" onClick={skipClicked}>
            {txts.skipQuestions}
          </Button>
        </Col>
        <Col xs={6} />
        <Col xs={3} style={{ textAlign: 'right' }}>
          <Button
            variant="primary"
            disabled={disableNext}
            onClick={nextClicked}
          >
            {txts.nextQuestion}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionNavigation;

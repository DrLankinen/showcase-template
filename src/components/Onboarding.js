import React, { useState } from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import ReactGA from 'react-ga';
import { txts, questions } from '../utils/Config';
import CustomCheckSection from './CustomCheckSection';
import CustomTextInput from './CustomTextInput';
import QuestionNavigation from './QuestionNavigation';
import { SaveFirestore } from './api';

const FIRST_QUESTION_INDEX = 2;

function Onboarding() {
  const [step, setStep] = useState(parseInt(localStorage.getItem('step')) || 0);
  const [emailInput, setEmailInput] = useState(
    localStorage.getItem('emailInput') || ''
  );
  const [disableNext, setDisableNext] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [extra, setExtra] = useState(null);

  const saveEmailWithIp = (ip = false) => {
    if (ip) {
      SaveFirestore({ date: new Date(), ip }, emailInput);
    } else {
      SaveFirestore({ date: new Date() }, emailInput);
    }
  };

  const submitEmail = event => {
    event.preventDefault();
    fetch('https://www.cloudflare.com/cdn-cgi/trace')
      .then(response => response.text())
      .then(data => {
        try {
          saveEmailWithIp(data.split('\n')[2].split('=')[1]);
        } catch (error) {
          saveEmailWithIp();
        }
      })
      .catch(error => {
        console.warn('error:', error);
        saveEmailWithIp();
      });
    setStep(2);
    localStorage.setItem('step', 2);
    localStorage.setItem('emailInput', emailInput);
    ReactGA.event({
      category: 'onboarding',
      action: 'button',
      label: 'submit email',
    });
  };

  if (step === 0) {
    return (
      <Button
        size="lg"
        onClick={() => {
          ReactGA.event({
            category: 'onboarding',
            action: 'button',
            label: 'first button',
          });
          setStep(1);
        }}
      >
        {txts.joinButton}
      </Button>
    );
  }
  if (step === 1) {
    return (
      <Form onSubmit={submitEmail}>
        <Form.Group>
          <Form.Control
            autoFocus
            size="lg"
            type="email"
            placeholder={txts.enterEmailPlaceholder}
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
          />
        </Form.Group>
        <div style={{ textAlign: 'center' }}>
          <Button variant="primary" type="submit" size="lg">
            {txts.sendEmailButton}
          </Button>
        </div>
      </Form>
    );
  }
  if (step - FIRST_QUESTION_INDEX < questions.length) {
    const question = questions[step - FIRST_QUESTION_INDEX];
    return (
      <Container>
        <Row style={styles.questionTitle}>
          <h2>{question.title}</h2>
        </Row>
        {question.type === 'SELECT' && (
          <CustomCheckSection
            selected={answers}
            _setSelected={setAnswers}
            setExtra={setExtra}
            multiple={question.multiple}
            options={question.options}
            setDisableNext={setDisableNext}
            other={question.other}
          />
        )}
        {question.type === 'TEXT' && (
          <CustomTextInput
            selected={answers}
            setSelected={setAnswers}
            short={question.short}
            setDisableNext={setDisableNext}
          />
        )}
        <QuestionNavigation
          selected={answers}
          extra={extra}
          resetAnswers={() => {
            setAnswers([]);
            setExtra(null);
          }}
          emailInput={emailInput}
          step={step}
          setStep={setStep}
          disableNext={disableNext}
          resetDisableNext={() => setDisableNext(true)}
          FIRST_QUESTION_INDEX={FIRST_QUESTION_INDEX}
        />
      </Container>
    );
  }
  return (
    <div>
      <h1>{txts.thankYouTitle}</h1>
      <p>{txts.thankYouContent}</p>
      <Button
        onClick={() => {
          ReactGA.event({
            category: 'onboarding',
            action: 'button',
            label: 'add another email',
          });
          localStorage.removeItem('step');
          localStorage.removeItem('emailInput');
          window.location.reload(true);
        }}
      >
        Add another email
      </Button>
    </div>
  );
}

const styles = {
  questionTitle: {
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
};

export default Onboarding;

import shortid from 'shortid';
import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { id: shortid.generate(), category: 'good' },
    { id: shortid.generate(), category: 'neutral' },
    { id: shortid.generate(), category: 'bad' },
  ];

  const handleFeedback = category => {
    switch (category) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedbacks = () => {
    return good + neutral + bad;
  };

  const positivePercentageFeedbacks = () =>
    Math.round((good / totalFeedbacks()) * 100) || 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentageFeedbacks}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

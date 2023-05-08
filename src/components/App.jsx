import shortid from 'shortid';
import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    { id: shortid.generate(), category: 'good' },
    { id: shortid.generate(), category: 'neutral' },
    { id: shortid.generate(), category: 'bad' },
  ];

  handleFeedback = category =>
    this.setState(prevState => {
      return {
        [category]: prevState[category] + 1,
      };
    });

  totalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentageFeedbacks = () =>
    Math.round((this.state.good / this.totalFeedbacks()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedbacks() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedbacks}
              positivePercentage={this.positivePercentageFeedbacks}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

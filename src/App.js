import React from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  postFeedback = (option) => {
    this.setState(prevState => ({[option]: prevState[option] + 1}))
  }

  render() {
    return (
      <Section title='Please leave feedback'>

        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.postFeedback} />
        {this.countTotalFeedback() > 0 ?
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          persentage={this.countPositiveFeedbackPercentage()}
          /> :
          <Notification text='No feedback given' />}
        
      </Section>
    );
  }
  
}

export default App;

import React, { useState } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const feedbackIncrement = (option) => {
    switch (option) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.values(options)}
        onLeaveFeedback={feedbackIncrement}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          persentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification text="No feedback given" />
      )}
    </Section>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     };
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
//   };

//   postFeedback = (option) => {
//     this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
//   };

//   render() {
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.postFeedback}
//         />
//         {this.countTotalFeedback() > 0 ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             persentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification text="No feedback given" />
//         )}
//       </Section>
//     );
//   }
// }

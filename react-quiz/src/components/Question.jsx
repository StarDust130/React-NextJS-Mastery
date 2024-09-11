import Option from "./Option";

/* eslint-disable react/prop-types */
const Question = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
};
export default Question;

import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {
  console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question)=> {
          return (<QuestionItem
          key={question.id}
          question={question}
          questions={questions}
          setquestions={setQuestions}
          />)
        })}
        </ul>
    </section>
  );
}

export default QuestionList;

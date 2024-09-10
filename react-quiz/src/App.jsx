import Header from "./components/Header";
import MainComp from "./components/MainComp";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainComp >
        <h1>React Quiz</h1>
        <p>
          This is a quiz to test your knowledge of React. It is a multiple
          choice quiz with 10 questions. Each question has 4 possible answers,
          but only one of them is correct. You can choose only one answer per
          question. At the end of the quiz, you will see your score.
        </p>
      </MainComp>
    </div>
  );
};
export default App;
 
import react,{useContext, useState} from 'react';
import '../styles/App.scss';
import QuestionSlider from './questionsSlider';
import {QuestionsData} from './QeustionsDataHistory';
// if you need to make an edti page you need to use context
// import { QeustionsContext } from '../context';
const HistoryPage = () => {
    // const [qeustionsData2, setQeustionsData2] = useContext(QeustionsContext);
  return (
    <div className="containerFirstpage">
      <div className="container">
        <QuestionSlider QuestionsData={QuestionsData} type="history"/>
        {/* <h1>hello world</h1> */}
    </div>
    </div>
  );
}
export default HistoryPage;

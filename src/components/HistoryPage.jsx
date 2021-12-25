import react,{useContext, useState} from 'react';
import '../styles/App.scss';
import QuestionSlider from './questionsSlider';
import {QuestionsData} from './QeustionsDataHistory';
// import { QeustionsContext } from '../context';
const HistoryPage = () => {
    // const [qeustionsData2, setQeustionsData2] = useContext(QeustionsContext);
  return (
    <div className="containerFirstpage">
      <div className="container">
        <QuestionSlider QuestionsData={QuestionsData} type="history"/>
    </div>
    </div>
  );
}
export default HistoryPage;

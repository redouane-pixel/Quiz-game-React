import react,{useContext, useState} from 'react';
import '../styles/App.scss';
import QuestionSlider from './questionsSlider';
import {QuestionsData} from './QeustionsDataSport';
// import { QeustionsContext } from '../context';
const SportPages = () => {
    // const [qeustionsData2, setQeustionsData2] = useContext(QeustionsContext);
  return (
    <div className="containerFirstpage">
      <div className="container">
        <QuestionSlider QuestionsData={QuestionsData} type="sports"/>
    </div>
    </div>
  );
}
export default SportPages;

import react,{useContext, useState} from 'react';
import '../styles/App.scss';
import {QuestionsData} from './QeustionsDataSciences';
import QuestionSlider from './questionsSlider';
// import { QeustionsContext } from '../context';
const SciencesPage = () => {
    // const [qeustionsData2, setQeustionsData2] = useContext(QeustionsContext);
  return (
    <div className="containerFirstpage">
      <div className="container">
        <QuestionSlider QuestionsData={QuestionsData} type="sciences"/>
    </div>
    </div>
  );
}

export default SciencesPage;

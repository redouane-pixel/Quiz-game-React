import React, {useState} from 'react';
import { FaBeer } from 'react-icons/fa';
import Image from './pictures/image.png'
import Haider2 from './haider2'
import Haider from './haider'
import ExelentIcon from './pictures/icons8-cup-100 (4).png'
import GoodIcon from './pictures/goodIcon.png';
import BadIcon from './pictures/badIcon.png';
import VeryBadIcon from './pictures/veryBadIcon.png';
import IsadIcon from './pictures/IsadIcon.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ResultBox from './resultBox';
const QuestionSlider = ({QuestionsData, type}) => {
  // if you put a array of images and it's deosn't working you can check a file:"sliderDataExample.jsx" and you will found it in prductPageComponent
  const length = QuestionsData.length   
  const [current, setCurrent] = useState(0);
    // if you need to display a specific number of images just change the length to a number 
    const [correctAnsewrNum, setCorrectAnsewrNum] = useState(0);
    const [styleChoice1 ,setStyleChoice1] = useState("");
    const [styleChoice2 ,setStyleChoice2] = useState("");
    const [styleChoice3 ,setStyleChoice3] = useState("");
    const [active, setActive] = useState(false);
    const HundleClick = (correctAnsewr, anwserChoice1, anwserChoice2, choiceNum) => {
      setActive(true);
      if (correctAnsewr === anwserChoice1) {
        setStyleChoice1("trueAwnser");
        setStyleChoice2("falseAwnser");
        setStyleChoice3("falseAwnser");
        if (choiceNum === 1) {
          const NewTrueAwnsers = correctAnsewrNum + 1;
          setCorrectAnsewrNum(NewTrueAwnsers);
        }
      }
      else {
        setStyleChoice1("falseAwnser");
        if (correctAnsewr === anwserChoice2) {
          setStyleChoice2("trueAwnser");
          setStyleChoice3("falseAwnser");
          if (choiceNum === 2) {
            const NewTrueAwnsers = correctAnsewrNum + 1;
            setCorrectAnsewrNum(NewTrueAwnsers);
          }
        }
        else {
          setStyleChoice2("falseAwnser")
          setStyleChoice3("trueAwnser")
          if (choiceNum === 3) {
            const NewTrueAwnsers = correctAnsewrNum + 1;
            setCorrectAnsewrNum(NewTrueAwnsers);
          }
        }
      }
      setTimeout(() => {
        nextSlide();
        setActive(false);
        setStyleChoice1("");
        setStyleChoice2("");
        setStyleChoice3("");
      }, 1000);
    }
    const nextSlide = () => {
      // this function go to the left one more and if the current number is equal to length - 1 that's mean the last index it's make the current eqaul to the length but the importatnt that we use this to display the result
        setCurrent(current === length - 1 ? length : current + 1);
      };
      // this line check if we have a real array, and if we not it return null
    if (!Array.isArray(QuestionsData) || QuestionsData.length <= 0) {
        return null;
    }
    return(
      <div>
        {current !== length && (
          <Haider2 length={length} current={current} correctAnsewrNum={correctAnsewrNum} type={type}/>
        )}
         <section className='slider'>
            {/* this lines of code return eche image in the array but if it had the index number that mean the current number if not it's hidden */}
         {QuestionsData.map((test, index) => {
           return(
            <div
                    className={index === current ? 'slide' : 'slide'}
                    key={index}
                  >
                    {/* if you use it don't forget to change the slider class for you can use it at any position of the page, and you wil find a %slider for basic and put the top and ... */}
                         {index === current && (
                             <div className="testBlock">
                                 <div className="question">{test.qeustion}</div>
                                 <div className="choicesPart">
                                 <div  className={`choice ${active ? styleChoice1 : ""}`}  onClick={() => {HundleClick(test.correctChoice, test.choice1.answer, test.choice2.answer, 1)}}>
                                   {test.choice1.image && (
                                       <img src={test.choice1.image} className="Image"/>
                                     )}
                                     {test.choice1.image === "" && (
                                           <div className="NoImage">
                                           <div className="textNoImage">
                                             <img src={Image} alt=""  className='imageIcon'/>
                                           </div>
                                         </div>      
                                     )}
                                     <div className="answer">{test.choice1.answer}</div>
                                   </div>
                                   <div  className={`choice ${active ? styleChoice2 : ""}`}  onClick={() => {HundleClick(test.correctChoice, test.choice1.answer, test.choice2.answer, 2)}}>
                                   {test.choice2.image && (
                                       <img src={test.choice2.image} className="Image"/>
                                     )}
                                     {test.choice2.image === "" && (
                                        <div className="NoImage">
                                          <div className="textNoImage">
                                            <img src={Image} alt=""  className='imageIcon'/>
                                          </div>
                                        </div>                                               
                                     )}
                                     <div className="answer">{test.choice2.answer}</div>
                                   </div>
                                   <div  className={`choice ${active ? styleChoice3 : ""}`} onClick={() => {HundleClick(test.correctChoice, test.choice1.answer, test.choice2.answer, 3)}} >
                                   {test.choice3.image && (
                                       <img src={test.choice3.image} className="Image"/>
                                     )}
                                     {test.choice3.image === "" && (
                                             <div className="NoImage">
                                             <div className="textNoImage">
                                               <img src={Image} alt=""  className='imageIcon'/>
                                             </div>
                                           </div>                                                   
                                     )}
                                     <div className="answer">{test.choice3.answer}</div>
                                   </div>
                                   <button className="Skip-btn" onClick={nextSlide}>Skip</button>
                                 </div>
                             </div>
                            )}
                    </div>
           );
          })}
       </section>
       {current === length && (
         <div>
           <Haider text="" icon=""/>
           {correctAnsewrNum === length && (
             <ResultBox result="EXELENT" icon={ExelentIcon} correctAnsewrNum={correctAnsewrNum} length={length} leadingStyle="exellent"/>
           )}
            {correctAnsewrNum < length && correctAnsewrNum > 0.5 * length && (
             <ResultBox result="GOOD" icon={GoodIcon} correctAnsewrNum={correctAnsewrNum} length={length} leadingStyle="good"/>
           )}
            {correctAnsewrNum < 0.5 * length && correctAnsewrNum > 0.2 * length && (
             <ResultBox result="BAD" icon={BadIcon} correctAnsewrNum={correctAnsewrNum} length={length} leadingStyle="bad"/>
           )}
            {correctAnsewrNum <= 0.2 * length && correctAnsewrNum > 0 && (
             <ResultBox result="VERY BAD" icon={VeryBadIcon} correctAnsewrNum={correctAnsewrNum} length={length}leadingStyle="veryBad"/>
           )}
            {correctAnsewrNum === 0 && (
             <ResultBox result="I AM SAD" icon={IsadIcon} correctAnsewrNum={correctAnsewrNum} length={length}leadingStyle="sad"/>
           )}
         </div>
       )}
      </div>
    );
}
export default QuestionSlider;
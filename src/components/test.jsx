import React, {useState} from 'react';
const QuestionSlider = ({QuestionsData}) => {
  // if you put a array of images and it's deosn't working you can check a file:"sliderDataExample.jsx" and you will found it in prductPageComponent
    const [current, setCurrent] = useState(0);
    // if you need to display a specific number of images just change the length to a number 
    const length = QuestionsData.length 
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
      // this function go to the left one more and if the current number is equal to length - 1 that's mean the last index it's back to the 0
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
      // this line check if we have a real array, and if we not it return null
    if (!Array.isArray(QuestionsData) || QuestionsData.length <= 0) {
        return null;
    }
    return(
        <section className='slider'>
            {/* this lines of code return eche image in the array but if it had the index number that mean the current number if not it's hidden */}
                 {QuestionsData.map((test, index) => {
                  //  put return here
                    <div
                    className={index === current ? 'slide' : 'slide'}
                    key={index}
                  >
                    {/* if you use it don't forget to change the slider class for you can use it at any position of the page, and you wil find a %slider for basic and put the top and ... */}
                         {index === current && (
                             <div className="testBlock">
                                 <div className="question">{test.qeustion}</div>
                                 <div className="choicesPart">
                                   <div className={`choice ${active ? styleChoice1 : ""}`} 
                                   onClick={() => {HundleClick(test.correctChoice, test.choice1.answer, test.choice2.answer, 1)}}>
                                     <img src={test.choice1.image} alt={test.choice1.answer} className="Image"/>
                                     <div className="answer">{test.choice1.answer}</div>
                                   </div>
                                   <div  className={`choice ${active ? styleChoice2 : ""}`}  onClick={() => {HundleClick(test.correctChoice, test.choice1.answer, test.choice2.answer, 2)}}>
                                     <img src={test.choice2.image} alt={test.choice2.answer} className="Image"/>
                                     <div className="answer">{test.choice2.answer}</div>
                                   </div>
                                   <div  className={`choice ${active ? styleChoice3 : ""}`} onClick={() => {HundleClick(test.correctChoice, test.choice1.answer, test.choice2.answer, 3)}} >
                                     <img src={test.choice3.image} alt={test.choice3.answer} className="Image"/>
                                     <div className="answer">{test.choice3.answer}</div>
                                   </div>
                                   <button className="Skip-btn" onClick={nextSlide}>Skip</button>
                                 </div>
                                 {/* this line display the image number 0,1,2,3... */}
                                 <div className="currentNum">{current+1}</div>
                             </div>
                            )}
                    </div>
              })}
       </section>
    );
}
export default QuestionSlider;
import react from 'react';
import '../styles/App.scss';
const Haider2 = ({length, current, correctAnsewrNum, type}) => {
  return (
    <div className="haider2">
      <div className="smallLogo"><span>Quiz Game</span></div>
      <div className="informationBlock">
          <div className='correctAwensers'>correct awnsers: {correctAnsewrNum}</div>
          <div className='numQuestion'>{current+1} questions out of {length}</div>
          <div className='quizType'>type: {type}</div>
      </div>
      <div className='withoutRole'></div>
    </div>
  );
}

export default Haider2;

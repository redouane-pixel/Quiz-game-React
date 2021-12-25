import react,{useState} from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';
const ResultBox = ({result, icon, correctAnsewrNum, length, leadingStyle}) => {
    const [point, setPoint] = useState("point-")
  return (
    <div className='restul'>
    <div className="resultBox">
      <div className="topBox">Result</div>
      <div className="bottomBox">
      <span>{result}</span>
        <img src={icon} alt="" className='icon'/>
        <div className="leadingBox">
          <div className="box">
            <div className={`insideBox ${leadingStyle}`}></div>
          </div>
          <div><span>{correctAnsewrNum}/{length}</span></div>
        </div>
      </div>
      <div className="buttonsBlock">
   <Link to="/">  <button className='btn-playAgain'>Play again</button></Link>
   {/* <Link to="/editPage"><button className='btn-edit'>Edit</button></Link> */}
   </div>
    </div>
  </div>
  );
}

export default ResultBox;

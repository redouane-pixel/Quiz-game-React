import react,{useState, useContext} from 'react';
import '../styles/App.scss';
import sportImage from './pictures/sport.png';
import LaboratoryImage from './pictures/scieces3.png';
import HistoireImage from './pictures/histoire.png';
// import elephatnImage from './image.png';
import Haider from './haider';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
const TypeOfGamePage = () => {
    const [point, setPoint] = useState("point-");
  return (
    <div className="container">
      <Haider/>
      {
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((i) => (
          <div className={point+i}></div>
        ))
      }
      <div className="choicesBlock">

        <div className="blockTop">
          <Link to="sport" className="noneStyle">
            <img src={sportImage} alt="" className='iconChoice'/>
            <div className="CircleChoice">Sport</div>
          </Link>
        </div>
        <div className="blockBottom">
        <Link to="history" className="noneStyle">
        <img src={HistoireImage} alt="" className='iconChoice'/>
          <div className="CircleChoice">History</div>
          </Link>
          <Link to="sciences" className="noneStyle">
          <img src={LaboratoryImage} alt="" className='iconChoice sciences'/>
            <div className="CircleChoice">Sciences</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TypeOfGamePage;

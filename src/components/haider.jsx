import react from 'react';
import '../styles/App.scss';
const Haider = ({text, Icon}) => {
  return (
    <div className="haider">
      <div className="title">Quiz Game{text}
      <img src={Icon} alt="" className='editIcon'/>
      </div>
    </div>
  );
}

export default Haider;

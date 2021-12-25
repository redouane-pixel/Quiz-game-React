import React, { useState, useContext } from "react";
// import react,{useState} from 'react';
import qeustionIconEdit from './pictures/qeustionIconEdit.png';
import correctAwnserEdit from './pictures/correctAwnserEdit.png';
import { QeustionsContext } from '../context';
import '../styles/App.scss';
const QeustionEdit = ({qeustionData, testNum}) => {
  const [qeustionsData2, setQeustionsData2] = useContext(QeustionsContext);
  const [state, setState] = React.useState({
      qeustionData:qeustionData,    
      qeustion:"",
      choice1:"",
      choice2:"",
      choice3:"",
      choice1IMG:"",
      choice2IMG:"",
      choice3IMG:"",
      correctChoice:"",
  });
  const [qeustionArray, setQustionArray] = useState("");
  // 
    const tupdateInputValue = (evt, type) => {
      const value = evt.target.value;
      const Name = evt.target.name; 
      console.log("Name")
      let ObjectItem = {...state.qeustionData};
      ObjectItem.qeustion = "edit works"
      // ObjectItem.Name = value
      setState({
        ...state,
        qeustionData:ObjectItem
      });
      var items = [...qeustionsData2];
      items[0] = state.qeustionData
      setQeustionsData2(items)
    }
  return (
    <div className="container-qeustion">
      {/* <button onClick={() => {testFunction()}}>change first qeustion</button> */}
        <div className='title'>Qeustion{testNum}:</div>
        <div className="qeustionBlock">
          <div className='title-small'>qeustion:</div>
          <div className="inputBlock">
            <img src={qeustionIconEdit} alt="" className="testBox"/>
            <input type="text" className='defaulInput' placeholder="qeustion" value={state.qeustionData.qeustion} name='qeustion' onChange={tupdateInputValue}/> 
          </div>
        </div>
        <div className="choicesBlock">
          {/*  */}
            <div className="anwsersBlock">
              <div className='title-small'>chioces:</div>
              <div className="inputBlock">
                <div className="num testBox">1</div>
                <input type="text" placeholder="awnser1" className='choiceInput' value={state.qeustionData.choice1.answer} name='choice1' onChange={tupdateInputValue}/> 
              </div>
              <div className="inputBlock">
                <div className="num testBox">2</div>
                <input type="text" placeholder="awnser1" className='choiceInput' value={state.qeustionData.choice2.answer} name='choice2' onChange={tupdateInputValue}/> 
              </div>
              <div className="inputBlock">
                <div className="num testBox">3</div>
                <input type="text" placeholder="awnser1" className='choiceInput' value={state.qeustionData.choice3.answer} name='choice3' onChange={tupdateInputValue}/> 
              </div>   
            </div>
            {/*  */}
            <div className="imgBlock">
              <div className='title-small'>images:</div>
              <div className="inputBlock">
                <div className="num testBox">1</div>
                <input type="text" className='ImageSrc' value={state.qeustionData.choice1.image} name='choice1IMG' onChange={tupdateInputValue}/> 
              </div>
              <div className="inputBlock">
                <div className="num testBox">2</div>
                <input type="text" className='ImageSrc' value={state.qeustionData.choice1.image} name='choice2IMG' onChange={tupdateInputValue}/> 
              </div>
              <div className="inputBlock">
                <div className="num testBox">3</div>
                <input type="text" className='ImageSrc' value={state.qeustionData.choice1.image} name='choice3IMG' onChange={tupdateInputValue}/> 
              </div>   
            </div>
            <div className="correctchoiceBlock">
              <div className='title-small'>correct qeustion:</div>
              <div className="inputBlock">
                <img src={correctAwnserEdit} alt="" className="testBox"/>
                <input type="text" className='defaulInput' value={state.qeustionData.correctChoice} name='correctChoice' onChange={tupdateInputValue}/> 
              </div>
            </div>
            {/* <p>{JSON.stringify(state.qeustionData)}</p> */}
          </div>

       {/* <input type="text" placeholder='qeustion' className='defaulInput' value={state.qeustion} name='qeustion' onChange={tupdateInputValue}/> */}
       {/* <div className="choiceBlock">
        <input type="text" placeholder='choice1' className='defaulInput choiceInput' value={state.choice1} name='choice1' onChange={tupdateInputValue}/>
        <input type="text" placeholder='img source' className='defaulInput ImageSrc' value={state.choice1IMG} name='choice1IMG' onChange={tupdateInputValue}/>
       </div>
       <div className="choiceBlock">
        <input type="text" placeholder='choice2' className='defaulInput choiceInput' value={state.choice2} name='choice2' onChange={tupdateInputValue}/>
        <input type="text" placeholder='img source' className='defaulInput ImageSrc' value={state.choice2IMG} name='choice2IMG' onChange={tupdateInputValue}/>
       </div>
       <div className="choiceBlock">
        <input type="text" placeholder='choice3' className='defaulInput choiceInput' value={state.choice3} name='choice3' onChange={tupdateInputValue}/>
        <input type="text" placeholder='img source' className='defaulInput ImageSrc' value={state.choice3IMG} name='choice3IMG' onChange={tupdateInputValue}/>
       </div> */}
       {/* <input type="text" placeholder='correct qeustion (put the choice awnser)' className='defaulInput' value={state.correctChoice} name='correctChoice' onChange={tupdateInputValue}/> */}
    </div>
  );
}

export default QeustionEdit;

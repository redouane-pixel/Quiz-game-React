import react,{useState, useContext} from 'react';
import '../styles/App.scss';
import QeustionEdit from './qeustionEdit';
import Haider from './haider';
import editIcon from './pictures/edit.svg'
import { QeustionsContext } from '../context';
import { Link } from 'react-router-dom';
const EditPage = () => {
  const [qeustionsData2, setQeustionsData2] = useContext(QeustionsContext);
  const [dataTest, setDataTest] = useState(
    [
      {
          qeustion:"what is the biggest animal in the world ?",
            choice1:{
                 answer:"Elepahnt",
                 image:"https://media.istockphoto.com/photos/okavango-delta-wild-elephant-wildlife-scene-from-nature-elephant-in-picture-id1293904168?b=1&k=20&m=1293904168&s=170667a&w=0&h=dxxkfAqbV31rIFHo-5rO3aOEmZ6XMZSb6TR5wWGS6Ss="
            },
            choice2:{
                 answer:"Dinasor",
                 image:"https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            },
            choice3:{
                 answer:"Blue Whale",
                  image:"https://media.istockphoto.com/photos/blue-whale-sea-animal-picture-id472300978?b=1&k=20&m=472300978&s=170667a&w=0&h=k6-cjhKbQO30a--Z8uA4bLHwp0Q7RGvsO6cbixxjXqY="
            },
            correctChoice:"Blue Whale"
       },
       {
            qeustion:"Who invented the measles vaccine?",
            choice1:{
                 answer:"Alexandre Yersin",
                 image:"data:image/jpeg;base64,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"
            },
            choice2:{
                 answer:"Maurice Hilleman",
                 image:"http://photos1.blogger.com/blogger/1410/448/1600/obit-MauriceHilleman.0.jpg"
            },
            choice3:{
                 answer:"Avicenna",
                  image:"https://pbs.twimg.com/media/EYtaqTDWkAAH1_a.png"
            },
            correctChoice:"Maurice Hilleman"
       },
      ]
  );
  const testFunction = () => {
    let items = [...dataTest];
    let item = {...items[0]};
    item.qeustion = 'edit works';
    items[0] = item;
    setDataTest(items)
 }
  return (
    <div className='containerFirstpage2'>
       <div className='container'>
      <Haider text="/Edit" Icon={editIcon}/>
      {/* <button onClick={() => {testFunction()}}>change first qeustion</button>
      {JSON.stringify(dataTest)} */}
      {/* <button onClick={() => { setQeustionsData([])}}>delet all data qeustions</button> */}
      {/* <div className="testsContianer">
      <QeustionEdit/>
      </div> */}
      {qeustionsData2.map((test, index) => {
        return(
          <div className='testsContianer'>
            <QeustionEdit qeustionData={qeustionsData2[index]} testNum={index+1} testQeustion={test.qeustion} choice1Ans={test.choice1.answer} img1={test.choice1.image} choice2Ans={test.choice2.answer} img2={test.choice2.image} choice3Ans={test.choice3.answer} img3={test.choice3.image} correctAns={test.correctChoice}/>
          </div>
        );
    })}
    </div>
    <Link to="/">  <button className='btn-playAgain'>Play again</button></Link>
    </div>
  );
}

export default EditPage;

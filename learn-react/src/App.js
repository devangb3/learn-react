import './App.css';
import TicTac from './Tictac'
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const user = {
  'name' : 'Devang Borkar',
  'age' : '22',
  'imageurl' : 'https://i.imgur.com/yXOvdOSs.jpg',
  'imagesize' : '90'
}
const education = [
  {name : "High School", id:'1', year : '2019 '},
  {name : "Undergrad", id:'2', year:'2023'},
  {name : "Grad School", id : '3', year: '2026'}
]
function MyButton({count, onClick}){
  
  return (
     <button onClick = {onClick}>
       Clicked {count} times
       </button>
  );
}
function Image(){
  return (
    <img 
      className = "avatar"
      src = {user.imageurl}
      alt = {"Photo of : " + user.name}
      style = {{
        width : user.imagesize,
        height : user.imagesize
      }}
      />
  )
}
function EducationFunc(){
  return (
    <ul>
      {education.map(ed =>
        <li key = {ed.id}>
          {ed.name + " "}
          {ed.year === '2019' ? '2000' : ed.year}
        </li>
      )}
    </ul>
  )
}
function Home(){
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return(
    <div>
      <h1> Hello World</h1>
      <br/>
      <MyButton count = {count} onClick = {handleClick} />
      <MyButton count = {count} onClick = {handleClick} />
      <br/>
      <Image />
      <br/>
        <EducationFunc/>
    </div>
  )
}
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tictac">Tic Tac Toe</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/tictac" element ={<TicTac/>}/>
      </Routes>
    </Router>
  )
}

export default App;

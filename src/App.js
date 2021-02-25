import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  // const nayoks = [{name: 'aliRaj', age: 52}, {name: 'bappi', age: 23}]
  return (
    <div className="App">
      <MovieCount></MovieCount>
      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
      }
      {/* {
        nayoks.map(nk => <Nayok name={nk}></Nayok>)
      } */}
      {/* <Nayok name={nayoks[0]} age='50'></Nayok>
      <Nayok name='sakib khanna' age='30'></Nayok>
      <Nayok name='bapparaj' age='40'></Nayok>
      <Nayok></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

function MovieCount() {
  const [count, setCount] = useState(0);
  const clickHandle = () => setCount(count +1);
  return (
    <div>
      <button onClick={clickHandle}>Add movie</button>
      <h2>movie count {count}</h2>
      <DisplayMovies movies={count}></DisplayMovies>
      <DisplayMovies movies={count + 10}></DisplayMovies>
      <DisplayMovies movies={count}></DisplayMovies>
    </div>
  )
}

function DisplayMovies(props) {
  return <h2>movies i added: {props.movies}</h2>
}

function Nayok(props) {
  return (
    <div>
      <h1>Ami Nayok {props.name}</h1>
      <p>my age {props.age || 30}</p>
    </div>
  )
  
}

export default App;

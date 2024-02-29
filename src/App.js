import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [useCounter, setUseCounter] = useState(0);
  const [fadeIn, setFadeIn] = useState("")

  useEffect(() => {
    setUseCounter(count + 2);
    fadeIn === "" && setFadeIn("fadeIn");
  }, [count]);
  return (
    <div className="App">
      <div className='container'>
       <Card 
        cardHeader={'UseEffect Counter'}  
        cardBody={
          <>
            <img src='https://img.freepik.com/free-photo/fogark-clouds-mountains_1204-503.jpg?t=st=1709094523~exp=1709098123~hmac=04837a13e208776a0fa66dce2428cf41b385747f92db6452d46e570404bfd972&w=1380' alt='Nature' className='imgResponsive' />
            <p className={`${fadeIn}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul className='counterUl'>
              <li>UseEffect count value is {useCounter}</li>
              <li>Count value is : {count}</li>
            </ul>
          </>
        } 
        cardFooter={
          <>
            <Button label={'Increment'} onClick={() => {setCount(count + 1); setFadeIn("");}}></Button> 
            <Button label={'Decriment'} on onClick={() => {setCount(count -1); setFadeIn("");}}></Button>
          </>
        }
      />
      </div>
    </div>
  );
}

export default App;

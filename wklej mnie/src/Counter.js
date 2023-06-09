import { useEffect, useState } from 'react';
import ButtonsPanel from './components/ButtonsPanel';
import Display from './components/Display';
import './Counter.css'
import Clock from './components/Clock';
import Step from './components/Step';
// import Button from './components/Button';



const Counter = (props) => {

  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);
  const [stepValue, setStepValue] = useState(1)
  // const [pokazStep, setPokazStep] = useState
  const stepChange = (wartosc) => {

    console.log(wartosc.target.value);
    setStepValue(+wartosc.target.value)

  };
  // const pokazStep = (dodaj) => {
  //   setPokazSte(stepValue)
  // }


  const updateCounter = (action) => {
    if (action === 'add') {
      setCounter(counter + stepValue);
    } else if (action === 'Reset') {
      setCounter(props.counterInitValue)

    } else {
      setCounter(0)
    }

  };
  useEffect(() => {
    // console.log('wylowanie use effect');
  }, [counter]);// tablica zaleznosci wtedy kiedy komponet sie zmienia w okreslonych przez nas okolicznosciach

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} stepValue={stepValue} />
      {showClock ? <Clock setShowClock={setShowClock} /> : <p className='clockControl' onClick={() => setShowClock(true)}>pokaż zegar</p>}
      <Step stepChange={stepChange} />
      {/* <Button setPokazStep={setPokazStep}/> */}


    </div>
  );
}

export default Counter;
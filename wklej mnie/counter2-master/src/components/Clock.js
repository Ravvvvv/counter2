import { useEffect, useState } from 'react';
import './ClockControl.css'


const Clock = (props) => {

     const [time, setTime]= useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        // console.log('komponet motujem');

        const interval = setInterval(()=>{
            // console.log('wykonuje interwal');
            setTime(new Date().toLocaleTimeString())

        }, 1000);
        return ()=>{
            // console.log('odmontowuje i czyszczę');
            clearInterval(interval);
        };
        
    },[]);
         useEffect(()=>{
            // console.log('komponet sie aktualizuje');
         })



    //useEffect(()=>{} , [] wykona sie raz po zamantowaniu elementu)
    return <p> 
        {time}{" "}
        <span className="clockControl" onClick={()=>props.setShowClock(false)} >x
        </span></p>



}

export default Clock;
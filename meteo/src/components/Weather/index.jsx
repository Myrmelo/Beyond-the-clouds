import React from 'react';
import './style.css'

function Weather({country, city, region, localTime, temperature, condition}) {

    const tabCondition = [];
    for (const value in condition){
        tabCondition.push(condition[value]);
    }
    

    let date = `${localTime}`;
    date = date.split(' ');
    const hours = date[1];
    date = date[0];
    date = date.split('-').reverse().join("-");

    //const time = date.split("-").reverse().join("-");
   
    let idCondition;

    console.log(condition)
    return (
        <div className= "Weather_container">
            <p id="time" >{hours}</p>
            <p id="date" >{date}</p>
            <p>{tabCondition[0]}</p>
            <img src={tabCondition[1]} alt="icon"/>
            <p>{`${temperature} °C`}</p>
            <div id={idCondition}>
           
            </div>
            <p id="city" >{city}</p>
            <p id="region" >{region}</p>
            <p id="country" >{country}</p>
        </div>
      
    )
  }
  
  export default Weather
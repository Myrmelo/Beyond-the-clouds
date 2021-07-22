import React from 'react'
import './style.css'

function WeatherCard({data, name}) {
    console.log(data);

    var ladate= new Date()
    var tab_jour= ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    console.log(ladate);
    console.log(ladate.getDay());
    console.log(tab_jour[ladate.getDay()]);
    console.log(name);

    let dayIndex = ladate.getDay() + 1 + name;

    console.log(dayIndex);

    if (dayIndex > 6){
        dayIndex = dayIndex - 6;
    }
    
    return (
        <React.Fragment>
            <div className= "card">
                <p>{tab_jour[dayIndex]}</p>
                <img src={data.day.condition.icon} alt={data.day.condition.text} />
                <p>{`${data.day.avgtemp_c}C°`} <span className="max-temp" >{`${data.day.maxtemp_c}C°`}</span> </p>
            </div>
          
        </ React.Fragment>
    )
  }
  
  export default WeatherCard
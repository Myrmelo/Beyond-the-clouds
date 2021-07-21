import React, {useEffect, useState} from 'react';
import './style.css';
import Search from '../../components/Search'
import Geolocalisation from '../../components/Geolocalisation'
import Weather from '../../components/Weather'
import axios from 'axios';


const Home = () => {

  function getLocalisation() {
    
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      const crd = pos.coords;
      
      const url = `https://api.weatherapi.com/v1/current.json?key=56e420e8280d4f05a3593154212107&q=${crd.latitude},${crd.longitude}&aqi=no`;

      axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        return response
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return error
      });
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    
    
    return 
  }

  const position = getLocalisation();

    
  
    
   
    return (
        <React.Fragment>
            <div className= "Actual_weather_container">
                <Search />
                <Geolocalisation />
                <Weather />
            </div>

            <div className= "Future_weather_container">

            </div>
        </React.Fragment>
)}
       
 

  



export default Home;
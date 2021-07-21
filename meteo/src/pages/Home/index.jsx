import React, {useEffect, useState} from 'react';
import './style.css';
import Search from '../../components/Search'
import Geolocalisation from '../../components/Geolocalisation'
import Weather from '../../components/Weather'
import axios from 'axios';


const Home = () => {

  const [cityweather, setCityweather] = useState({});
  
  const getDataFromApi = async (lat, long) => {
    console.log(lat, long);
    
    const url = `https://api.weatherapi.com/v1/current.json?key=56e420e8280d4f05a3593154212107&q=${lat},${long}&aqi=no`;
    axios.get(url)
      .then(function (response) {
        // handle success
        setCityweather(response.data);
        console.log(response);
        console.log(cityweather);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return error
      });
    }

    function geolocation () {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
      
        return getDataFromApi(lat, long);
      });
    }
    
    useEffect(() => {
      getDataFromApi(setCityweather);
    }, [setCityweather]);
    
  return (

    <React.Fragment>
    console.log(cityweather)
      <div className= "Actual_weather_container">
          <Search />
          <Geolocalisation />
          <Weather />
      </div>
      <div className= "Future_weather_container">
      </div>
  </React.Fragment> 
  )  

}

  



export default Home;
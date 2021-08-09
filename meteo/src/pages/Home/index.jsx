import React, {useEffect, useState} from 'react';
import './style.css';
import Search from '../../components/Search'
import Geolocalisation from '../../components/Geolocalisation'
import Weather from '../../components/Weather'
import WeatherCard from '../../components/WeatherCard'
import axios from 'axios';


const Home = () => {
  
  const [homePage, setHomePage] = useState("noSearch");
  const [cityWeather, setCityWeather] = useState({});
  const [cityLocation, setCityLocation] = useState({});
  const [weatherForecast, setweatherForecast] = useState([]);
  const [cities, setCities] = useState([]);

  const windowUrl = window.location.pathname.slice(1, );

  
  const getDataFromApi = (lat, long) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=56e420e8280d4f05a3593154212107&q=${lat},${long}&days=3&lang=fr&aqi=no`;
    axios.get(url)
      .then(function (response) {
        // handle success
        setCityWeather(response.data.current);
        console.log(response);
        setCityLocation(response.data.location);
        setweatherForecast(response.data.forecast.forecastday);
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

    const getSearchApi = (city) => {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=56e420e8280d4f05a3593154212107&q=${city}&days=3&lang=fr&aqi=no`;
      axios.get(url)
        .then(function (response) {
          // handle success
          setCityWeather(response.data.current);
          console.log(response);
          setCityLocation(response.data.location);
          setweatherForecast(response.data.forecast.forecastday);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          return error
        });
    }
    
    useEffect(() => {
      if (windowUrl){
        getSearchApi(windowUrl);
      } else {
        geolocation();
      }
    }, []);

   const forecast = weatherForecast.slice(1);

   const tabCity = [
     "Paris", "Marseille", "Lille", "Nancy", "Brest", "Lyon", "Toulouse", "Nice", 
     "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Reims", "Rennes", 
     "Toulon", "Saint-Étienne", "Poitiers", "Le Havre", "Grenoble", "Dijon", "Angers", "Villeurbanne", "Saint-Denis", 
     "Nîmes", "Clermont-Ferrand", "Le Mans", "Aix-en-Provence", "Brest", "Tours", "Amiens", 
     "Limoges", "Annecy", "Perpignan", "Besançon", "Metz", "Orléans", "Rouen"
   ]

  function getSearch(value){
    const result = tabCity.filter((city) => {
      if (city.slice(0, value.length) === value){
        return city;
      }
    });
    setCities(result);
  }

  return (

    ((homePage === "noSearch") ? 
    
    <React.Fragment>
      <div className= "Actual_weather_container">
        <div className= "Header">
          <Search> 
            <button id="btn-search" onClick={() => setHomePage("search")} >Rechercher une ville</button>
          </Search>
          <Geolocalisation>
            <button id="btn-geolocalisation" onClick={geolocation} ></button>
          </Geolocalisation>
        </div>
          <Weather country={cityLocation.country} city={cityLocation.name} region={cityLocation.region} localTime={cityLocation.localtime} 
            condition={cityWeather.condition} temperature={cityWeather.temp_c}
          />
      </div>
      <div className= "Future_weather_container">
        {forecast.map((card, index) => <WeatherCard key={card.date + index} data={card} name={index} />)}
        <h1>Aujourd'hui</h1>
        <div className= "Wind">
        <p>Force du vent</p>
        <p>{`${cityWeather.gust_kph}  Km/H`}</p>
        </div>
        <div className= "Humidity">
        <p>hygrométrie</p>
        <p>{`${cityWeather.humidity} %`}</p>
        <progress id="file" max="100" value={cityWeather.humidity}> </progress>
        </div>

      </div>
  </React.Fragment> 
  
  :
  
  <div className= "Search_container">
    <input type="search" name="search" id="search-bar" onChange={(event) => getSearch(event.target.value)} />
    <button id="search-button">Search</button>

    <ul id="list-cities" >
      {cities.map((city, index) => <a href={`/${city}`}><li className="li-city" key={city + index} >{city}</li></a>)}
    </ul>
  </div>
  
  )
  )  

}

  



export default Home;
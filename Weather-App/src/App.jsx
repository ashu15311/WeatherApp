import clearBG from "./assets/clear.jpg"
import coldBG from "./assets/cold.jpg"
import './App.css'
import Search from "./assets/Components/Search/Search"
import Temp from "./assets/Components/Temperature/Temp";
import Description from "./assets/Components/Description/Description";
// import { weatherData } from "./assets/Weather";
// import Weather from "./assets/Weather";
import { useEffect, useState } from "react";
import Footer from "./assets/Components/Footer/Footer";

function App() {

  const [city, setCity] = useState("Bhubaneswar");
  const [weatherData, setWeatherData] = useState(null);

  const URL = `http://api.weatherapi.com/v1/current.json?key=2c32d0cf60d9455e9e224638241605&q=${city}&aqi=no`;
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [city]);

  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${coldBG})` }}>
        <div>{weatherData && (<Search setCity={setCity}
          stats={{
            time: weatherData.location.localtime,
            location: weatherData.location.name,
            region: weatherData.location.region
          }}
        ></Search>)}</div>
        <div>{weatherData && (<Temp
          stats={{
            temp: weatherData.current.temp_c,
            condition: weatherData.current.condition.text,
            location: weatherData.location.name,
            icon: weatherData.current.condition.icon
          }}
        />)}</div>
        <div>{weatherData && (<Description stats={{
          feel: weatherData.current.feelslike_c,
          wind: weatherData.current.wind_kph,
          pressure: weatherData.current.pressure_mb,
          humidity: weatherData.current.humidity,
          visibility: weatherData.current.vis_km,
          gust: weatherData.current.gust_kph
        }}></Description>)}
        </div>
        <div>
          <Footer/>
        </div>
        
      </div>
    </>
  )
}

export default App;

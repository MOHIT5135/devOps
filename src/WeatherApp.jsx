import SearchBox from "./SeachBox";

import InfoBox from "./InfoBox";
import "./Weatherapp.css";
import { useState } from "react";

export default function WeatherApp(){  
    const [WeatherInfo, setWeatherInfo] = useState({
        city : "Wonder Land",
        humidity : 0,
        temp : 0,
        temp_min : 0,
        temp_max : 0,
        weather : "overcast clouds",
        feels_like : 0,
    });
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    };        
    return(
        <div className="app-layout">
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {WeatherInfo}/>
        </div>
    );
} 

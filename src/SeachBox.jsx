import Button from '@mui/material/Button';
import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cb2cef2f382f3a9142d7c82f93b086d1";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JSONResponse = await response.json();
            console.log(JSONResponse);
            let result = {
                city: city,
                weather: JSONResponse.weather[0].description,
                temp: JSONResponse.main.temp,
                temp_min: JSONResponse.main.temp_min,
                temp_max: JSONResponse.main.temp_max,
                humidity: JSONResponse.main.humidity,
                feels_like : JSONResponse.main.feels_like,
            }
            return result;
        }catch(e){
            throw(e);
        }
    }

   

    let handleChange =(event) =>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(e){
            setError(true);
        }
    }
    return(
        <div className="search-box">
            <h3>Search the weather </h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="City Name" 
                    variant="outlined" 
                    value={city} 
                    onChange={handleChange}/>
                <br /><br />
                <Button size = "small" variant="contained" type="submit">Search</Button>
                {error ? <p style={{color: "crimson"}}>No such place exists</p> : null}
            </form>
        </div>
    );
}
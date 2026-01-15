import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    const cloudy_URL = "https://images.unsplash.com/photo-1528157509193-8254fac59543?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlcyUyMGNsb3VkeSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const hot_URL = "https://images.unsplash.com/photo-1691592844823-fda85b741a91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlcyUyMGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const cold_URL = "https://images.unsplash.com/photo-1609849835963-722f62f314e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlcyUyMGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const rainy_URL = "https://images.unsplash.com/photo-1606163760650-8d6042c8743a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D";

    return(
        <div className="info-box">
            <h2>Weather Info - {info.weather}</h2>
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            (info.temp >30 && info.humidity<50) 
                            ? hot_URL
                            : (info.humidity>60 && info.temp < 40)
                            ? cloudy_URL 
                            : (info.humidity>70 && info.temp < 23)
                            ? rainy_URL
                            : cold_URL
                        }
                        title= {info.weather}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            (info.temp >30 && info.humidity<50) 
                            ? <SunnyIcon/>
                            : (info.humidity>60 && info.temp < 40)
                            ? <WbCloudyIcon/> 
                            : (info.humidity>70 && info.temp < 23)
                            ? <ThunderstormIcon/>
                            : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>The weather can be described as {info.weather} and feels like {info.feels_like}&deg;C.</p>
                            <p>Humidity = {info.humidity};</p>
                            <p>Temperature = {info.temp}&deg;C;</p>
                            <p>Minimum Temperature = {info.temp_min}&deg;C</p>
                            <p>Maximum Temperature = {info.temp_max}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
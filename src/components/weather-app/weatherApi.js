"use client"
import LocationAndCurrentWeather from "./currentWeather";
import { useState, useEffect } from "react";

export default function Api() {
    const apiKey = "371a743ceb6e25bf13659a362ab6c511";
    const [locationAndWeather, setLocationAndWeather] = useState({});

    useEffect(() => {
        //checks if useEffect is running or so it can't run multiple timess
        let isMounted = true;

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

                try {
                    const response = await fetch(endpoint);
                    const data = await response.json();

                    if (isMounted) {
                        setLocationAndWeather({
                            city: data.city.name,
                            celsius: Math.round(data.list[0].main.temp - 273.15), // converts kelvin to celsius
                            clouds: data.list[0].weather[0].description,
                            height: data.city.coord.lat,
                            longitude: data.city.coord.lon
                        });
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
            (error) => {
                console.error(`der skete en fejl: ${error.message}`);
            }
        );

        return () => {
            isMounted = false;
        };
    }, []);

    console.log(locationAndWeather);

    return (
        <LocationAndCurrentWeather
            city={locationAndWeather.city}
            degrees={locationAndWeather.celsius}
        />
    );
}

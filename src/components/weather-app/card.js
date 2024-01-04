"use client"

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';


// Function to convert UTC time to local time
function convertUTCToLocal(utcTime, timezoneShiftInSeconds) {
  const utcDate = new Date(utcTime * 1000); // Convert seconds to milliseconds
  const localDate = new Date(utcDate.getTime() + timezoneShiftInSeconds * 1000);

  // Format the local date as needed
  const options = { timeZone: 'Europe/Copenhagen', /* other options if needed */ };
  const localTime = localDate.toLocaleString('en-US', options);

  return localTime;
}

function isDay(localTime) {
  const HOURS = localTime.getHours();

  return HOURS >= 6 && HOURS < 18;
}

const OVERCAST = [
  '/tornado.svg',
  '/nightWind.svg',
  '/sunnyDrops.svg',
  '/rainyCloud.svg',
  '/sunnyPouring.svg',
]

export default function Card({ lat, lon }) {
  const [card, setCard] = useState({})

  useEffect(() => {
    async function getData() {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      const data = await res.json()

      setCard(data)
    }

    getData()
  }, [lat, lon])

  const weatherCondtionVisual = useCallback(() => {
    const condition = card.weather ? card.weather[0].description.toLowerCase() : null;

    // return condition

    switch (condition) {
      case "overcast clouds":
      case "broken clouds":
        return isDay(new Date(convertUTCToLocal(new Date().getTime(), card.timezone))) ? '/tornado.svg' : '/nightWind.svg'
      case "rainy":
      case "light rain":
      case "clear sky":
        return isDay(new Date(convertUTCToLocal(new Date().getTime(), card.timezone))) ? '/sunnyDrops.svg' : '/rainyCloud.svg'
      case "pouring":
      case "moderate rain":
      case "light intensity drizzle rain":
      case "light intensity drizzle":
      case "heavy intensity rain":
      case "scattered clouds":
      case "mist":
      case "few clouds":
      case "fog":
        return '/sunnyPouring.svg'
      default:
        return condition

    }
  }, [card])



  return (
    <article style={{ backgroundImage: "url(/weather.svg)" }} className='bg-no-repeat bg-contain flex m-5 h-52'>
      <div className='grow pl-4 flex flex-col justify-center'>
        <span className='block text-6xl text-white font-bold'>{Math.round(card?.main?.temp - 273.15)}&deg;C</span>
        <span className='text-white/50'>H:{Math.round(card?.main?.temp_max - 273.15)}&deg; L:{Math.round(card?.main?.temp_min - 273.15)}&deg;</span>
        <h2 className='text-2xl text-white'>{card.name}</h2>

      </div>
      <img src={weatherCondtionVisual()} alt={weatherCondtionVisual()} />
    </article>
  )

}
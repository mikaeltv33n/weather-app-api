"use client"

export default function LocationAndCurrentWeather(props){
    return (
        <article>
            <h2>{props.city}</h2>
            <div>{props.degrees}</div>
            
            <div></div>
        </article>
    )
}
"use client"

function titleCase(str) {
    if (!str) return null
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

export default function LocationAndCurrentWeather(props) {
    return (
        <div>
            <article className="flex flex-col items-center">
                <h2 className="text-white font-normal text-4xl">{props.city}</h2>
                <div className="my-3 text-white font-extralight text-7xl">{props.degrees}&deg;</div>
                <span className='text-white/50 font-semibold text-xl'>{titleCase(props.clouds)}</span>
                <span className='text-white font-semibold text-2xl'>H:{props.temp_high }&deg; L:{props.temp_low}&deg;</span>
            </article>
        </div>

    )
}
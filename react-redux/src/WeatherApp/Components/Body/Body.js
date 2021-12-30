import React from 'react'
import { useSelector } from 'react-redux'

function dateConvertor(timeStamp){
    let date = new Date(timeStamp * 1000); 
    let hours = date.getHours();
    let minutes = date.getMinutes()
    date = `${hours}:${minutes}`;
    return date;
}
function fToC(fTemp) 
{
  let cTemp = (fTemp - 32);
  cTemp = cTemp  * 5 / 9;
  return Math.round(cTemp * 10) / 10
}
    

const Body = () => {
    const {cityName, countryName, temp, sunRise, sunSet, visibility, feelsLike, windDegree, windSpeed} = useSelector(state => state.nav);
    return (
        <div>
            <h2>{ `${cityName}, ${countryName}`}</h2>
            <div>
                <ul>
                    <h3>Weather : </h3>
                    <li> {`Temperature : ${fToC(temp)}`} </li>
                    <li> {`Temperature : ${temp}`} </li>
                    <li> {`Feels Like : ${fToC(feelsLike)}`} </li>
                    <h3>Sun : </h3>
                    <li> {`SunRise : ${dateConvertor(sunRise)}`} </li>
                    <li> {`SunSet : ${dateConvertor(sunSet)}`} </li>
                    <h3>Wind : </h3>
                    <li> {`Wind Speed : ${windSpeed}`} </li>
                    <li> {`Wind Degree : ${windDegree}`} </li>
                    <h3>Visibility : </h3>
                    <li> {`Visibility: ${visibility}`} </li>
                </ul>
            </div>
        </div>
    )
}

export default Body

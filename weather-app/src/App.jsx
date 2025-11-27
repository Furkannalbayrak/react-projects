import { use, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_KEY;

function App() {

  const [cityName, setCityName] = useState("");
  const [data, setData] = useState();

  const getDataFromAPI = async () => {

    if (cityName) {

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=tr`);
        setData(response.data);
      } catch (error) {
        alert("Girdiginiz şehir bulunamadı !");
      }

    }
    else {
      alert("Bir Şehir giriniz");
    }
  }

  return (
    <div>
      <div className='container'>

        <div className='firstContainer'>
          <h1>Hava Durumu</h1>
          <input className='getCity' type="text" placeholder='Aramak istediginiz şehri giriniz' value={cityName} onChange={(e) => setCityName(e.target.value)} />
          <button className='search' onClick={getDataFromAPI} >Ara</button>
        </div>

        {
          data ? (
            <div className='secondContainer'>
              <h2 className='isim' >{data.name}</h2>
              <p className='child'>Sıcaklık: {data.main.temp} °C </p>
              <p className='child'>Hissedilen Sıcaklık: {data.main.feels_like} °C</p>
              <p className='child'>Hava Durumu: {data.weather[0].description}</p>
              <p className='child'>Nem Oranı: {data.main.humidity}%</p>
              <p className='child'>Ruzgar Hızı: {data.wind.speed} km/s</p>
            </div>

          )
            : null
        }

      </div>
    </div>
  )
}

export default App

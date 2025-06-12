import removeVietnameseTones from "./removeVietNameseTones.js";
const API_KEY = "c5be23f6ec524517bfd111812251206";

async function getWeather(input) {

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}`;

	const res = await fetch(url)
	const data = await res.json()

    document.querySelector(".weather__city").textContent = `${data.location.name}, ${data.location.country}`;
    document.querySelector(".weather__datetime").textContent = data.location.localtime;
    document.querySelector(".weather__temp").textContent = data.current.temp_c + "\u00B0C";
    document.querySelector(".weather__condition").textContent = data.current.condition.text;
    document.querySelector(".weather__vis").textContent = data.current.vis_km + "km";
    document.querySelector(".weather__wind").textContent = data.current.wind_kph + "km/h";
    document.querySelector(".weather__humidity").textContent = data.current.humidity + "%";

    if(data.current.temp_c >= 25){
        document.querySelector(".weather").style.backgroundImage = "url('images/hot.png')";
    }else{
        document.querySelector(".weather").style.backgroundImage = "url('images/cold.png')";
    }
    
	return data;
}

const input = document.querySelector(".weather__input");


input.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
		console.log(getWeather(removeVietnameseTones(e.target.value)));
        
    }
});


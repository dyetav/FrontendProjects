const go = document.body.querySelector(".selectCity");
let inputCity = document.getElementById("inputCity");
let cityResult = document.querySelector(".city");
let temperature = document.querySelector(".temperature");
const image = document.querySelector(".weatherImage"); 
const API_KEY = "39da6da7d0d248ea8c8221245241206";

async function getWeatherByCity(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`);
    const data = await response.json();
    return data;
}

function getIcon(condition) {
    let icon = "";
    console.log(condition);
    switch (condition) {
        case 'Partly cloudy':
            icon = "mist.png";
            break;
        case 'Clear':
            icon = "clear.png";
            break;
        case 'Overcast':
            icon = "clouds.png";
            break;
        case 'Mist':
            icon = "mist.png";
            break;

    }
    return icon;
}

const update = (json) => {
    temperature.innerHTML = `${json.current.temp_c} °C`; 
    cityResult.innerHTML = `${json.location.name}`;
    const imgString = `<img src="./images/${getIcon(json.current.condition.text)}" alt="">`;
    image.innerHTML = imgString;
    inputCity.value = "";
};

go.addEventListener('click', (e) => {
    e.preventDefault();
    
    const response = getWeatherByCity(inputCity.value);
    response
        .then((json) => {
            update(json);
        })
        .catch((err) => {
            inputCity.value = "";
            temperature.innerHTML = "- °C"; 
            cityResult.innerHTML = "Not Valid";
        });
});

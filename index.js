let btn = document.getElementById('search');
let inputcity = document.getElementById('inputcity');
let weather = document.getElementById('weathervalue');
let desc = document.getElementById('description');
let temp = document.getElementById('tempvalue');
let city = document.getElementById('city');
let country = document.getElementById('country');
let date = document.getElementById('date');
let time = document.getElementById('time');
let maxtemp = document.getElementById('maxtempvalue');
let mintemp = document.getElementById('mintempvalue');
let wind = document.getElementById('windvalue');
function DT (){
    date.textContent = new Date().toDateString();
    time.textContent = new Date().toLocaleTimeString();
}
DT();
setInterval(DT,1000);
async function get(cityname){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a6a6c07845f1c39bf9cb6f893da0f2ad`,{
        method:"GET"
    });
    inputcity.value="";
    console.log(response);
    if(!response.ok){
        console.log("Enter Valid City Name");
        alert("Enter Valid City");
        return;
    }
    const data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log("wheather",data.main);
    console.log("wheather",data.main.temp);
    console.log("wheather",data.weather[0]);
    console.log("wheather",data.weather[0].main);
    weather.textContent = data.weather[0].main;
    desc.textContent = data.weather[0].description;
    let val = parseFloat(data.main.temp)-273.15;
    temp.textContent = val.toFixed(2) + "°C";
    city.textContent = data.name;
    country.textContent = data.sys.country;
    val = parseFloat(data.main.temp_max)-273.15;
    maxtemp.textContent = val.toFixed(2) + "°C";
    val = parseFloat(data.main.temp_min)-273.15;
    mintemp.textContent = val.toFixed(2) + "°C";
    val = parseFloat(data.wind.speed);
    wind.textContent = val.toFixed(2) +" m/s" ;

};
const data = new Date().toTimeString();
console.log(data);
btn.addEventListener('click',()=>{
    if(inputcity.value){
        get(inputcity.value);
    }
    else{
        alert("Enter Something");
    }
});
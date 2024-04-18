const button = document.getElementById("btn");
const Input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(cityname){
  const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=0039e541050a409199b11707241503&q=${cityname}&aqi=yes`)
    return await promise.json()
}


button.addEventListener("click", async function(){
      const value = Input.value 
      const regult = await getData(value);
     cityName.innerText = ` ${regult.location.name}, ${regult.location.region} -  ${regult.location.country}   `
     cityTime.innerText = regult.location.localtime ;
     cityTemp.innerText = regult.current.temp_c;

})
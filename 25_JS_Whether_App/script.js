


let city = document.getElementById('city')
let country = document.getElementById('country')
let temp = document.querySelector('.temperature')
let desc = document.querySelector('.description')

let cityInput = document.querySelector('#cityInput')


cityInput.addEventListener('keydown', function(event){
    if(event.code == 'Enter'){
        fetchWeather(cityInput.value)
    }
    return
})



async function fetchWeather(city){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69236af033ccac05ed3df78a8ba2b809&units=metric`)
    let result = await response.json()


    createDom(result)
}



function createDom(wheather){
    city.innerHTML = wheather.name
    country.innerHTML = wheather.sys.country
    temp.innerHTML  = wheather.main.temp
    desc.innerHTML = wheather.weather[0].main
}


// fetchWeather()
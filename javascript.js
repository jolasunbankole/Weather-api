const API_KEY = `19598a0a32df84a4bd8a8c74bf619cac`

// Allows me to find these names elements in my .css and frontpage.html
const form = document.querySelector("form")
const search = document.querySelector("#searching")
const weather = document.querySelector("#weather")


//This var is to hold cities, it will show error if the city is spelt wrong.(search.value)
const theWeather = async(city) => {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    console.log(response)
}

form.addEventListener(
    "submit",
    function(event){
        event.preventDefault();
        //stops reload after form is sumbitted
        theWeather(search.value)
        
    }
);

//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//const IMG_URL = `https://api.openweathermap.org/img/wn${data.weather[0].icon}@2x.png`


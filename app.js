window.addEventListener('load',()=>{weather();});
window.addEventListener('click',()=>{weather();});

function weather(){
    let temperature = document.querySelector('.temperature');
    let description1 = document.querySelector('.description');
    let humidity1 = document.querySelector('.humidity');
    let icon1 = document.querySelector('.icon');
    let location = document.querySelector('.location');
   
    if(navigator.geolocation){
        
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${location.textContent}&appid=614ef50d127708605f89071f40f2dcba&units=metric`;
        
        fetch(api)
            .then(response=>{return response.json();})
            .then(data=>{
                console.log(data);
                const{temp,humidity}=data.main;
                const{description,icon}=data.weather[0];
                //set temperature, description and humidity
                temperature.textContent=temp;
                description1.textContent=description;
                humidity1.textContent=humidity+"%";
                //set icon converting weather.icon in string for skycon
                const skycons = new Skycons({"color": "white"});
                let weatherIcon = "CLEAR_DAY";
                if(icon=="01n"){weatherIcon = "CLEAR_NIGHT";}
                else if(icon=="02n") {weatherIcon = "PARTLY_CLOUDY_";}
                else if(icon=="03n"||icon=="03d") {weatherIcon = "CLOUDY";}
                else if(icon=="04n"||icon=="04d") {weatherIcon = "RAIN";}
                else if(icon=="01d") {weatherIcon = "CLEAR_DAY";}
                else if(icon=="02d") {weatherIcon = "PARTLY_CLOUDY_DAY";}
                skycons.play();
                skycons.set(icon1, Skycons[weatherIcon]);

            });
    }

}
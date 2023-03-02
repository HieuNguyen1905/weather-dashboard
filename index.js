const cityName = document.querySelector("#cityName");

document.querySelector(".searchbox").addEventListener("submit", e =>{
    e.preventDefault();
    const city = document.querySelector(".textBox").value
    const key ='1fbfb3626446734763cf7a050afa178f'
    const timeNow = Date().split(' ')
    const newTime = `${timeNow[1]} ${timeNow[2]} ${timeNow[3]}`
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`
    ).then((resCur)=> {
        if (resCur.ok) {
            return resCur.json();
        } else {
            return Promise.reject(resCur);
        }
    })
    .then((dataCur)=>{
        const img = dataCur.weather[0].icon
        const logo = document.querySelector('#logo');
        logo.setAttribute( 'src',`http://openweathermap.org/img/wn/${img}@2x.png`)

        const temp = dataCur.main.temp
        const tempNow = document.querySelector('#tempNow');
        tempNow.textContent = `Temp: ${temp} ºF`

        const wind = dataCur.wind.speed
        const windNow = document.querySelector('#windNow');
        windNow.textContent = `Wind: ${wind} MPH`

        const humid = dataCur.main.humidity
        const humidNow = document.querySelector('#humidNow');
        humidNow.textContent = `Humidity: ${humid} %`

        cityName.textContent = `${city} (${newTime})`;

    })

    

    fetch(`//api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`
    ).then((res)=> {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    })
    .then((data)=>{
        //DAY1
        const img1 = data.list[1].weather[0].icon
        const logo1 = document.querySelector('#logo1');
        logo1.setAttribute('src', `http://openweathermap.org/img/wn/${img1}@2x.png`)

        const dt1 = data.list[1].dt_txt.split(' ');
        const newdt1 = dt1[0].split('-');
        const finaldt1 = `${newdt1[1]}/${newdt1[2]}/${newdt1[0]}`
        const Day1 = document.querySelector('#date1');
        Day1.textContent = finaldt1

        const temp1 = data.list[1].main.temp
        const tempNow1 = document.querySelector('#tempNow1');
        tempNow1.textContent = `Temp: ${temp1} ºF`

        const wind1 = data.list[1].wind.speed
        const windNow1 = document.querySelector('#windNow1');
        windNow1.textContent = `Wind: ${wind1} MPH`

        const humid1 = data.list[1].main.humidity
        const humidNow1 = document.querySelector('#humidNow1');
        humidNow1.textContent = `Humidity: ${humid1} %`

        //DAY2
        const img2 = data.list[9].weather[0].icon
        const logo2 = document.querySelector('#logo2');
        logo2.setAttribute( 'src' , `http://openweathermap.org/img/wn/${img2}@2x.png`)

        const dt2 = data.list[9].dt_txt.split(' ');
        const newdt2 = dt2[0].split('-');
        const finaldt2 = `${newdt2[1]}/${newdt2[2]}/${newdt2[0]}`
        const Day2 = document.querySelector('#date2');
        Day2.textContent = finaldt2

        const temp2 = data.list[9].main.temp
        const tempNow2 = document.querySelector('#tempNow2');
        tempNow2.textContent = `Temp: ${temp2} ºF`

        const wind2 = data.list[9].wind.speed
        const windNow2 = document.querySelector('#windNow2');
        windNow2.textContent = `Wind: ${wind2} MPH`

        const humid2 = data.list[9].main.humidity
        const humidNow2 = document.querySelector('#humidNow2');
        humidNow2.textContent = `Humidity: ${humid2} %`

        //DAY3
        const img3 = data.list[17].weather[0].icon
        const logo3 = document.querySelector('#logo3');
        logo3.setAttribute( 'src' , `http://openweathermap.org/img/wn/${img3}@2x.png`)

        const dt3 = data.list[17].dt_txt.split(' ');
        const newdt3 = dt3[0].split('-');
        const finaldt3 = `${newdt3[1]}/${newdt3[2]}/${newdt3[0]}`
        const Day3 = document.querySelector('#date3');
        Day3.textContent = finaldt3

        const temp3 = data.list[17].main.temp
        const tempNow3 = document.querySelector('#tempNow3');
        tempNow3.textContent = `Temp: ${temp3} ºF`

        const wind3 = data.list[17].wind.speed
        const windNow3 = document.querySelector('#windNow3');
        windNow3.textContent = `Wind: ${wind3} MPH`

        const humid3 = data.list[17].main.humidity
        const humidNow3 = document.querySelector('#humidNow3');
        humidNow3.textContent = `Humidity: ${humid3} %`

        //DAY4
        const img4 = data.list[25].weather[0].icon
        const logo4 = document.querySelector('#logo4');
        logo4.setAttribute ('src' , `http://openweathermap.org/img/wn/${img4}@2x.png`)

        const dt4 = data.list[25].dt_txt.split(' ');
        const newdt4 = dt4[0].split('-');
        const finaldt4 = `${newdt4[1]}/${newdt4[2]}/${newdt4[0]}`
        const Day4 = document.querySelector('#date4');
        Day4.textContent = finaldt4

        const temp4 = data.list[25].main.temp
        const tempNow4 = document.querySelector('#tempNow4');
        tempNow4.textContent = `Temp: ${temp4} ºF`

        const wind4 = data.list[25].wind.speed
        const windNow4 = document.querySelector('#windNow4');
        windNow4.textContent = `Wind: ${wind4} MPH`

        const humid4 = data.list[25].main.humidity
        const humidNow4 = document.querySelector('#humidNow4');
        humidNow4.textContent = `Humidity: ${humid4} %`

        //DAY5
        const img5 = data.list[33].weather[0].icon
        const logo5 = document.querySelector('#logo5');
        logo5.setAttribute ('src' , `http://openweathermap.org/img/wn/${img5}@2x.png`)

        const dt5 = data.list[33].dt_txt.split(' ');
        const newdt5 = dt5[0].split('-');
        const finaldt5 = `${newdt5[1]}/${newdt5[2]}/${newdt5[0]}`
        const Day5 = document.querySelector('#date5');
        Day5.textContent = finaldt5

        const temp5 = data.list[33].main.temp
        const tempNow5 = document.querySelector('#tempNow5');
        tempNow5.textContent = `Temp: ${temp5} ºF`

        const wind5 = data.list[33].wind.speed
        const windNow5 = document.querySelector('#windNow5');
        windNow5.textContent = `Wind: ${wind5} MPH`

        const humid5 = data.list[33].main.humidity
        const humidNow5 = document.querySelector('#humidNow5');
        humidNow5.textContent = `Humidity: ${humid5} %`

    })
    
})

//Local Storage
let cities;
if(localStorage.getItem('cities')=== null){
    cities = []
}else{
    cities = JSON.parse(localStorage.getItem('cities'))
}
for(let i =0; i<= cities.length; i++){
    if(cities[i] == city){
        return 
    }else{
        cities.push(city);
   }
}

localStorage.setItem('cities',JSON.stringify(cities))
cities.forEach(element => {
    const newCityBtn = document.createElement('button');
    newCityBtn.classList.add('btn')
    newCityBtn.textContent = element;
});

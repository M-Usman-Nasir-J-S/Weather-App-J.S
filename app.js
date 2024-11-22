console.log("Hello Wheather");

const div = document.querySelector(`#container`);

const button = document.querySelector("#view-btn");

const input = document.querySelector("#input");


button.addEventListener("click", () => {
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=c3357be025444616aca135903241911&q=${input.value}&aqi=no`)
    
    .then(res => res.json() )
    
    .then(res => {

        console.log(res);

        div.innerHTML = ""

        div.innerHTML += `
        
        <div>
        
        <img src="https:${res.current.condition.icon}">
        <h1 class="pad-left">${res.current.temp_c}°C</h1>

        <h2><li> Country : ${res.location.country} </li></h2>
        <h3><li> Name : ${res.location.name} </li></h3>
        <h4><li> Humidity : ${res.current.humidity} % </li></h4>
        <h5><li> Last Updated : ${res.current.last_updated}°C </li></h5>
        
        </div>
        `
        
    })
    .catch(err => {
        console.log(err);
        div.innerHTML = `<h1>Correct your Spalling</h1>`
        div.innerHTML = `
        <div id="error-line">
        <p><li>Error fetching data.<br /> <span class="mar-left">Please try again !</span> <br /> <span class="mar-left">But Check OR Focus on your spalling...</span></li></p>
        </div>
        `;        
    })

    input.value = ""
})



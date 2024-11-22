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
        
        <div class="main_div">
        <img src="https:${res.current.condition.icon}">
        <h1>${res.current.temp_c}°C</h1>
        
        <h2> Country : ${res.location.country} </h2>
        <h3> Name : ${res.location.name} </h3>
        <h4>Humidity : ${res.current.humidity} %</h4>
        <h5>Last Updated : ${res.current.last_updated}°C</h5>
        </div>
        `
        
    })
    .catch(err => {
        console.log(err);
        div.innerHTML = `<h1>Correct your Spalling</h1>`
        div.innerHTML = `
        <div id="error-line">
        <p><li>Error fetching data. Please try again ! But Check OR Focus on your spalling...</li></p>
        </div>
        `;        
    })

    input.value = ""
})



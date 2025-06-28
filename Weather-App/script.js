const Url = 'const apiKey = "YOUR_API_KEY"; // keep this secret'
const apiKey = '44848ed2e7d84988824163111252706'
const city = "Mumbai";
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=GR82BDC63VWLR76FXXQV7LULD&contentType=json`;
const button = document.querySelector('button')
const userInput = document.querySelector('input')
const output = document.querySelector('#output')

const getWeatherData = async ()=>{
    console.log('getting data.......');
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    output.innerText = `${data.address}`
    output.innerText = `${data.currentConditions.datetime}`

    
    
}
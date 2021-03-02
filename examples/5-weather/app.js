// it takes few minutes

const form = document.querySelector('.form')
const input = document.querySelector('.form-input')
const alert = document.querySelector('.alert')
const result = document.querySelector('.result')
alert.style.display = 'none'

form.addEventListener('submit', e => {
    e.preventDefault()
    const city = input.value
    if(city) {
        getWeatherData(city)
    }
})

async function getWeatherData(city) {
    alert.style.display = 'none'
    try {
     const {data} = await axios.post('/api/5-weather',{city}) 
        const {name} = data
        const {country,sunrise} = data.sys
        const {temp_max:max,temp_min:min,feels_like} = data.main
        const {description} = data.weather[0]
        result.innerHTML = `
            <article class="card">
            <h3>${name},${country},${new Date(sunrise).toLocaleTimeString()}</h3>
            <p>${description}</p>
            <p>min temp: ${min}&#8457</p>
            <p>max temp: ${max}&#8457</p>
            <p>feels like: ${feels_like}&#8457</p>`
    } catch (error) {
        alert.style.display='block'
        alert.textContent = `Something wrong with the city: ${city}`
    }
}

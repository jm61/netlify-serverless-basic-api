const result = document.querySelector('.result')

const fetchData = async () => {
    try {      
       const {data} = await axios.get('/api/9-nasa')
       const nasa = data.map((cosmos) => {
        const {title,explanation,hdurl,date} = cosmos
        return `<div class="container">
        <h2>${title}</h2>
        <img src="${hdurl}" alt="${title}" style="width:70%;"/>
        <div class="info">
        <h5>${date}</h5>
        <h5 class="price">${explanation}</h5>
        </div></div>`
    }).join('')
    result.innerHTML = nasa
    } catch (error) {
        console.log(error)        
    }
}
fetchData()
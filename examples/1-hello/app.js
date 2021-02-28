const result = document.querySelector('.result')

const fetchData = async () => {
    try {      
       //const {data, status} = await axios.get('/.netlify/functions/1-hello')
       const {data, status} = await axios.get('/api/1-hello')
       result.innerHTML = `<fieldset style="background:darkolivegreen;color:wheat;"><legend style="color:orange;background:grey;"><em><h3>my netlify function</h3></em></legend>Data: ${data} <br>Status: ${status}</fieldset>`
    } catch (error) {
        console.log(error.response)
        result.textContent = error.response.data
    }
}

fetchData()
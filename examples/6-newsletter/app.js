const form = document.querySelector('.form')
const emailInput = document.querySelector('.email-input')
const alert = document.querySelector('.alert')
alert.style.display = 'none'

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    form.classList.add('loading')
    alert.style.display = 'none'
    const email = emailInput.value

    try {
       await axios.post('/api/6-newsletter', {email})
        form.innerHTML = `<h4 class="success">Success, please check your email</h4>`

    } catch (error) {
        const str = error.response.data[0]
        const n = str.search(`(id`)
        console.log(error.response.data[0])
        alert.style.display = 'block'
        //alert.textContent = 'Something went wrong, please try again'
        if(n > 0) {
            const extr = str.substr(0,n)
            alert.textContent = extr  
        } else {
            alert.textContent = JSON.stringify(error.response.data[0])
        }  
    }
    form.classList.remove('loading')
})

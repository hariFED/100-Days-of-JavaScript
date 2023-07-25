let counter = document.getElementById('counter')
let generate = document.getElementById('reset')
let randomGen = () => {

    let random = Math.floor(Math.random() * 100)
    counter.innerHTML = random;
}
generate.addEventListener('click', randomGen)




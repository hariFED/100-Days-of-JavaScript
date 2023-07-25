let hexCode = document.getElementById('hexCode')
let generate = document.getElementById('generater')
let heading = document.querySelector('h1')
let randomHexGen = () => {

    let random = Math.random().toString(16).substring(2, 8)
    hexCode.innerHTML = "#" + random;
    heading.style.color = hexCode.innerHTML;

}
generate.addEventListener('click', randomHexGen)




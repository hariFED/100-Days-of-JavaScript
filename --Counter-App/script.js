let counter = document.getElementById('counter')
let addition = document.getElementById('add')
let subraction = document.getElementById('sub')
let reset = document.getElementById('reset')

let count = 0;

//Changing the color of the value if it is postive or negative
const ColorFun = () => {

    if (count > 0) {
        counter.style.color = "#3beb8d";
    }
    else if (count < 0) {
        counter.style.color = 'red';
    }
    else if (count === 0) {
        counter.style.color = 'black'
    }

}

addition.addEventListener('click', () => {
    count += 1;
    counter.innerHTML = count;
    ColorFun()

})

reset.addEventListener('click', () => {
    count = 0
    counter.innerHTML = count;
    ColorFun()
})

subraction.addEventListener('click', () => {
    count -= 1
    counter.innerHTML = count

    ColorFun()
})




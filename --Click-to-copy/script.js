//Palindrome Checker

const copyBtn = document.querySelector('button')
const input = document.querySelector('input')

copyBtn.addEventListener('click', copyText)



function copyText() {
    navigator.clipboard.writeText(input.value)
    copyBtn.innerHTML = "Copied..!"
    setTimeout(() => {
        copyBtn.innerHTML = "Copy"
    }, 1500)
}







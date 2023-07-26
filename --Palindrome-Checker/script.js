//Palindrome Checker

const checkBtn = document.querySelector('button')
const result = document.getElementById('results')
const input = document.querySelector('input')
checkBtn.addEventListener('click', checkPalindrome)
input.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {
        event.preventDefault()
        checkPalindrome()
    }
})
function checkPalindrome() {
    const word = input.value.toUpperCase()
    if (word.length === 0) {
        result.innerHTML = "Nothing is Entered in input"
    }
    else {
        const palWord = word.split("")
        let revWord = palWord.reverse().join('')
        if (word === revWord) {

            result.innerHTML = "This <span style='color:green;'>" + word + "</span> is a PalinDrome"
        }

        else {
            result.innerHTML = "This <span style='color:red;'>" + word + "</span> is a Not a PalinDrome"
        }
    }

}



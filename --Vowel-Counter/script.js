//Palindrome Checker

const checkBtn = document.querySelector('button')
const result = document.getElementById('results')
const input = document.querySelector('input')

checkBtn.addEventListener('click', countVowel)
input.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {
        event.preventDefault()
        countVowel()

    }
})


function countVowel() {

    const word = input.value.toLocaleLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const output = input.value.toUpperCase()
    let vowelcount = {}


    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelcount[word[i]] ? vowelcount[word[i]]++ : vowelcount[word[i]] = 1;
        }
    }

    Object.keys(vowelcount).length === 0 ? result.innerHTML = `This <span style="color:red;"> ${output} </span> has no VOWELS.` : result.innerHTML = `This <span style="color:green;"> ${output} </span> has ${JSON.stringify(vowelcount)} these number of VOWELS`;

    input.value = "";
    vowelcount = {}
}







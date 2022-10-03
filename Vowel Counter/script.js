let vowels = ['a', 'e', 'i', 'o', 'u']
let button = document.getElementById('btn')
let result = document.getElementById('result')
let counter = 0


button.addEventListener('click', countVowels);

function countVowels(){
    let word = document.getElementById('input').value
    for(w of word){

        for(v of vowels){
            if(w.toLowerCase() == v){
                counter++
            }
        }
    }
    result.innerText = `"${word}" has ${counter} vowels`
}


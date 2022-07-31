let value = document.querySelector('#input_area input')
let search = document.querySelector('#input_area .search_icon')
let cros = document.querySelector('#input_area .cros_icon')
let meaning = document.querySelector('.meaning p');
let example = document.querySelector('.example p');
let voice = document.querySelector('.right .voice');
let source = document.querySelector('#mySound');
let messenge = document.querySelector('.messenge');
let result_area = document.querySelector('.result_area');
let partsOfSpech = document.querySelector('.left_block p');
let thisValue = document.querySelector('.left_block h2');
let synonyms = document.querySelector('.synonyms p');

let fetchData = (input) => {
  let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + input
fetch(url)
    .then(response => {
     return response.json();
    }).then(ress => {
      thisValue.innerHTML = ress[0].word
      partsOfSpech.innerHTML = ress[0].meanings[0].partOfSpeech
     meaning.innerHTML = ress[0].meanings[0].definitions[0].definition
     messenge.style.display = 'none'
     result_area.style.display = 'block'
     console.log(ress)
     if(ress[0].phonetics[0].audio!== ''){
     source.src = ress[0]. phonetics[0].audio
     }else{
       source.src = ress[0]. phonetics[1].audio
     } 
    })
    .catch(error => {
        messenge.innerHTML = 'Not Found This Word'
        messenge.style.display = 'block'
    });
} 
search.addEventListener('click', (e)   => {
  search.style.color = 'rgb(211,205,255)';
  messenge.style.display = 'block'
  messenge.innerHTML = 'Founding...'
  let input = value.value;
  fetchData(input);
  setTimeout(function() {
    search.style.color = '#ccc';
  }, 500);
})
cros.addEventListener('click', (e)   => {
  value.value = ''
  cros.style.color = 'rgb(211,205,255)';
  messenge.style.display = 'none'
  result_area.style.display = 'none'
  setTimeout(function() {
    cros.style.color = '#ccc';
  }, 500);
})
voice.addEventListener('click', () => {
  
  source.play()
})
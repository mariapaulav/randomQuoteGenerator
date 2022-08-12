const quoteText = document.querySelector('.quote'),
quoteAuthor = document.querySelector('.name'),
quoteBtn = document.querySelector('button')
soundBtn = document.querySelector('.sound')
copyBtn = document.querySelector('.copy')

function randomQuote(){
   quoteBtn.innerText = '. . .'
   fetch('http://api.quotable.io/random')
   .then(response => response.json())
   .then(result => {
    quoteText.innerText = result.content;
    quoteAuthor.innerText = result.author;
   quoteBtn.innerText = 'New Quote'
   })
}

soundBtn.addEventListener('click', ()=> {
    let speak = new SpeechSynthesisUtterance(quoteText.innerText)
    //let speak = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`)
    speak.lang = 'en-US'
    speechSynthesis.speak(speak)
})

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
});


quoteBtn.addEventListener('click', randomQuote);


const toogle = document.getElementById('toogle')

toogle.onclick = function(){
    document.body.classList.toggle('dark-theme')
}
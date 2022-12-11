quoteElement = document.querySelector('.quote');
fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then((data) => {
    quoteElement.textContent = data.quote
  })



function updateQuote() {
  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
} 
document.querySelector('.header__btn').addEventListener('click', updateQuote)

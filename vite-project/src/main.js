/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
setupCounter(document.querySelector('#counter'))
 */

async function getData(){
    try {
        const response = await fetch(`/api/fruit/all${main}`);
        if(response.status != 200){
            throw new Error(response)
        }
        else {
            const data = await response.json();
            console.log(data);
            document.getElementById("api-response").textContent = data.name;
            }
    } catch (error) {
     console.log(error);
    }
}
getData(); 







// function inject(Data) {
// const container = document.querySelector(".container"); 
// const html = `<div class ="card" data-title= "${item.name}" >
//   <h2 class="card__heading">${item.name}</h2>
//   <h3 class="card__heading">${item.brand}</h3>
//   <img src="${item.image}"><h4> $${item.price}</h4>
//   <h5 class="card__heading">${item.barcode}</h5>
//   <h6 class="card__heading">${item.ingredients}</h6>
// </div>`
// container.insertAdjacentHTML('afterbegin', html);
// }
// items.forEach((item) => inject(item))


/*  companies = {};
 shopItems.forEach((item) => {
  let brand = item.brand;
  if(!companies[brand]) {
    companies[brand] = 1;
  } else {
    companies[brand] = companies[brand] + 1;
  }
 })

 */



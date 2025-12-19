import './style.css'
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

const URL = ""
async function getData(){
    try {
        //go get data
        const response = await fetch (`link ${poke}`);
        // handle errors
        if(response.status != 200){

            throw new Error(response)}
        else {
            //makes the response into json data we can use
            const data = await response.json();
            console.log(data);
            document.getElementById("api-response").textContent = data.name;
            }
    } catch (error) {
     console.log (error);
    }
}
getData(insert_);
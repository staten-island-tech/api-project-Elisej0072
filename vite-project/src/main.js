import './style.css';

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
       const response = await fetch ("https://www.fruityvice.com/api/fruit/3");
       if(response.status != 200){
           throw new Error(response)}
           //gets data from api, checks for errors
       else {
           const data = await response.json();
           //converts API data into Javascript array
           console.log(data);

           const fruits = data
           
           //DISPLAY ALL FRUITS
             data.forEach(fruit => {
           const fruitDiv = document.createElement("div");
           fruitDiv.className = "border border-gray-300 rounded p-4 shadow hover:shadow-lg transition";
           fruitDiv.innerHTML = `
               <h3 class="text-xl font-bold mb-2">${fruit.name}</h3>
               <p><strong>Family:</strong> ${fruit.family}</p>
               <p><strong>Genus:</strong> ${fruit.genus}</p>
               <p><strong>Order:</strong> ${fruit.order}</p>
               <p><strong>Calories:</strong> ${fruit.nutritions.calories}</p>
               <p><strong>Sugar:</strong> ${fruit.nutritions.sugar}</p>
               <p><strong>Carbs:</strong> ${fruit.nutritions.carbohydrates}</p>
               <p><strong>Protein:</strong> ${fruit.nutritions.protein}</p>
               <p><strong>Fat:</strong> ${fruit.nutritions.fat}</p>
               <hr>
           `;


           // gathers the available data in the array for each fruit
           container.appendChild(fruitDiv);
           // displays data onto website            

      
       //DISPLAY FRUIT-> FAMILIES
       let families = {};
       fruits.forEach(fruit => {
           let family = fruit.family;
           //accesses the family variable for each fruit listed in the array
           if (!families[family]) {
               // detects if specific family has been seen yet or not
               families[family] = 1;
               // creates a new key for the object family and sets it to 1
           } else {
               families[family] = families[family] + 1;
               // if specific family has already been seen, add 1
           }
       });
        const familyContainer = document.getElementById("family-count");
       familyContainer.innerHTML = "";
           //stores family count in container
       for (let family in families) {
           //loop for all the types of families in the array
           const p = document.createElement("p");
           p.className = "bg-white p-2 rounded shadow";
           // creates a paragraph??
           p.textContent = `${family}: ${families[family]} fruits`;
           // places text / data in the paragraph?
           familyContainer.appendChild(p);
           // displays the paragraph on the website
       }
       });
      
       //create a button for every fruit family <filter>
   const families = {};
   fruits.forEach(fruit => families[fruit.family] = true);

   for (let family in families) {
       const btn = document.createElement("button");
       btn.textContent = family;
       btn.className = "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition";
       btn.addEventListener("click", () => showFruitsByFamily(family));
       filterContainer.appendChild(btn);
   } 
  
   function showFruitsByFamily(family) {
   const container = document.getElementById("api-response");
   container.innerHTML = "";
   // stores API and refreshes data displayed on page
   fruits.forEach(fruit => {
   // loops through every fruit in the array
       if (fruit.family === family) {
           // checks if fruit family is the same as the specific family on the button
           const fruitDiv = document.createElement("div");
           //creates div that holds the fruit's data
          fruitDiv.className = "border border-gray-300 rounded p-4 shadow hover:shadow-lg transition bg-white";
          fruitDiv.innerHTML = `<h3 class="text-xl font-bold mb-2 text-green-700">${fruit.name}</h3><p>Family: ${fruit.family}</p>`;
           // puts the fruit's name and family info into the div
           container.appendChild(fruitDiv);
           // displays the div on the site
       }
   });
}
   
      
   //DISPLAY FRUIT -> IDs
     let fruitIds = {};
       fruits.forEach(fruit => {
           let id = fruit.id;
           //goes through each fruitID in the array
           if (!fruitIds[id]) fruitIds[id] = 1;
           //if the fruitID has not been seen before, set count to 1
           else fruitIds[id] += 1;
           //if the fruitID has been seen before, add 1 to the count
       });


       const idContainer = document.getElementById("id-count");
       idContainer.innerHTML = "";
       //store the fruitID count in container
       for (let id in fruitIds) {
           //loop all the IDs in fruitIDs
           const p = document.createElement("p");
           //create a paragraph
           p.textContent = `Fruit ID ${id}: ${fruitIds[id]} occurrence(s)`;
           //place fruitID count data in the paragraph
           idContainer.appendChild(p);
           //display the fruitID count on the website
       }
  const container = document.getElementById("api-response");
               // stores the API in the container
               container.innerHTML = "";
               // empties the data inside container <kinda like refreshing a tab?>
           }


           //create a search bar for IDs <filter>
           function setupIdSearch() {
   const searchBtn = document.getElementById("search-btn");
               // search button
   const idInput = document.getElementById("id-search");
               // search input (where user types in # ID)
   const idResult = document.getElementById("id-result");
               // container div where results are displayed

   searchBtn.addEventListener("click", () => {
       // click on the search button will trigger following events
       const idValue = parseInt(idInput.value);
       // reads the value inputted -> converts it from a string to a number
       idResult.innerHTML = "";
       // clears any previous search results


       if (isNaN(idValue)) {
           idResult.textContent = "Please enter a valid number.";
           return;
       }
       // checks if the input is a number, if not the message will be shown
       // and the rest of the function will stop running


       const filteredFruit = fruits.filter(fruit => fruit.id === idValue);
       // filters the fruits in the array with the matching ID


       if (filteredFruit.length === 0) {
           idResult.textContent = "No fruit found with this ID.";
       // there were no fruits with the inputted ID found in the array
       } else {
           filteredFruit.forEach(fruit => {
               // loops through each fruit in the array
               const div = document.createElement("div");
               // creates a new div for each fruit
                 div.className = "border border-gray-300 rounded p-4 shadow bg-white";
                   div.innerHTML = `
                   <h3 class="text-xl font-bold mb-2 text-green-700">${fruit.name}</h3>
                   <p><strong>Family:</strong> ${fruit.family}</p>
                   <p><strong>Genus:</strong> ${fruit.genus}</p>
                   <p><strong>Order:</strong> ${fruit.order}</p>
                   <p><strong>Calories:</strong> ${fruit.nutritions.calories}</p>
                   <p><strong>Sugar:</strong> ${fruit.nutritions.sugar}</p>
               `;
               // fills the div with the fruit info
               idResult.appendChild(div);
               // attaches the fruit div to the result div (visible on page)
           });
       }
   });
}
setupIdSearch();

   } catch (error) {
    console.log (error);
    //if error is detected -> console logged
   }
}
getData();



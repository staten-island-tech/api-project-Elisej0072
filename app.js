import "./style.css";

async function getData(){
    try {
        const response = await fetch ("https://www.dnd5eapi.co/api/2014/:endpoint");
        if(response.status != 200){

            throw new Error(response)}
        else {
            const data = await response.json();
            console.log(data);
            document.getElementById("api-response").textContent = data.name;
            }
    } catch (error) {
     console.log (error);
    }
}
getData();
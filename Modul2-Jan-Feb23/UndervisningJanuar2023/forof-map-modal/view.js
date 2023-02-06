function view(){
let html = "";

html += `<div>hallo dette er en div</div> <button onclick="ModalToggle()">Åpne modal</button>`;

return html;
}
viewVelger();


function viewVelger(){
 let html = "";

 if(model.currentPage == "home") html= view();

if(model.showModal == true) html += modal();

document.getElementById("app").innerHTML = html;

 }


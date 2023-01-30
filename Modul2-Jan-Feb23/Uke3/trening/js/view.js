viewSelector()
function viewSelector() {
    let HTML = "";

    if (model.app.currentPage == 'frontPage') { HTML = mainView() }
    if (model.app.currentPage == 'secondPage') { HTML = secondView() }

    document.getElementById("app").innerHTML = HTML;
}

function mainView() {
    let HTML = /*HTML*/ ``;
    
    HTML = `
    Simen var her
    <button onclick="secondViewSelector()">Neste side</button> 
    <input onchange="model.inputs.name = this.value"/>
    <button onclick="addItemArray()">Legg til</button> 
    ${model.data.persons}
    
    
    `;

    return HTML;
}

function secondView() {
    let HTML = ``;
    
    // for (let index = 0; index < model.data.persons.length; index++) {
    //     HTML += `<li>${model.data.persons[index]}</li>`;
        
    // }
   
    for (const element of model.data.persons) {
       HTML += `<li>${element}</li>`;
    }
    
    
    
    return HTML;
}

function addItemArray(){
    model.data.persons.push(model.inputs.name)  
    viewSelector()

}


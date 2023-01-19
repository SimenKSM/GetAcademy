viewSelector();
function viewSelector() {
    let html = "";

    if (model.currentPage == "mainPage") html = mainview();
    if (model.currentPage == "productPage") html = productView();
    if (model.currentPage == "infoPage") html = infoView();

    document.getElementById("app").innerHTML = html;

}


function mainview() {
    let html = ``;

    html = `${makeMenuBoxes()}`
    return html;
}

function productView() {
    let html = ``;

    html = `Name: ${model.person.name}
        <input onchange="model.input.name = this.value"/>
        <button onclick="changeName()">Endre Navn</button>
    `
    return html;
}
function infoView() {
    let html = `Simen er kjekk`;
    return html;
};





function makeMenuBoxes() {
    let html = `<div id="menuContainer" onclick="toggleClaslistOnMenu()"></div>`;
    let pageIndex = '';
    for (let i = 0; i < model.menuList.length; i++) {
        let id = "app" + (i + 1)
        pageIndex = i
        html += `<div id="${id}" class="box " onclick="selectMenuOption(${pageIndex})"></div>`;
        
        
        
    }
    
    return html;
}



// function toggleClaslistOnMenu(index) {
//     for (let i = 0; i < model.menuList.length; i++) {
//         let id = "app" + (i + 1)
//         document.getElementById(id).classList.toggle("en");
//         if (model.menuListIsOn == false) {
//             document.getElementById(id).innerHTML = model.menuList[i]
//         } else {
//             document.getElementById(id).innerHTML = ""
//         }
//     }
//     if (model.menuListIsOn == false) {
//         model.menuListIsOn = true
//     } else {
//         model.menuListIsOn = false
//     }

// }


function toggleClaslistOnMenu() {
    for (let i = 0; i < model.menuList.length; i++) {
        let id = "app" + (i + 1)
        document.getElementById(id).classList.toggle("en");
        model.menuListIsOn ? 
        document.getElementById(id).innerHTML = "" :
        document.getElementById(id).innerHTML = model.menuList[i];
        
    }
    model.menuListIsOn? 
    model.menuListIsOn = false:
    model.menuListIsOn = true;

    
}


/* 
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy followed by a colon (:), 
and finally the expression to execute if the condition is falsy. 
This operator is frequently used as an alternative to an if...else statement. 
*/
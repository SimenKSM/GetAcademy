viewSelector()
function  viewSelector(){
    let HTML = '';
    if(model.app.activePage = 'home') HTML = mainView();

    document.getElementById("app").innerHTML = HTML;
}

function mainView() {
    let HTML = '';
    for (let index = 0; index < model.data.users.length; index++) {
        HTML += `<li>${model.data.users[index].userName}</li>`;
        
    }
    
    
    
    
    return HTML;

}

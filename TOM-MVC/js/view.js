viewSelector('main')
function viewSelector(toUpdate) {
    let HTML = '';
    if (toUpdate == 'main') {
        if (model.app.currentPage == 'frontPage') { HTML = mainView() }
      

        document.getElementById("app").innerHTML = HTML;
    }
 

}

function mainView() {
    let HTML = '';
    HTML = `
    
    Simen er best 
   
    
    `;
    return HTML;
}

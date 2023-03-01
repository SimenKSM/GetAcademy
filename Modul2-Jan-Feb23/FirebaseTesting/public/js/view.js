
viewSelector()
function viewSelector() {
    let HTML = '';
    if (model.app.currentPage == 'frontPage') { HTML = mainView() }


    document.getElementById("app").innerHTML = HTML;
}




function mainView() {
    let HTML = '';
    HTML = `
    
    <button onclick="googleLogin()"> Login with google</button> <br>
    
    Simen er best 
   
    
    `;
    return HTML;
}
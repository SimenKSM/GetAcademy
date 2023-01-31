viewSelector()
function viewSelector() {
    let HTML = '';
    if (model.app.currentPage == 'frontPage') { HTML = mainView() }
    if (model.app.currentPage == 'secondPage') { HTML = secondView() }

    document.getElementById("app").innerHTML = HTML;
}

function mainView() {
    let HTML = '';

    HTML = `Simen er best
    <button onclick="secondViewSelector()">secondView</button>
    
    `;
    return HTML;
}

function secondView(){
    let HTML = '';

    HTML = `    
    SecondView
    
    `;

    return HTML;
}
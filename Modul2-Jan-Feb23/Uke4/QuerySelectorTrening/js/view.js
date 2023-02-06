viewSelector('main')
function viewSelector(toUpdate) {
    let HTML = '';

    if (model.app.currentPage == 'frontPage') { HTML = mainView() }


    document.getElementById("app").innerHTML = HTML;



}

function mainView() {
    let HTML = '';
    HTML = `
  
   
    ${model.data.count}
    <button onclick="incrementCount()" >test</button>

    <button >test</button>
    
    `;
    return HTML;
}


const button = document.querySelector('button');
button.onclick = function() {
    incrementCount();
    
}


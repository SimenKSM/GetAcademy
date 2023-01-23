viewSelector();
function viewSelector() {
    let HTML = "";

    if (model.app.currentPage == "frontPage") HTML = mainView();
    if (model.app.currentPage == "editorPage") HTML = blogWritePostView();


    document.getElementById('app').innerHTML = HTML;
}

function mainView() {
    let HTML = ``;
    HTML = `Frontside Blog 
    <br>
    <br>
    <button onclick="homePageSelect()">Home</button>
    <button onclick="editorPageSelect()">Skriv oppdatering</button>
    
    <div id="navbar">
    <hr/>
    Social Media Links: 
        <button onclick="showInstagramPage()"><img class="img" src="img/instagram.png"></button>
        <button onclick="showInstagramPage()"><img class="img" src="img/facebook.png"></button>
        <button onclick="showInstagramPage()"><img class="img" src="img/twitter.png"></button>
        <button onclick="showInstagramPage()"><img class="img" src="img/youtube.png"></button>
         <hr/>
    </div>
     `;
    
    return HTML;
}

function blogWritePostView() {
    model.app.currentPage = "editorPage";
    let HTML = ``;
    HTML = `
    EditorSiden Blog
    <br>
    <br>
    <button onclick="homePageSelect()">Home</button>
    <button onclick="editorPageSelect()">Skriv oppdatering</button>
    <div id="navbar">
    <hr/>
    Social Media Links: 
        <button onclick="showInstagramPage()"><img class="img" src="img/instagram.png"></button>
        <button onclick="showInstagramPage()"><img class="img" src="img/facebook.png"></button>
        <button onclick="showInstagramPage()"><img class="img" src="img/twitter.png"></button>
        <button onclick="showInstagramPage()"><img class="img" src="img/youtube.png"></button>
         <hr/>
    </div>
    
    `;
   
     return HTML;

}
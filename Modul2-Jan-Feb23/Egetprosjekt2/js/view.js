viewSelector('main')
function viewSelector(toUpdate) {
    let HTML = '';
    if (toUpdate == 'main') {
        if (model.app.currentPage == 'frontPage') { HTML = mainView() }
        if (model.app.currentPage == 'secondPage') { HTML = secondView() }

        document.getElementById("app").innerHTML = HTML;
    }
    if (toUpdate == 'modal') {
        if (model.app.currentModal == 'viewModal') { HTML = modalView() }
        if (model.app.currentModal == 'editorModal') { HTML = modalEditorView() }
        document.getElementById("myModal").innerHTML = HTML;
    }

}

function mainView() {
    let HTML = '';

    HTML = `Simen er best VVVVVVV
    <button onclick="modalEditorView()">editorModal</button>
    
    `;
    return HTML;
}

function modalEditorView() {
    let HTML = '';

    model.app.modalContent = /*HTML*/`
        <input 
            onchange="model.inputs.blogPage.titlePost = this.value" 
            value="${model.inputs.blogPage.titlePost}" 
            placeholder="Tittel blogpost"> 
        <br>
        <textarea class="textarea"
            onchange="model.inputs.blogPage.currentPost = this.value" 
            placeholder="Skriv blogginnlegget" 
            cols="80" 
            rows="26"
        >${model.inputs.blogPage.currentPost}</textarea> 
        <br>
        <div class="editorPictureContainer">${listblogPostPictures()}</div>
        
        <input type="checkbox" 
            onchange="model.inputs.blogPage.pictureIsChecked = ${editorPictureIsChecked()}" 
            ${checkedValue()}
            > Huk av om du ønsker og legge til et bilde
        
            <button onclick="('<')"><</button>
            <button onclick="('>')">></button>
        <br>
        <button type="submit" onclick="newBlogPost()">Lag post</button>
        </div>
        `;
    openModal()

}
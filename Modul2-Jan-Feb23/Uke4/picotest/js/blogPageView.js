function updateBlogPageView() {
    let HTML = /*HTML*/`
    <h1>Bloggen</h1>
        <hr/>
        ${navBar()}
            <button onclick="switchPage('frontPage')">Forside</button>
            <button onclick="switchPage('bookingPage')">BookingSide</button>
            <button onclick="openNewPostModal()">Ny Post</button>
        <hr/>
        <div class="blogWrapper">
            ${listBlogPosts()} 
        </div>
            ${getModal()}
        </div>
        
        `;
    document.getElementById("app").innerHTML = HTML;
}

function getModal() {
    let HTML = /*HTML*/`
    <div id="myModal" class="modal" style="display:${model.modal}">
    <div class="modal-content">
        <span onclick="closeModal()" class="close">&times;</span>
        <p>
           ${getModalContent()} 
        </p> 
            </div>`;
    return HTML
}
function listBlogPosts() {
    let HTML = ``;
    for (let index = model.data.blogPosts.length - 1; index > -1; index--) {
        HTML += /*HTML*/`
            <h1 onclick="openBlogPostModaX(${index})">${model.data.blogPosts[index].postTitle}</h1>
            ${checkIfPostHasImg(index)}
            <div>${model.data.blogPosts[index].postText}<div>
        
            `;
    }
    return HTML;
}

function editorPictureIsChecked() {
    if (model.inputs.blogPage.pictureIsChecked == false) {
        return true
    } else {
        return false
    }
}

function checkedValue() {
    if (model.inputs.blogPage.pictureIsChecked == false) {
        return ''
    } else {
        return 'checked'
    }
}

function currentSelectedEditorPicture() {

    return model.data.blogPictures[model.app.editorPicture];
}

function getModalContent() {

    return model.app.modalContent
}




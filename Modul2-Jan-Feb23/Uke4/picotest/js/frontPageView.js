function updateFrontPageView() {
    let HTML = /*HTML*/`
        <h1>Forside</h1>
        <hr/>
        <button onclick="switchPage('bookingPage')">BookingSide</button>
        <button onclick="switchPage('blogPage')">Bloggside</button>
        <hr/>
        ${navBar()}
        <div class="frontPagePictureBox"><img class="frontPageImages fill" src="${pictureSelectorShow()}"></div>
        <button onclick="changeFrontPagePicture('<')"><</button>
        <button onclick="changeFrontPagePicture('>')">></button>
        
        ${listLatestBlogPosts()}
        <div>
        ${getBlogPostModal()}
        <button>Test</button>
        </div>
        
        
    `;
    document.getElementById("app").innerHTML = HTML;

}

function pictureSelectorShow() {
    
    return model.data.frontPagePictures[model.app.currentPicture];
}

function listLatestBlogPosts() {
    let index = model.data.blogPosts.length - 1
    let HTML = /*HTML*/ `
    <div>
        <a href="#" onclick="openModal()">
            <h1 >${model.data.blogPosts[index].postTitle}</h1>
        </a>
            ${checkIfPostHasImg(index)}
        <div>${model.data.blogPosts[index].postText}<div>
    </div>
        `;
    return HTML;
}

function getBlogPostModal() {
    let index = model.data.blogPosts.length - 1
    let HTML = /*HTML*/ `
    <div class="modal" style="display:${model.modal}">
        <div class="modal-content">
            <button onclick="closeModal()" class="close">&times;</button>
        <p>
            <h1>${model.data.blogPosts[index].postTitle}</h1>
            ${checkIfPostHasImg(index)}
            <div>${model.data.blogPosts[index].postText}<div>
        </p> 
    </div>
    `;
    return HTML;
}
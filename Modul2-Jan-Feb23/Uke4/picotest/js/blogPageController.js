function openBlogPostModaX(index) {
    model.app.modalContent = /*HTML*/`
        <h1>${model.data.blogPosts[index].postTitle}</h1>
        ${checkIfPostHasImg(index)}
        <div>${model.data.blogPosts[index].postText}<div>
    `;
    openModal()
}

function openNewPostModal() {
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

function newBlogPost() {
    if (model.inputs.blogPage.titlePost == '' || model.inputs.blogPage.currentPost == '') {
        alert('Du kan ikke gå videre før du har lagt til tittel og tekst i innlegget ditt')
        return
    }
    let id = model.data.blogPosts.length
    let title = model.inputs.blogPage.titlePost
    let text = model.inputs.blogPage.currentPost
    let pictureChecked = model.inputs.blogPage.pictureIsChecked
    let postPicture = model.data.blogPictures;
    if (pictureChecked == false) {
        model.data.blogPosts.push(new Post(id, title, text,))
    }
    else {
       // postPicture - skal bli model.data.blogPictures[] index av valgt bilde i modal
        model.data.blogPosts.push(new Post(id, title, text, postPicture))
    }
    model.inputs.blogPage.titlePost = '';
    model.inputs.blogPage.currentPost = '';
    closeModal()
}

// function changeEditorPagePicture(selector) {
//     let blogPagePictures = model.data.blogPictures;

//     if (selector === '>') {
//         model.app.editorPicture++;
//         if (model.app.editorPicture >= blogPagePictures.length) {
//             model.app.editorPicture = 0;
//         }
//     }
//     else if (selector === '<') {
//         model.app.editorPicture--;
//         if (model.app.editorPicture < 0) {
//             model.app.editorPicture = blogPagePictures.length - 1;
//         }
//     }
//     updateView()
// }

function Post(postId, postTitle, postText, postPicture) {
    this.postId = postId;
    this.postTitle = postTitle;
    this.postText = postText;
    this.postPicture = postPicture
}

function switchPage(location) {
    model.app.currentPage = location;
    updateView()
}
function openModal() {
    model.modal = 'block'
    updateView()
}
function closeModal() {
    model.modal = 'none';
    updateView()
}
function sendToWebPage(webPage) {
    if (webPage == 'instagram') {
        window.open('https://www.instagram.com')
    }
    if (webPage == 'facebook') {
        window.open('https://nb-no.facebook.com/')
    }
    if (webPage == 'twitter') {
        window.open('https://www.twitter.com')
    }
    if (webPage == 'youtube') {
        window.open('https://www.youtube.no')
    }
}

function checkIfPostHasImg(index){
    let temp;
    if(model.data.blogPosts[index].postPicture == undefined ){
        return ''
    }else {
       temp =
    `
    <div class="frontPagePictureBox">
    <img class="frontPageImages fill" src="${model.data.blogPosts[index ].postPicture}">
    <div></div>`;
    return temp
    }
}

function navBar() {
    let HTML = /*HTML*/`
        <div class="navbar">
            <button onclick="sendToWebPage('instagram')"><img class="img" src="img/instagram.png"></button> 
            <button onclick="sendToWebPage('facebook')"><img class="img" src="img/facebook.png"></button> 
            <button onclick="sendToWebPage('twitter')"><img class="img" src="img/twitter.png"></button> 
            <button onclick="sendToWebPage('youtube')"><img class="img" src="img/youtube.png"></button> 
        </div>
    `;
    return HTML
}

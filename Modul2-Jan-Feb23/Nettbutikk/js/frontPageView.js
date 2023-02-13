function frontPageView() {
    let HTML = '';
    HTML = /*HTML*/`
    
    <div class="frontpage-flex-center-wrapper">
    
        <div class="maintext">
            <h3 class="header-content-center">dummy text (trenger?)</h3>
            <img class="frontpage-image" src="https://images.finncdn.no/dynamic/1280w/2022/6/vertical-0/24/4/186/187/554_1748646342.jpg">
        </div>
    </div>
    <div class="frontpage-flex-center-wrapper">
        <div>  
         ${model.data.frontpageText}
        </div>
    </div>
    `;
    return HTML;
}
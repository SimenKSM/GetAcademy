function frontPageView() {
    let HTML = '';
    HTML = /*HTML*/`
    
    <div class="frontpage-flex-center-wrapper">
    
        <div class="maintext">
            <h3 class="header-content-center">dummy text (trenger?)</h3>
            <img class="frontpage-image" src="https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1000_2000_s_f/0000/haar/2022/10/22/5/1000946396.JPG?chk=64ABC1">
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
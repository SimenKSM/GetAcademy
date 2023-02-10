viewSelector('main')
function viewSelector(toUpdate) {
    let HTML = '';
    if (toUpdate == 'main') {
        if (model.app.currentPage == 'frontPage') { HTML = frontPageView() }
        if (model.app.currentPage == 'productPage') { HTML = mainView() }
        if (model.app.currentPage == 'productModal') { HTML = mainView() }
        if (model.app.currentPage == 'shoppingCart') { HTML = mainView() }

        document.getElementById("app").innerHTML = HTML;
    }
 

}



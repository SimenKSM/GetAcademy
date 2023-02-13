viewSelector()
function viewSelector() {
    let HTML = '';
        if (model.app.currentPage == 'frontPage') { HTML = frontPageView() }
        if (model.app.currentPage == 'productPage') { HTML = productPageView() }
        if (model.app.currentPage == 'productModal') { HTML = productPageModalView() }
        if (model.app.currentPage == 'shoppingCart') { HTML = mainView() }

        document.getElementById("app").innerHTML = HTML;
    }
 
    function viewChanger(toChange){
        model.app.currentPage = toChange
        viewSelector()
    }





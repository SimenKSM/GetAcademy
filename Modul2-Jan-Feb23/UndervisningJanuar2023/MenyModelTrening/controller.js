

function changeName(){
    model.person.name = model.input.name;
    viewSelector();
};

function selectMenuOption(pageIndex){
    if (pageIndex == 0){
        infoPageSelect()
        console.log(pageIndex)
    }
    if (pageIndex == 2) {
        productPageSelect()
    }
    

}
function productPageSelect(){
    model.currentPage = "productPage";
    viewSelector();
}

function infoPageSelect(){
    model.currentPage =  "infoPage"
    viewSelector();
}
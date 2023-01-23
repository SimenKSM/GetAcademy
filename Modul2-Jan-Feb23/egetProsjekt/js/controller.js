function editorPageSelect(){
    model.app.currentPage = "editorPage";
    viewSelector();
}
function homePageSelect(){
    model.app.currentPage = "frontPage";
    viewSelector();
}
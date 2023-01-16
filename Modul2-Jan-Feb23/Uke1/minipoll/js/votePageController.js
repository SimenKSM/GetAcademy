function goToOptionsPage(){
    model.app.currentPage = 'options';
    updateView();
}
function vote(index){
    let option = model.options[index];
    if(!option.voteCount){
        option.voteCount = 0;
    }
    option.voteCount++;
    updateView();
}
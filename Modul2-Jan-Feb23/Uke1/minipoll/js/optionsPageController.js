function goToVotePage(){
    model.app.currentPage = 'vote';
    updateView();
}
function addOption(){
    model.options.push({
        text: model.inputs.optionsPage.newOption,
        color: 'darkgray',
    });
    updateView()
}
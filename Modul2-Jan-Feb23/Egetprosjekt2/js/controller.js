function modalEditorView() {
    model.app.currentPage = 'editorModal';
    viewSelector('modal');
}
function openModal() {
    model.modal = 'block'
    updateView()
}
function closeModal(){
model.showModal = false;
viewVelger();
}
        // +

function openModal(){
    model.showModal = true;
    viewVelger();
}   
    //     |
       //  |
      //   V

function ModalToggle(){
    model.showModal = !model.showModal;
    viewVelger();
} 
function modal(){
    let html = "";
    
    html += `<div id="modal">
                <div class="modalBox">Dette er modalen
                
                    <button onclick="ModalToggle()">X</button>
                </div>
                <div class="closeModalbox" onclick="ModalToggle()"></div>
             </div>`;
   
    return html;
    //  document.getElementById("modal").style.zIndex = 200;

}



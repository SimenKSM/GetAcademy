function updateViewOptionsPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="goToVotePage()">Til Stemmesiden Siden</button>
    <hr/>
    
    Nåværende Alternativer
    <ul>
      ${createOptionsHtml()}
    </ul>
    Nytt alternativ: <br>
    <input 
        type ="txt" 
        oninput="model.inputs.optionsPage.newOption=this.value"
        value="${model.inputs.optionsPage.newOption}"
        />
    <button onclick="addOption()">Legg til</button>

    
    `;
}

function createOptionsHtml() {
    let html = '';
    for (let i = 0; i < model.options.length; i++) {
        let option = model.options[i];
        html += `<li>
                     ${option.text}
                </li>
        `;
    }
    return html;
}

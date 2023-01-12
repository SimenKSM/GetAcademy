function updateViewVotePage() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <button onclick="goToOptionsPage()">Til Alternativer Siden</button>
    <hr/>
    Dette er stemmesiden
    <ul>
    ${createVoteHtml()}
    </ul>
    `;
}
function createVoteHtml() {
    let html = '';
    for (let i = 0; i < model.options.length; i++) {
        let option = model.options[i];
        html += `<li>
                    <button 
                            onclick="vote(${i})"
                            style="background color: ${option.color}"
                            > 
                            ${option.text}
                    </button>
                    ${option.voteCount ? ` - ${option.voteCount}` : ''}
                </li>
        `;
    }
    return html;
}
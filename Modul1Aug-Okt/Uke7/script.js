function noLayout() {
    document.getElementById('cards').classList.value = '';
}

function horizontalLayout() {
    noLayout();
    document.getElementById('cards').classList.add('horizontal');
}

function verticalLayout() {
    noLayout();
    document.getElementById('cards').classList.add('vertical');
}

function gridLayout() {
    noLayout();
    document.getElementById('cards').classList.add('grid');
}

function showTools() {
    blankAll();
    document.getElementById('cardTools').innerHTML = /*html*/`
        <div class="innerCard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                    <br />Vi skal bruke noen <i>extensions</i>:
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                </li>
                <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
            </ul>        
        </div>
    `;
}

function showHtml() {
    blankAll();
    document.getElementById('cardHtml').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker HTML til å definere et dokument.
            <ul>
                <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                <li>Tagger for grunnleggende formatering av tekst</li>
                <li><tt>&lt;div&gt;</tt></li>
                <li><tt>&lt;input type="text"&gt;</tt></li>
                <li><tt>&lt;button&gt;</tt></li>
                <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                </li>
            </ul>
        </div>
    `;
}

function showCss() {
    blankAll();
    document.getElementById('cardCss').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li><tt>background-color</tt></li>
                <li><tt>color</tt></li>
                <li><tt>padding</tt></li>
                <li><tt>margin</tt></li>
                <li><tt>border</tt></li>
                <li><tt>text-align</tt></li>
                <li><tt>font-size</tt></li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                </li>
            </ul>
        </div>
    `;
}

function showJavaScript() {
    blankAll();
    document.getElementById('cardJavaScript').innerHTML = /*html*/`
        <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
            ved
            å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a></li>
            
            </ul>
        </div>
        `;
}

function showBodyGame() {
    blankAll();
    document.getElementById('cardGame').innerHTML = /*html*/`    
        <div id='head' class="bodyPart"></div>
        <div id="body" class="bodyPart"></div>
        <div id="legs" class="bodyPart"></div>
       
    `;
    selecthead1();
    selectbody1();
    selectlegs1();
}

function blankAll() {
    document.getElementById('cardTools').innerHTML = '';
    document.getElementById('cardCss').innerHTML = '';
    document.getElementById('cardHtml').innerHTML = '';
    document.getElementById('cardJavaScript').innerHTML = '';
    document.getElementById('cardGame').innerHTML = '';
}

function selectPart(bodyParts,previousNumber, currentNumber, nextNumber){
    document.getElementById(`${bodyParts}`).innerHTML = /*HTML*/`
    <button onclick="select${bodyParts}${previousNumber}()">◀</button>
    <img src="img/${bodyParts}${currentNumber}.png" />
    <button onclick="select${bodyParts}${nextNumber}()">▶</button>
`;
}

function selecthead1() {
    selectPart('head',4,1,2)
}
function selecthead2() {
    selectPart('head',1,2,3)
 }
 
 function selecthead3() {
  selectPart('head',2,3,4)
 }
 
 function selecthead4() {
    selectPart('head',3,4,1)
 }

function selectbody1() {
   selectPart('body',4,1,2)
}

function selectbody2() {
    selectPart('body',1,2,3)
}

function selectbody3() {
   selectPart('body',2,3,4)
}

function selectbody4() {
    selectPart('body',3,4,1)
}


function selectlegs1() {
   selectPart('legs',4,1,2)
}

function selectlegs2() {
   selectPart('legs',1,2,3)
}

function selectlegs3() {
   selectPart('legs',2,3,4)
}

function selectlegs4() {
    selectPart('legs',3,4,1)
}




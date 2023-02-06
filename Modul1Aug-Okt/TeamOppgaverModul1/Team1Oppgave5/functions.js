function isClickValue(barNo){   // Passer på at "Valgt stolpe" teksten er ingenting når den ikke har en valgt stolpe.
    if(stroke[barNo] == 'black'){
        chosenOne = barNo + 1;
    }
    else chosenOne = null;
    
    
}

function inputNumber(){  // Endrer størrelsen på stolpen, så lenge verdien som blir skrevet er mellom 1-10
    if(inputValue <= 10 && inputValue > 0){
        numbers[chosenOne- 1]  = inputValue;
    }
    else feilmelding = `Du må velge et tall mellom 1-10 du valgte ${inputValue}`;

    show();
}

function toggleButton() {  // Enabler eller Disabler knapper avhengig om du har valgt en stolpe
    for (let index = 0; index < stroke.length; index++) {
        if (stroke[index] == 'black') {
            return buttonStatus = '';
        }
        else if (stroke[index] == '') {
            buttonStatus = 'disabled';
        }
    }
}
function addStolpe(){ //Legger til stolpe på enden av diagrammet, så lenge verdien som blir skrevet er mellom 1-10
    if(inputValue <= 10 && inputValue > 0){
        numbers.push(parseInt(inputValue));
        stroke.push(''); //Da blirre mere røddi!
    }
    else feilmelding = `Du må velge et tall mellom 1-10 du valgte ${inputValue||''}`;
    inputValue = null;
}

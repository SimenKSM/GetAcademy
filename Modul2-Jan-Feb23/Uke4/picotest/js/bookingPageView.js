function updateBookingPageView() {
    let HTML = /*html*/`
    <h1>Booking Side</h1>
        <button onclick="switchPage('frontPage')">Forside</button>
        <button onclick="switchPage('blogPage')">Bloggside</button>
        ${getBookingPage()}`;
    document.getElementById("app").innerHTML = HTML;
}

function getBookingPage() {
    let html = '';


    html += /*html*/`<div><b> Velg flåte: </b></div>`;
    html += /*html*/`<div> <select id="fleetSelector" onchange="selectFleet(this.value)">
        <option value=""><i>- Flåte -</i></option>
    `;

    for (let fleet of model.data.fleets) {
        html += /*html*/`<option ${isSelected(fleet.id)} value="${fleet.id}">${fleet.id} : ${fleet.name}</option>`;
    }


    html += /*html*/`</select></div>`;
    html += /*html*/`<div> Flåte valgt er: ${(model.inputs.bookingPage.fleetChoice || model.inputs.bookingPage.fleetChoice === 0) ? model.inputs.bookingPage.fleetChoice : ''} </div>`;
    html += /*html*/`<button onclick="goToPrevMonth()">Forrige måned</button>`;
    html += /*html*/`<button onclick="goToNextMonth()">Neste måned</button>`;
    html += /*html*/`<br /><h3>${model.inputs.bookingPage.selectedDate.getFullYear()}<h3>`;
    html += /*html*/`<br /><h3>${getSelectedMonthName()}<h3>`;
    html += `${showCalendar()}`;
    return html;
}

//kan denne ligge i viewet??
function isSelected(fleetId) {
    if (fleetId == model.inputs.bookingPage.fleetChoice) return 'selected="selected"';
    else return '';
}


function showCalendar() {
    let selectedDate = model.inputs.bookingPage.selectedDate.getDate();
    let html = getMonthAsTable();
    //html += /*html*/`<br /> dato valgt: ${(selectedDate || selectedDate === 0)? selectedDate : ''} <br />`;
    html += /*html*/`<br /> dato valgt: ${(model.inputs.bookingPage.fleetChoice || model.inputs.bookingPage.fleetChoice === 0) ? selectedDate : ''} <br />`;
    html += getTimePicker();
    return html;


}


function getMonthAsTable() {
    if (model.inputs.bookingPage.fleetChoice === null) return '';
    let day = new Date();
    let currentMonth = model.inputs.bookingPage.selectedDate.getMonth();
    let currentYear = model.inputs.bookingPage.selectedDate.getFullYear();
    let html = `<table>`;
    let rows = 7;
    let columns = 7;
    let date = 1;
    let daysInSelectedMonth = model.data.daysInMonth[currentMonth];
    let started = false;

    day.setFullYear(currentYear, currentMonth, 0);
   // console.log('date0 sin ukedag: ' + day.getDay());
    for (let a = 0; a < rows; a++) {//  ukene eks uke numer
        let startPostition = day.getDay();
       // console.log('startposisjon: ' + startPostition);
        html += "<tr>";
        for (let b = 0; b < columns; b++) { // uke dager eks mandag tirsdag
            if (a == 0) { // øverste linje
                html += /*html*/`<th>                           
                    ${getDayName(b)} 
                </th>`;
            }
            else {
                if (b == startPostition && a == 1) {
                    started = true;
                }
                if (started && date <= daysInSelectedMonth) {   // ----
                    day.setDate(day.getDate() + 1);
                    html += /*html*/`<td>                           
                    <button class="date-button" onclick="selectDate(${day.getDate()})">
                      <!--  ${getDayName(day.getDay() -1 )}  <br />  -->
                         ${day.getDate()} <br />
                        <!-- Heldagspris: ${getPriceDay(day.getDay())} 
                        <br> Timespris: ${getPriceHour()} -->
                    </button>
                    </td>`;
                    date++;
                }
                else {
                    html += '<td></td>';
                    //console.log('tom plass');
                }

            }

        }
        html += "</tr>";
    }
    html += `</table>`;
    html += `<p> Døgnpris: ${getPriceDay(model.inputs.bookingPage.selectedDate.getDay())} 
    <br> Timespris: ${getPriceHour()} </p>`
    return html;
}

function getTimePicker() {
    //let hoursInDay = 24;
    let rows = 4;
    let columns = 6;
    let html = `<table>`;
    let hour = 0;
     

    for (let h = 0; h < rows; h++) {
        html += `<tr>`;

        for (let n = 0; n < columns; n++) {
            html += /*html*/`<td>
            <button class="hour-button" onclick="">
                ${hour} <br> ${getPriceHour()}
                
            </button>                               
            </td>`;
            hour++;
        }
        html += "</tr>";
    }

    html += `</table>`;
    if (model.inputs.bookingPage.isDateSelected){
        return html;
    } else{
        return "";
    }

}










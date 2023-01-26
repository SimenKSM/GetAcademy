function view(){
    let html = "";

    if(model.currentPage == "bookingside") html = bookingView();


    document.getElementById("app").innerHTML = html;
    // app.innerHTML  = html;



}
view();


function bookingView(){

    let html = "";

    html += ` 
    <div>Velkommen til booking</div>
    <div>Skriv inn navn:<input onchange="model.booking.navn = this.value" /></div>
    <div>Skriv inn kredittkortinfo:<input onchange="model.booking.kortnummer = this.value"/></div>
    <div>Velg ønsket dato fra:<input type="date" onchange="model.booking.fraDato = this.value"/></div>
    <div>Velg ønsket dato fra:<input type="date" onchange="model.booking.tilDato = this.value"/></div>
    <button onclick="leggTilBooking()">Registrer booking</button>
    
    `;


return html;

}
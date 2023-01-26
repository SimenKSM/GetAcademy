function leggTilBooking(){
let nyBooking = {
        navn:model.booking.navn,
        kredittkortinfo: model.booking.kortnummer,
        booketRom: 128,
        datoFra: model.booking.fraDato,
        datoTil: model.booking.tilDato,
        adresse:"getveien 330",
        parkeringsplass: 05,
        skyldigBeløp:0,
};

    model.gjester.push(nyBooking);
    view();
}

// function leggTilBooking(){
//     let nyBooking = {};
//     nyBooking.navn = model.booking.navn,
//     nyBooking.kredittkortinfo = model.booking.kortnummer,
//     nyBooking.booketRom = 128,
//     nyBooking.datoFra = model.booking.fraDato,
//     nyBooking.datoTil = model.booking.tilDato,
//     nyBooking.adresse = "getveien 330",
//     nyBooking.parkeringsplass = 05,
//     nyBooking.skyldigBeløp = 0,
    
    
//         model.gjester.push(nyBooking);
//         view();
// }
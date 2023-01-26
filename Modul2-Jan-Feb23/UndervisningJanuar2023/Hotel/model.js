const model = {

    currentPage: "bookingside",
// rom, reservasjon, check-in, ansatte, parkeringsplass, betalingsmåter, teknisk annlegg
//roomservice, minibar, resepsjonist, gjester, 

//inputs
booking:{
    navn:"",
    kortnummer:"",
    fraDato: "",
    tilDato:"",
},










// data (rom - minibar, gjester,ansatte, parkeringsplass )


rom: [
       { 
        typeRom:"gjesterom",
        gjestPåRom: "Bjarne Nordmann",
        seng:"dobbelseng",
        romnummer: 123,
        minibar:[{navn: "cola", pris: 99},{navn: "sjokolade", pris: 149},{ navn:"sprit", pris:2000}],
       },
       { 
        typeRom:"gjesterom",
        gjestPåRom: "Kari Nordmann",
        seng:"dobbelseng",
        romnummer: 124,
        minibar:[{navn: "cola", pris: 99},{navn: "sjokolade", pris: 149},],
       },
       { 
        typeRom:"gjesterom",
        gjestPåRom: "",
        seng:"dobbelseng",
        romnummer: 125,
        minibar:[{navn: "cola", pris: 99},{navn: "sjokolade", pris: 149},{ navn:"sprit", pris:2000}],
       },

    ],

gjester:[
    {
        navn:"Kari Nordmann",
        kredittkortinfo: 214123452538,
        booketRom: 124,
        datoFra:"26.01.23",
        datoTil:"29.01.23",
        adresse:"getveien 330",
        parkeringsplass: 01,
        skyldigBeløp:2900,
    },
    {
        navn:"Bjarne Nordmann",
        kredittkortinfo: 123475952538,
        booketRom: 123,
        datoFra:"26.01.23",
        datoTil:"29.01.23",
        adresse:"getveien 303",
        parkeringsplass: 02,
        skyldigBeløp:900,
    },
   
],

ansatte:[
    {
    navn:"Gunnar I Farta",
    ansattnummer: 3456,
    stilling:"Resepsjonist",
    ansattSiden: "01.01.22",
    timerJobbet: 20,
    lønn: 250,
    lønnstrinn: 2,
    parkeringsplass: 06,
    },

],

parkeringsplasser:[
    {nummer:01, okkupertAv: "Kari Nordmann", regnummer: "EL 12345"},
    {nummer:02, okkupertAv: "Bjarne Nordmann", regnummer: "EL 54321"},
    {nummer:03, okkupertAv: "", regnummer: ""},
    {nummer:04, okkupertAv: "", regnummer: ""},
    {nummer:05, okkupertAv: "", regnummer: ""},
    {nummer:06, okkupertAv: "Gunnar I Farta", regnummer: "h0Telkng"},
]

}
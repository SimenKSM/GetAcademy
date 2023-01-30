


function selectFleet(fleetId){
    model.inputs.bookingPage.fleetChoice = fleetId;
    console.log('fleet Id:' + fleetId);
    //model.data.selectedMonth = getCurrentMonth();
    //setTimeAsSelected();
    updateView();
}

function setTimeAsSelected(){
    let date = new Date();
    model.inputs.bookingPage.selectedDate = date.getDate();
    model.inputs.bookingPage.selectedMonth = date.getMonth();
    model.inputs.bookingPage.selectedYear = date.getFullYear();
    console.log('date: ' + model.inputs.bookingPage.selectedDate);
    console.log('Month: ' + model.inputs.bookingPage.selectedMonth);
    console.log('Year: ' + model.inputs.bookingPage.selectedYear);

}


function goToNextMonth(){
    if(model.inputs.bookingPage.selectedDate.getMonth() > 10){    
        //goToNextYear();
    }
    model.inputs.bookingPage.selectedDate.setMonth(model.inputs.bookingPage.selectedDate.getMonth() + 1);
    
    //console.log('Month: ' + model.inputs.bookingPage.selectedDate.getMonth());
    updateView();
}

function goToPrevMonth(){
    if(model.inputs.bookingPage.selectedDate.getMonth() < 1){
        //goToPrevYear();
    }
    model.inputs.bookingPage.selectedDate.setMonth(model.inputs.bookingPage.selectedDate.getMonth() - 1);
    
    console.log('Month: ' + model.inputs.bookingPage.selectedDate.getMonth());
    updateView();
}



function getSelectedMonthName(){
    let selectedMonth = model.inputs.bookingPage.selectedDate.getMonth();
    if(selectedMonth == 0) return 'Januar';
    if(selectedMonth == 1) return 'Februar';
    if(selectedMonth == 2) return 'Mars';
    if(selectedMonth == 3) return 'April';
    if(selectedMonth == 4) return 'Mai';
    if(selectedMonth == 5) return 'Juni';
    if(selectedMonth == 6) return 'Juli';
    if(selectedMonth == 7) return 'August';
    if(selectedMonth == 8) return 'September';
    if(selectedMonth == 9) return 'Oktober';
    if(selectedMonth == 10) return 'November';
    if(selectedMonth == 11) return 'Desember';

}


function getDayName(dayIndex){ 
    if(dayIndex == 0) return 'Man';
    if(dayIndex == 1) return 'Tirs';
    if(dayIndex == 2) return 'Ons';
    if(dayIndex == 3) return 'Tors';
    if(dayIndex == 4) return 'Fre';
    if(dayIndex == 5) return 'Lør';
    if(dayIndex == 6) return 'Søn';
    else return 'error day' + dayIndex;


}

function selectDate(date){
    model.inputs.bookingPage.isDateSelected = true;
    model.inputs.bookingPage.selectedDate.setDate(date);

    updateView();
}


function getPriceDay(day){
    if(day < 6 && day > 0) return model.data.prices.weekdayPriceDay;
    else return model.data.prices.weekendPriceDay;
    
}

function getPriceHour(){
    let day = model.inputs.bookingPage.selectedDate.getDay();
    if(day < 6 && day > 0) return model.data.prices.weekdayPriceHour;
    else return model.data.prices.weekendPriceHour;
}


function selectHour(hour){
    model.inputs.bookingPage.selectedHours.push(hour);
    
    /* model.inputs.bookingPage.tmpPrices = []; */
    //model.inputs.bookingPage.tmpPrices.push( sumHoursSelected() );
    //model.inputs.bookingPage.tmpPrices.push( sumComfortChoices() );


    updateView();
}
//returnerer samlet pris på timer valgt
function sumHoursSelected(){
    let day = model.inputs.bookingPage.selectedDate.getDay();
    let priceSum = 0;
    
	for(let hour of  model.inputs.bookingPage.selectedHours){
		priceSum += getPriceHour();
	}
    if(priceSum >= getPriceDay(day)){
        return  getPriceDay(day);
    }
    else return priceSum;
        
     
}

function sumComfortsSelected(){
    let priceSum = 0;
    for(let comfortId of model.inputs.bookingPage.comfortChoices){
        priceSum += getComfortById(comfortId).price;
    }
    return priceSum;
}

function getComfortById(id){
	for(let comfort of model.data.comforts){
		if (id == comfort.id)
			return comfort;
	}
	return null;
}

function totalSum(){
    return sumHoursSelected() + sumComfortsSelected();
}


function getPackageById(id){
    for(let package of model.data.packageOptions){
        if (id == package.id)
            return package;
    }
    return null;
}

function addBooking(){
    
}

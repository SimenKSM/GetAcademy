
const model = {
    //Tilstand app
    app: {
        currentPage: 'ControlPanel',
        currentUser: null,

    },
    // Input Felter til hver side
    inputs: {
        generatorPage: {
            questionArray: [
                {
                    questionText: 'Spørsmål A',
                },
            ],
            selfDefined: {
                isChecked: false,
                admincomment: 'Kommentar til egendefinert svar',

            },

            isOver: {
                date: '11.01.2023',
                time: '12:00',

            },
        },
        //Korrekt måte og sette opp dette, trengs det array (Fordeler / Ulemper ved om brukere kan velge flere alternativ og hva er best practice om det er tillat)
        surveyPage: {
            chosenAnswerID: '',
            userComment: 'Hva brukeren svarte',
        },

        // Hva er riktig og gjøre her tenker lærer? Skal dette ligge i data / controller funksjon, burde det gjøres om en til knapp fra en select?
        resultPage: {
            stopSurvey: false
        },
    },
    //Data
    surveyData: [
        {
            id: 1,
            title: 'placeholder tittel',
            description: 'Mulighet hvis det trengs ekstra info i tillegg til tittel',
            timeStamp: 'Dato / Tid ',
            surveyQuestions: [
                {
                    questionID: 1,
                    voteNo: null,
                    questionText: 'Spørsmål A',
                    preDefinedAnswers: [ //Bør dette ligge i et eget array med objekter, eller bare som et objekt i surveydata Arrayet?
                        {
                            questionText: 'Egendefinert svar'
                        }
                    ],

                },
                
            ],
        },
    ],



};

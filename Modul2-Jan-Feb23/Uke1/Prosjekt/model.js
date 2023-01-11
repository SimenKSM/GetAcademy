
const model = {
    //Tilstand app
    app: {
        currentPage: 'ControlPanel',
        currentUser: null,

    },
    // Input Felter til hver side
    inputs: {
        surveyTitle: "",
        questionTitle: "",
        choisesText: ["har du spist pizza?", "", ""], // hvis man trykker på legg til, blir det lagt til ett felt til i arrayet
        selfDefined: false,
        date: '',
        time: '',
        stopSurvey: false,
    }
    // generatorPage: { //Skal vi lage Generatorpage og Surveypage // eller bør alle inputs bare ligge her uten at de ligger i et objekt for en spesifikk side.
    //     questionArray: [
    //         {
    //             questionText: 'Spørsmål A',
    //         },
    //     ],
    //     question: '',

    //     selfDefined: {
    //         isChecked: false,
    //         admincomment: 'Kommentar til egendefinert svar',

    //     },

    //     isOver: {


    //     },
    // },
    // //Korrekt måte og sette opp dette, trengs det array (Fordeler / Ulemper ved om brukere kan velge flere alternativ og hva er best practice om det er tillat)
    // surveyPage: {
    //     chosenAnswerID: '',
    //     userComment: 'Hva brukeren svarte',
    // },

    // // Hva er riktig og gjøre her tenker lærer? Skal dette ligge i data / controller funksjon, burde det gjøres om en til knapp fra en select?
    // resultPage: {

    // },
    ,
    //Data
    surveyData: [
        {
            surveyId: 1,
            isSelfDefined: false,
            isActive: true,
            title: 'Placeholder Tittel på meningsmålingen',
            endDate: 'Placeholder Sluttdato om det er valgt',
            surveyQuestions: [
                {
                    questionID: 1,
                    voteNo: null,
                    questionText: 'Placeholder SpørsmålText',
                    preDefinedAnswers: [
                        {
                            answerText: 'Placeholder Egendefinert Svar'
                        }
                    ],

                },


            ],
        },
    ],
    // alt SurveyData
    /* 
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
                    totalVotes: null, // Bør dette skrives inn eller regner man det ut med en funksjon
                    questionText: 'Spørsmål A',

                },
                {
                    questionID: 2,
                    voteNo: null,
                    totalVotes: null, // Bør dette skrives inn eller regner man det ut med en funksjon
                    questionText: 'Spørsmål B',

                },
                {
                    questionID: 3,
                    voteNo: null,
                    totalVotes: null, // Bør dette skrives inn eller regner man det ut med en funksjon
                    questionText: 'Spørsmål C',

                },
                {
                    preDefinedAnswers: [ //Bør dette ligge i et eget array med objekter, eller bare som et objekt i surveydata Arrayet?

                        {
                            preDefinedAnswerID: 1,
                            questionText: 'Egendefinert svar',
                        },
                        {
                            preDefinedAnswerID: 2,
                            questionText: 'Egendefinert svar',
                        },
                    ]
                },

            ],
        },
    ],
 */
};

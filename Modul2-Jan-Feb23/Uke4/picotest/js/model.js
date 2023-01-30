const model = {

    app: {
        currentPage: 'frontPage',
        currentUser: 'admin',
        currentPicture: 0, // 'img/picture1.jpg',  // src="/badebilde.jpg"
        editorPicture: 0,
        modalContent: '',
        
    },
    modal: 'none',
    

    inputs: {
        frontPage: {
        },
        bookingPage: {

            fleetChoice: null,
            packageChoice: null,
            comfortChoices: [],
            selectedDate: new Date(),
            selectedHours: [],
            isDateSelected: false,

        },
        blogPage: {

            titlePost: '',
            currentPost: '',
            pictureIsChecked: false,

        },

    },

    data: { // Husk og fylle ut alle verdier
        packageOptions: [
            {
                id: 0,
                name: 'Jentekveld (6 stk)',
                price: {
                    weekdayPrice: 5264, 
                    weekendPrice: 7664,
                },
                hours: 4,
                comforts: [
                    {id: 0, quantity: 4,}, 
                    {id: 1, quantity: 6,},
                    {id: 2, quantity: 6,}, 
                    {id: 3, quantity: 6,},
                    {id: 4, quantity: 1,},
                    {id: 5, quantity: 6,},
                ],

            },
            {
                id: 1,
                name: 'Jentekveld (4 stk)',
                price: {
                    weekdayPrice: 3454, 
                    weekendPrice: 5184,
                },
                hours: 4,
                comforts: [
                    {id: 0, quantity: 3,}, 
                    {id: 1, quantity: 4,},
                    {id: 2, quantity: 4,}, 
                    {id: 3, quantity: 4,},
                    {id: 4, quantity: 1,},
                    {id: 5, quantity: 4,},
                ],

            },
            {
                id: 2,
                name: 'Familie pakke (4 stk)',
                price: {
                    weekdayPrice: 1904, 
                    weekendPrice: 2304,
                },
                hours: 1,
                comforts: [
                    {id: 1, quantity: 4,},
                    {id: 2, quantity: 4,}, 
                    {id: 3, quantity: 4,},
                    {id: 4, quantity: 1,},
                    {id: 5, quantity: 4,},
                ],
            },
            {
                id: 3,
                name: 'Familie pakke (5 stk)',
                price: {
                    weekdayPrice: 2464, 
                    weekendPrice: 2864,
                },
                hours: 1,
                comforts: [
                    {id: 1, quantity: 5,},
                    {id: 2, quantity: 5,}, 
                    {id: 3, quantity: 5,},
                    {id: 4, quantity: 1,},
                    {id: 5, quantity: 5,},
                ],

            },
            {
                id: 4,
                name: 'Standard pakke (2 stk)',
                price: {
                    weekdayPrice: 1504, 
                    weekendPrice: 2304,
                },
                hours: 2,
                comforts: [
                    {id: 0, quantity: 1,}, 
                    {id: 1, quantity: 2,},
                    {id: 2, quantity: 2,}, 
                    {id: 3, quantity: 2,},
                    {id: 4, quantity: 1,},
                    {id: 5, quantity: 2,},
                ],

            },
        ],

        comforts: [
            {
                id: 0,
                name: 'Vin',
                price: 200,
            },
            {
                id: 1,
                name: 'shampo og balsam',
                price: 100,
            },
            {
                id: 2,
                name: 'håndkler',
                price: 100,
            },
            {
                id: 3,
                name: 'mineralvann',
                price: 50,
            },
            {
                id: 4,
                name: 'aroma',
                price: 80,
            },
            {
                id: 5,
                name: 'Badekåpe',
                price: 200,
            },
        ],

        bookings: [
            {
                orderId: 1,
                fleetId: null,
                chosenPackage: null,
                chosenComforts: [1],
                chosenDate: new Date(),
                chosenHours: [],
                customer: '',
                totalPrice: 0,
            },
        ],
        fleets: [
            {
                id: 0,
                name: 'Båt0',
            },
            {
                id: 1,
                name: 'Båt1',
            },
        ],

        blogPosts: [
            {
                postId: 1,
                postTitle: 'Blogg1',
                postText: 'Velkommen til mentalhelseblogg',
                postPicture: 'img/blogPicture1.jpg',
            },
            {
                postId: 2,
                postTitle: 'Blogg2',
                postText: 'Velkommen til Mental helse',
                postPicture: 'img/blogPicture2.jpg',
            },
        ],
        
        blogPictures: ['img/blogPicture1.jpg','img/blogPicture2.jpg'],
        frontPagePictures: ['img/picture1.jpg', 'img/picture2.jpg', 'img/picture3.jpg',],

        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //funker det å ha denne her?
        hoursInDay: 24,

        prices: {
            weekdayPriceHour: 500,
            weekdayPriceDay: 3000,
            weekendPriceHour: 1000,
            weekendPriceDay: 5000,
        },
    },


}
// Hvordan går man frem for og lage en kalender og data modell for det?
// Datafunksjoner for priser i kalender
//
//Hvordan lagre datoer med priser? controller-funksjon som regner ut pris og ser om dag valgt er helg eller ikke?
//
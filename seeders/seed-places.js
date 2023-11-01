//const db = require('../models') //<------FROM COURSE MATERIAL
const db = require('../models') //NOTE: Modified (different from course notes)

// db.Place.create([ /<------FROM COURSE MATERIAL
//NOTE: Modified to db.create([    <------(different from course notes)
db.Place.create([
  {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989,
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020,
  },
  {
    name: 'Mama Mia Pizzeria',
    city: 'Chicago',
    state: 'IL',
    cuisines: 'Italian, Pizza',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_LH5TxZOkZBBRu9z2j4iOLAvQJmK3VP4FDclr__QoTW3JfYVNgwQU4qPRkYLXj-w0lk&usqp=CAU',
    founded: 1982,
  },
  {
    name: 'Spice Route',
    city: 'Miami',
    state: 'FL',
    cuisines: 'Indian, Asian',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ujfHqz2Efw9MlzmWfy74lfuRs8YBQ4xosA&usqp=CAU',
    founded: 2007,
  },
  {
    name: 'Taco Town',
    city: 'San Diego',
    state: 'CA',
    cuisines: 'Mexican, Tacos',
    pic: 'https://images.squarespace-cdn.com/content/v1/6424595bf3abf07778c16898/1ae5dd35-b5e9-4c3e-a21e-08140f2c6717/Taco+Town+Logo.png',
    founded: 2011,
  },
  {
    name: 'Pasta Paradise',
    city: 'Boston',
    state: 'MA',
    cuisines: 'Italian, Pasta',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigM9DCOgqsWp_DVVgFQf8ZtUtlCPjUZO2Eg&usqp=CAU',
    founded: 2000,
  },
])
  .then(() => {
    console.log('Success!')
    process.exit()
  })
  .catch((err) => {
    console.log('Failure!!!', err)
    process.exit()
  })

//NOTE: To run this (seed place data) run the command in the terminal: node seeders/seed-places.js
// Only need to run once, otherwise results in duplicate data.

import moment from 'moment';

console.log('today', new Date)

let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()

console.log('date', `${year} - ${month} - ${day}`)

console.log('moment date', moment.format('MMMM Do YYYY, h:mm:ss a'))
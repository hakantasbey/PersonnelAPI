"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// app.use(logging):

//* MORGAN LOGGING
// https://expressjs.com/en/resources/middleware/morgan.html
// https://github.com/expressjs/morgan
//? $ npm i morgan

const morgan = require('morgan')

// app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('dev'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))
// app.use(morgan('IP=:remote-addr | TIME=:date[clf] | METHOD=:method | URL=:url | STATUS=:status | LENGTH=:res[content-length] | REF=:referrer | AGENT=":user-agent"'))

//? Write to log file:
// const fs = require('node:fs')   //* built-in modul
// app.use(morgan('combined',{
//     stream: fs.createWriteStream('./access.log', { flags:'a+'})
// }))

//? Write to file day by day:  --->  logs klasoru altina gun gun tutmak icin yazdik.
const fs = require('node:fs') 
const  now = new Date()
// console.log(typeof now, now);
const today = now.toISOString().split('T')[0]
// console.log(typeof today, today);
// app.use(morgan('combined',{
//     stream: fs.createWriteStream(`./logs/${today}.log`, { flags:'a+'})
// }))

module.exports = morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
})
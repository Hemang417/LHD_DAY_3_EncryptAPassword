const express = require('express')
const bcrypt = require('bcrypt')

let hashPass = '';
const app = express()

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('Server is listening on 3000')
})
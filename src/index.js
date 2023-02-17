const express = require('express')
const peopleSql = require('./people-sql.js');
const app = express()

peopleSql.insertNew()

app.get('/', (req, res) => {
    peopleSql.getAll((listOfNames) => {
        res.send(listOfNames)
    })

})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})
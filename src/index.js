const express = require('express')
const peopleSql = require('./people-sql.js');

const app = express()
const port = 3000
peopleSql.insertNew()

app.get('/', (req, res) => {
    peopleSql.getAll((nameList) => {
        res.send(nameList)
    })

})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})
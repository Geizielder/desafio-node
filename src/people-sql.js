const mysql = require('mysql')
const faketor = require('fakerator')('ge-GE');
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const insertNew = () => {
    const connection = mysql.createConnection(config)
    const newName = faketor.names.name()

    connection.query(`INSERT INTO people(name) values('${newName}')`)

    connection.end
}

const getAll = (callback) => {
    const connection = mysql.createConnection(config)

    connection.query(`SELECT name FROM people`, function (err, result) {
        if (err) throw err

        const listOfNames = result.map((people) => `<li><span>${people.name}</span></li>`).join('\n')
        const destaque = 'Geizielder'
        return callback(`
            <h1>Full Cycle Rocks!</h1>
            <h3>Destaque do mês: ${destaque} :)</h3>
            <ul>
                ${listOfNames}
            </ul>
        `)
    });

    connection.end
}

exports.insertNew = insertNew;
exports.getAll = getAll;
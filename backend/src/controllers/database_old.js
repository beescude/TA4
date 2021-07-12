const fs = require('fs');
const db = {};

let PST = {};
function init() {
    try {
        //Intenta cargar el archivo JSON
        const data_csv = fs.readFileSync('./src/SmartHomeDatabase.csv')
        PST = JSON.parse(data_csv) //Transforma un String a objeto JSON
    } catch (e) {
        console.log("El archivo SmaasddddddddddddddrtHomeDatabase no se pudo cargar.")
       }
    //se crean variables para acceder a ciertos atributos
    db.profesores = PST.profesores;
    db.estudiantes = PST.estudiantes;
}

function updateDB(){
    //actualiza el archivo JSON
    fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
}

db.init = init;
db.updateDB = updateDB;

module.exports = db;

const mysql = require ('mysql2')
const fs = require('fs');
const {database} = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err,con)=>{
    if(err){
        console.log("SE TIENEN QUE USAR EXACTAMENTE LAS MISMAS CREDENCIALES DEL DATABASE");
        process.exit(0);
        throw err;
    }
    if(con) con.release();
    console.log('Conexión a la base de datos realizada');
    return;
});


module.exports = pool;

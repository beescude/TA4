
const db = require("./database.js")
const estControl = {};
const ejercicio_a = {};
ejercicio_a.getTop10 = (req,res)=>res.send('<h1>EJERCICIO A prueba 2</h1>');

estControl.getEstudiante = (req,res)=>{
    const estudiante = db.estudiantes.find(
        (est)=>est.id == req.params.id
    );

    res.json(estudiante);
}


ejercicio_a.getTop10 = (req, res) => {
    db.query("SELECT house_o FROM electrodomesticos", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}
module.exports = ejercicio_a;
const app = require('./app.js');
const db = require('./controllers/database_old');
db.init();
const port = app.get('port');
const host = app.get('host');

app.listen(port, () => {
    console.log(`Iniciar Página web con http://${host}:${port}`);
})


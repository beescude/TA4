const {Router}=require('express');
const router = Router();

const aControl = require('../controllers/a_control.js');

//router.route('/').get(getEstudiantes)
router.route('/').get(aControl.getTop10);

module.exports = router


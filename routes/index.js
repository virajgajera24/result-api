var express = require('express');
var router = express.Router();
var {result,view,view10,view5, update,kt, resultsearch} = require('../controller/indexcontroller')
/* GET home page. */
router.post('/',result)
router.get('/view',view)
router.get('/top5',view5)
router.get('/top10',view10)
router.get('/kt',kt)
router.get('/search/:result',resultsearch)
router.post('/update/:id',update)


module.exports = router;

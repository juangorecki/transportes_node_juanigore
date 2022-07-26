var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModels')

router.get('/', async function(req,res,next) {
    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona:req.session.nombre,
        novedades
    });
});

router.get('/agregar',(req,res,next) => {
    res.render('admin/agregar',{
        layout: 'admin/layout'
    })

})

router.post('/agregar', async (req,res,next) =>{

    //console.log(req.body)

})

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Router.get('/formulario', function(req, res, next){
  //manejara metodo get
  var datos = {
    "txtNombre":"",
    "Mchecked":"checked=checked",
    "Fchecked":"",
    "resultado":""
  };
  //res.render es la funcion que devuelve la plantilla de la carpeta view y datos son los valores que seran incorporados en los {{}} en la plantilla
  res.render('formulario', datos);
});

Router.get('/formulario', function(req, res, next){
  //manejara metodo post
  console.log(req.body);
  var datos = {
    "txtNombre":"",
    "Mchecked":"checked=checked",
    "Fchecked":"",
    "resultado":""
  };
});

module.exports = router;

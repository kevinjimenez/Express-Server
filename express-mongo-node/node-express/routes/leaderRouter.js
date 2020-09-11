
const express = require('express');
const bodyParse = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParse.json());

leaderRouter.route('/')


.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next) => {
    console.log(res.headers)
    res.end('Te enviaremos todos los leader!');
})

.post((req, res, next) => {

    res.end('Añadaremos el leader: ' + req.body.name +
        req.body.descripcion);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT no es una operacion soportada en /leader');
})

.delete((req, res, next) => {
    res.end('Borrando todos los leader!');
});

//  with params
leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    console.log(res.headers)
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    console.log(res.headers)
    res.end('Te enviaremos todas las leader!' + req.params.leaderId);        
})

.post((req, res, next) => {

    res.end('Añadaremos la leader: ' + req.body.name +
        req.body.descripcion);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT no es una operacion soportada en /leaders');
})

.delete((req, res, next) => {
    res.end('Borrando todas las leader!');
});

module.exports = leaderRouter;
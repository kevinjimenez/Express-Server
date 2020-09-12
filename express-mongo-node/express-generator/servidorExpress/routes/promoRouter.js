const express = require('express');
const bodyParse = require('body-parser');

const promotionsRoute = express.Router()

promotionsRoute.use(bodyParse.json())

promotionsRoute.route('/')

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        console.log(res.headers)
        res.end('Te enviaremos todos los promo!');
    })

    .post((req, res, next) => {

        res.end('Añadaremos el promo: ' + req.body.name +
            req.body.descripcion);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT no es una operacion soportada en /promo');
    })

    .delete((req, res, next) => {
        res.end('Borrando todos los promo!');
    });

//  with params
promotionsRoute.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        console.log(res.headers)
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        console.log(res.headers)
        res.end('Te enviaremos todas las promos!' + req.params.promoId);        
    })

    .post((req, res, next) => {

        res.end('Añadaremos la promo: ' + req.body.name +
            req.body.descripcion);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT no es una operacion soportada en /promotions');
    })

    .delete((req, res, next) => {
        res.end('Borrando todas las promos!');
    });

    module.exports = promotionsRoute;
const bodyParse = require('body-parser');
const express = require('express');

const dishRouter = express.Router();
dishRouter.use(bodyParse.json());
//  without params
dishRouter.route('/')

.all((req,res,next)=>{
    res.statusCode = 200;
    console.log(res.headers)
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    console.log(res.headers)        
    res.end('Te enviaremos todos los platos!');
})

.post((req,res,next)=>{
    
    res.end('Añadaremos el plato: ' + req.body.name + 
    req.body.descripcion);
})

.put((req,res,next)=>{    
    res.statusCode = 403;
    res.end('PUT no es una operacion soportada en /dishes');
})

.delete((req,res,next)=>{    
    res.end('Borrando todos los platos!');
});

//  with params
dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode = 200;
    console.log(res.headers)
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    console.log(res.headers)    
    res.end('Te enviaremos todos los platos!' + req.params.dishId);
    //res.end('Te enviaremos todos los platos!');
})

.post((req,res,next)=>{
    
    res.end('Añadaremos el plato: ' + req.body.name + 
    req.body.descripcion);
})

.put((req,res,next)=>{    
    res.statusCode = 403;
    res.end('PUT no es una operacion soportada en /dishes');
})

.delete((req,res,next)=>{    
    res.end('Borrando todos los platos!');
});


module.exports = dishRouter;
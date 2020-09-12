const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

/*app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    console.log(res.headers)
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    console.log(res.headers)
    res.end('Te enviaremos todos los platos!');
});

app.post('/dishes',(req,res,next)=>{    
    res.end('Añadaremos el plato: ' + req.body.name + 
    req.body.descripcion);
});

app.put('/dishes',(req,res,next)=>{    
    res.statusCode = 403;
    res.end('PUT no es una operacion soportada en /dishes');
});

app.delete('/dishes',(req,res,next)=>{    
    res.end('Borrando todos los platos!');
});



app.get('/dishes/:dishId',(req,res,next)=>{    
    res.end('Te enviaremos los detalles del platos!' + req.params.dishId + 'a ti');
});

app.post('/dishes/:dishId',(req,res,next)=>{    
    res.statusCode = 403;
    res.end('POST no es una operacion soportada en /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{    
    res.write('Actualizando el plat: '+req.params.dishId);
    res.end('actuañizaremos el plaro: '
    +req.body.name+' con detalle: '+req.body.descripcion);
});

app.delete('/dishes/:dishId',(req,res,next)=>{    
    res.end('Borrando el plato: '+req.params.dishId);
});*/

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);


app.use(express.static(__dirname+'/public'));


app
    .use(
        (req, res, next) => {
             console.log(req.headers);
             res.statusCode = 200;
             res.setHeader('Content-Type','text/html');
             res.end('<html><body><h1>Express server</h1><*body></html>')
        });

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(
        `Server runnin en ${hostname}:${port}`
    )
})

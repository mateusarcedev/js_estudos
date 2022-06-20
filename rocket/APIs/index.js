const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

// app.route('/').get( (req, res) => res.send("Hello") )
// app.route('/sobre').get( (req, res) => res.send("Hello Sobre"))
// app.route('/').post( (req, res) => res.send(req.body) )
// let author = "Arce"
// app.route('/').get( (req, res) => res.send(author) )
// app.route('/').put( (req, res) => {
//     author = req.body.author;
//     res.send(author);
// })
// app.route('/:identificador').delete( (req, res) => {
//     res.send(req.params.identificador)
// })

// app.route('/').get((req, res) => res.send(req.query.name))

// app.route('/').post((req, res) => res.send(req.body))

// app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

app.route('/').get((req, res) => res.send("olá"))
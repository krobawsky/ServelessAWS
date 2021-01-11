const serverless = require('serverless-http');
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const axios = require('axios')

const connectToDatabase = require('./db')
const Film = require('./models/Film')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Ricardo Berrospi!')
})

app.get('/people/:id', async function (req, res) {

    const response = await axios
        .get(`https://swapi.py4e.com/api/people/${ req.params.id }`)
        .then(({
            data
        }) => {
            return data
        });

    res.send({
        ...transformPeopleModel(response),
    })

})

app.post('/films', function (req, res) {
    connectToDatabase()
        .then(() => {
            Film.create(req.body)
                .then(film => res.status(201).json(film))
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        error: 'No se pudo crear la pelicula'
                    });
                });
        });
})

app.get('/films', function (req, res) {
    connectToDatabase()
        .then(() => {
            Film.find()
                .then(films => res.json(films))
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        error: 'No se pudo listar las peliculas'
                    });
                })
        });
})


module.exports.handler = serverless(app);

//#region functions

const transformPeopleModel = (response) => {
    return {
        nombres: response.name,
        altura: response.height,
        masa: response.mass,
        color_cabello: response.hair_color,
        color_piel: response.skin_color,
        color_ojos: response.eye_color,
        anio_nacimiento: response.birth_year,
        genero: response.gender,
        mundo_natal: response.homeworld,
        peliculas: response.films,
        especies: response.species,
        vehículos: response.vehicles,
        naves: response.starships,
        creado: response.created,
        editado: response.edited,
        url: response.url
    }
}

//#endregion
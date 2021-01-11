# Swapi

Este repositorio contiene un proyecto en NodeJs con Serveless


Endpoints:
  GET - https://3dlo3t7cac.execute-api.us-east-1.amazonaws.com/dev
  GET - https://3dlo3t7cac.execute-api.us-east-1.amazonaws.com/dev/people/{id}
  GET - https://3dlo3t7cac.execute-api.us-east-1.amazonaws.com/dev/films
  POST - https://3dlo3t7cac.execute-api.us-east-1.amazonaws.com/dev/films

Functions:
  app: swapi-dev-app
  getPeople: swapi-dev-getPeople
  getFilms: swapi-dev-getFilms
  createFilms: swapi-dev-createFilms

Request createFilms:

```
{
    "title": "A New Hope",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "episode_id": 4,
    "characters": ["Luke Skywalker", "Darth Vader", "Leia Organa", "R2-D2"]
}
```
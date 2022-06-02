const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/bookstore').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/bookstore').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = Number(request.params['id']);
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = Number(request.params['id']);

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = Number(request.params['id']);
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
    {
        id: '1',
        name: 'Livro da Vida',
        quantity: 23,
        category: 'religiao',
        price: 12.99,
        img: '/assets/images/livro-da-vida.webp',
    },
    {
        id: '2',
        name: 'Livro de Salomao',
        quantity: 212,
        category: 'religiao',
        price: 15.99,
        img: '/assets/images/livro-de-salomao.jpg',
    },
    {
        id: '3',
        name: 'Como eu era Antes de Voce',
        quantity: 20,
        category: 'autoajuda',
        price: 19.90,
        img: '/assets/images/como-eu-era.webp',
    },
    {
        id: '4',
        name: 'O Livro Completo de Bruxaria',
        quantity: 2,
        category: 'religiao',
        price: 32.99,
        img: '/assets/images/bruxaria.jpg',
    },
    
];

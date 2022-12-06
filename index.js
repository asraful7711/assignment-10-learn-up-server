const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
app.use(cors());
const categories = require('./data/categories.json');
const courseData = require('./data/courseData.json')

app.get('/', (req, res) => {
    res.send('course Api running')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})
app.get('/course', (req, res) => {
    res.send(courseData)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseData.find(course => course._id === id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('lear up web server running')
})

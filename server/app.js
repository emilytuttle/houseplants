const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Plant = require('./models/plant.model')

dotenv.config();

//check if it's mongoDB works and loads
console.log('MongoDB URI:', process.env.MONGODB_URI);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log('Error connecting to MongoDB Atlas: ', err));

//api routes
app.get('/plants', async (req, res) => {
    const plants = await Plant.find();
    res.json(plants);
});

app.post('/plants', async (req, res) => {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    res.status(201).json(newPlant);
});

app.put('/plants/:id', async (req, res) => {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPlant);
});

app.delete('/plants/:id', async (req, res) => {
    await Plant.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

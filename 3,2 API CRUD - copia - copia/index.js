import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import Usuario from './models/usuario.model.js';

const app = express();
const puerto = 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

// Crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            error: 'Error al crear el usuario'
        });
    }
});

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id);
        
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

// Conexion a la base de datos MongoDB
const uri = process.env.uri;

mongoose.connect(uri)
.then(() => {
    console.log("Conexion exitosa a la base de datos");
})
.catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});
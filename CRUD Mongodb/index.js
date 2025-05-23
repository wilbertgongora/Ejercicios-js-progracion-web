import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const puerto = 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a MongoDB
const uri = process.env.uri;
const client = new MongoClient(uri);
let usuariosCollection;

// Conectar a la base de datos al iniciar
(async () => {
    try {
        await client.connect();
        const db = client.db();
        usuariosCollection = db.collection('usuarios');
        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
})();

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

app.post('/usuarios', async (req, res) => {
    try {
        const result = await usuariosCollection.insertOne(req.body);
        const nuevoUsuario = {
            _id: result.insertedId,
            ...req.body
        };
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            error: 'Error al crear el usuario'
        });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await usuariosCollection.find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuariosCollection.findOne({ _id: new ObjectId(id) });
        
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await usuariosCollection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: req.body },
            { returnDocument: 'after' }
        );
        
        if (!result.value) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.status(200).json({
            message: 'Usuario actualizado correctamente',
            usuario: result.value
        });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});


app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await usuariosCollection.findOneAndDelete({ _id: new ObjectId(id) });
        
        if (!result.value) {
            return res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }
        
        res.status(200).json({
            message: 'Usuario eliminado',
            usuario: result.value
        });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
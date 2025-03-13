import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();
const port = 3000;

let nombreEquipo = "";

// Middleware para procesar datos de formularios y JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware personalizado
function registrador(req, res, next) {
    console.log(req.body); // Muestra los datos enviados por el usuario
    nombreEquipo = req.body.mascota + req.body.adjetivo; // Concatena los datos enviados por el usuario
    next(); // Llama a la siguiente función en la pila de middleware
}

// Usar el middleware
app.use(registrador);

// Ruta para servir el archivo HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Ruta para manejar el envío del formulario
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`Nombre del equipo: ${nombreEquipo}`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
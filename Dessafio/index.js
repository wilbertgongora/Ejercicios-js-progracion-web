import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

// Inicializar la aplicación Express
const app = express();
const PORT = 3000;
const materias = {
    "Bases de Datos": {
        descripcion: "Estudio de los sistemas de gestión de bases de datos y su aplicación.",
        practicas: [
            {
                titulo: "Creación de base de datos",
                descripcion: "Diseñar y crear una base de datos en MySQL.",
                objetivo: "Comprender la estructura y diseño de bases de datos relacionales."
            },
            {
                titulo: "Consultas SQL avanzadas",
                descripcion: "Ejecutar consultas avanzadas en SQL con JOINS y subconsultas.",
                objetivo: "Manejar consultas complejas en bases de datos."
            }
        ]
    },
    "Inteligencia Artificial": {
        descripcion: "Introducción a los conceptos y aplicaciones de IA.",
        practicas: [
            {
                titulo: "Clasificación con Machine Learning",
                descripcion: "Implementar un modelo de clasificación con Python y Scikit-Learn.",
                objetivo: "Aplicar técnicas básicas de aprendizaje automático."
            },
            {
                titulo: "Red neuronal simple",
                descripcion: "Construir una red neuronal con TensorFlow.",
                objetivo: "Comprender la estructura de una red neuronal artificial."
            }
        ]
    },
    "Programación Web": {
        descripcion: "Desarrollo de aplicaciones web con tecnologías modernas.",
        practicas: [
            {
                titulo: "Desarrollo de una API REST",
                descripcion: "Crear una API REST con Express y Node.js.",
                objetivo: "Manejar peticiones y respuestas en aplicaciones web."
            },
            {
                titulo: "Diseño responsivo con CSS",
                descripcion: "Aplicar técnicas de CSS para mejorar la experiencia en distintos dispositivos.",
                objetivo: "Garantizar el diseño adaptable en una web."
            }
        ]
    },
    "Redes": {
        descripcion: "Fundamentos de redes de computadoras y su configuración.",
        practicas: [
            {
                titulo: "Configuración de red en Cisco Packet Tracer",
                descripcion: "Configurar una red básica con routers y switches en Packet Tracer.",
                objetivo: "Entender los principios de enrutamiento y direccionamiento."
            },
            {
                titulo: "Simulación de tráfico en Wireshark",
                descripcion: "Analizar paquetes de red con Wireshark.",
                objetivo: "Estudiar el comportamiento del tráfico de red y los protocolos involucrados."
            }
        ]
    }
};

// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static("public"));

// Endpoint para obtener las materias desde el archivo JSON
app.get("/api/materias", (req, res) => {
    fs.readFile("materiasSistemas.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error al leer el archivo de materias" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

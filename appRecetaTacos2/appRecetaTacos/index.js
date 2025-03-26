import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Configuración de __dirname para módulos ES
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// a. Constante recetaJSON con el nuevo contenido del JSON
const recetaJSON = `
[
    {
        "id": "0001",
        "tipo": "taco",
        "nombre": "Taco lechon",
        "precio": 20.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Puerco",
                "preparacion": "Horneado"
            },
            "salsa": {
                "nombre": "Tomate verde",
                "pico": "Medio"
            },
            "acompanamientos": [
                {
                    "nombre": "Cebolla",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
                },
                {
                    "nombre": "Guacamole",
                    "cantidad": "2 cucharadas",
                    "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
                }
            ]
        }
    },
    {
        "id": "0002",
        "tipo": "taco",
        "nombre": "Taco Camaron",
        "precio": 25.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Camaron",
                "preparacion": "Frito"
            },
            "salsa": {
                "nombre": "Tomate",
                "pico": "Medio"
            },
            "acompanamientos": [
                {
                    "nombre": "Cebolla",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Cebolla blanca", "Cilantro"]
                },
                {
                    "nombre": "Mexicana",
                    "cantidad": "2 cucharadas",
                    "ingredientes": ["Tomate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
                }
            ]
        }
    },
    {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco de birria",
        "precio": 20.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Carnero",
                "preparacion": "Hervido"
            },
            "salsa": {
                "nombre": "Guacamole",
                "pico": "Medio"
            },
            "acompanamientos": [
                {
                    "nombre": "Cebolla",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Cebolla blanca", "Cilantro"]
                },
                {
                    "nombre": "Guacamole",
                    "cantidad": "2 cucharadas",
                    "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
                }
            ]
        }
    },
    {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de lengua",
        "precio": 20.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Res",
                "preparacion": "Hervido"
            },
            "salsa": {
                "nombre": "Guacamole",
                "pico": "Medio"
            },
            "acompanamientos": [
                {
                    "nombre": "Cebolla",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Cebolla blanca", "Cilantro"]
                },
                {
                    "nombre": "Salsa roja",
                    "cantidad": "2 cucharadas",
                    "ingredientes": ["Tomate", "Guajillo", "Sal", "Cebolla", "Cilantro"]
                }
            ]
        }
    }
]

`;

// b. Deserializar el JSON a objeto JavaScript
const recetasTacos = JSON.parse(recetaJSON);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true })); // Para formularios
app.use(bodyParser.json()); // d. Middleware para datos JSON en solicitudes
app.use(express.static(__dirname + '/public')); // c. Servir archivos estáticos desde public

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// e. Handler GET para obtener receta de taco específico (ahora busca por ID o nombre)
app.get('/receta/:busqueda', (req, res) => {
  const busqueda = req.params.busqueda.toLowerCase();
  
  const elegirTaco = recetasTacos.find(taco => 
    taco.id.toLowerCase() === busqueda || 
    taco.nombre.toLowerCase().includes(busqueda) ||
    taco.ingredientes.proteina.nombre.toLowerCase().includes(busqueda)
  );
  
  res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Nueva ruta para obtener todas las recetas
app.get('/recetas', (req, res) => {
  res.json(recetasTacos);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
import express from"express";
import axios  from "axios";

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Programming?lang=es&type=single');
        const joke = result.data.joke; 
        const category = result.data.category;

        
        res.render('index.ejs', {
            joke: joke,
            category: category,
           
        });
        
        console.log(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la cita');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
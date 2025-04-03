import axios from "axios";

const registrarUsuario = async () => {
  try {
    const respuesta = await axios.post('https://regres.in/api/register', {
      email: 'eve.holt@regres.in',
      password: 'pistol'
    });
    console.log('Registro exitoso:', respuesta.data);
  } catch (error) {
    console.error('Error en el registro:', error.response.data);
  }
};

registrarUsuario();
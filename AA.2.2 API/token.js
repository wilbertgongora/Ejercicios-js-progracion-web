import axios from 'axios';

// 1. Login para obtener token
const loginData = { email: "eve.holt@reqres.in", password: "cityslicka" };

axios.post('https://reqres.in/api/login', loginData)
  .then(res => {
    const token = res.data.token;
    console.log("Token:", token);
    
    // 2. Acceder a datos protegidos con el token
    axios.get('https://reqres.in/api/users/1', {
      headers: { 'Authorization': `Bearer ${token}` }  // Comillas y template string corregidos
    })
    .then(res => console.log("Usuario:", res.data.data))  // Espacio innecesario eliminado
    .catch(err => console.error("Error en GET:", err.response?.data));

    // 3. Probar token inválido (opcional)
    axios.get('https://reqres.in/api/users/1', {
      headers: { 'Authorization': "Bearer token_falso_123" }
    })
    .catch(err => console.log("Token inválido:", err.response?.status));  // Tilde corregida
  })
  .catch(err => console.error("Error en login:", err.response?.data));
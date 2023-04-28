/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PATCH
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/
const axios = require("axios");

async function fnTest() {
  try {
    //...
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const status = { id: 1 };

    let response = await axios.patch(url, status);
    return response;

  } catch (error) {
    console.error(error);
  }
  
}

module.exports = fnTest;
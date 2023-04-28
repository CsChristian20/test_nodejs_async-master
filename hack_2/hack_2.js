/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/
const axios = require("axios");

async function fnTest() {
  
  try {

    //...
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const status = { id: 201 };

    let response = await axios.post(url, status);
    return response;

  } catch (error) {
    console.error(error);
  }
}

module.exports = fnTest;
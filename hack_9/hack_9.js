/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

const fetch = require('cross-fetch');

async function fnTest() {
  //...
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST'
  });
  const data = await response.json();
  return data;
}

module.exports = fnTest;


/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

const fetch = require('cross-fetch');

async function fnTest() {
  //...
  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  });
  const data = await response.json();
  return data.length;
}

module.exports = fnTest;
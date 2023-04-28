/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "data" 
- Contenido del return data:
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
} 
*/
const axios = require("axios");

async function fnTest() {

  try {
    //...
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await axios.get(url);
    return response.data[1];

  } catch (error) {
    console.error(error);
  }
  
}

module.exports = fnTest;
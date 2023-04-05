const axios = require("axios");

let config = {
  method: "get",
  url: "https://reqres.iasdsan/api/users",
};

/* Promise
  1. the result of request.config command is in response varible
  2. the response variable can be called between line 15-17
  3. the catch is called when there are any error when request.config execute
*/
axios
  .request(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    throw error;
  });

// Async Await
async function asyncAwaitAxios() {
  try {
    const response = await axios.request(config); // Wait for the process done
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}

asyncAwaitAxios();

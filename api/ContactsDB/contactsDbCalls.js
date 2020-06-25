const fetch = require("node-fetch");
const getContacts = async () => {
  const fetchUrl = "https://jsonplaceholder.typicode.com/users";
  const data = await fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return data;
};
module.exports = {
  getContacts,
};

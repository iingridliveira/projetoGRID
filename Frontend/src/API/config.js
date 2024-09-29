import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://parseapi.back4app.com/parse/classes",
  headers: {
    "X-Parse-Application-Id": "DHQdK12YvruH5lAYrqzJeS6bIH6nK2HUqVshZnXs",
    "X-Parse-REST-API-Key": "hUyEtW3gEhJK9v9DR6wXzrCfGbDBNodHTVdG0J7R",
    "Content-type": "application/json",
  },
});
export default blogFetch;

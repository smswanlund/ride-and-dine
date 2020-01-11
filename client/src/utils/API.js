import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users").then(
      res => console.log(res)
    )
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id).then(
      res => console.log(res)
    )
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};

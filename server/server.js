// halaman untuk konfigurasi server
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing server request http

// starting server
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});

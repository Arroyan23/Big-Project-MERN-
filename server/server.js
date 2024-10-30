// halaman untuk konfigurasi server
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");
require("./database/db");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// model mongoose
const mahasiswa = mongoose.model("mahasiswa", {
  poster: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

// fungsi menampilkan data
app.get("/student/18369si", async (req, res) => {
  const response = await mahasiswa.find();
  res.json(response);
});

// routing request untuk menambahkan data
app.post("/add/8753", async (req, res) => {
  try {
    const { poster, nama, email, phone, city } = req.body;
    const newMahasiswa = new mahasiswa({
      poster,
      nama,
      email,
      phone,
      city,
    });
    newMahasiswa.save();
    res.status(201).json(newMahasiswa);
  } catch {
    console.log("gagal memasukkan data ke dalam database");
  }
});

// untuk delete user di collection
app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await mahasiswa.findByIdAndDelete(id);
    res.status(200).json({ message: "Success" });
  } catch {
    console.log("Failed to delete item");
  }
});

// starting server
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});

// halaman untuk konfigurasi server
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
require("./database/db");
const mahasiswa = require("./model/user");
const privateInfo = require("./model/privateinformation");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// model mongoose

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
    // ketika ini dibuat detail juga dibuat
    await newMahasiswa.save();
    const newPrivInformation = new privateInfo({
      nim: null,
      birth: null,
      sex: null,
      adress: null,
      profile: newMahasiswa._id,
    });
    await newPrivInformation.save();
    res.status(201).json(newMahasiswa);
  } catch {
    console.log("gagal memasukkan data ke dalam database");
  }
});

// menjalankan fungsi update
app.put("/update/detail/:id", async (req, res) => {
  // ambil id dari params
  const userIdDetail = req.params.id;
  // ambil semua yang dibutuhkan dari id
  const { nim, birth, sex, adress } = req.body;
  // findOneAndUpdate
  const filterDetailDB = { profile: userIdDetail };
  const updateData = {
    nim,
    birth,
    sex,
    adress,
  };
  try {
    const findDetail = await privateInfo.findOneAndUpdate(
      filterDetailDB,
      updateData,
      { new: true }
    );
    res.json(findDetail);
  } catch {
    console.log("Something when wrong getting update");
  }
});

// halaman untuk menangkap detail
app.get("/detail/:id", async (req, res) => {
  // tangkap id nya menggunakan params
  const userDetailId = req.params.id;
  const findDetailById = await privateInfo.findOne({ profile: userDetailId });
  res.json(findDetailById);
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

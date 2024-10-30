const mongoose = require("mongoose");

// connect menggunakan atlas db

const uri =
  "mongodb+srv://oyeng:hirolucu123@cluster0.1mud1.mongodb.net/adingfo?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// debugging connect ke database

// const mahasiswa = mongoose.model("mahasiswa", {
//   poster: {
//     type: String,
//     required: true,
//   },
//   nama: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
// });

// connect ke database

// const mahasiswa1 = new mahasiswa({
//   poster:
//     "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
//   nama: "Ahmad Syawqi Arroyan",
//   email: "syawqiarroyan@gmail.com",
//   phone: "081218012006",
//   city: "Jakarta",
// });

// mahasiswa1.save().then(() => console.log("Berhasil memasukkan ke database..."));

// BERHASIL DEBUGGING DENGAN MONGO DB

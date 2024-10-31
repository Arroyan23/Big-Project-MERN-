const mongoose = require("mongoose");

// connect menggunakan atlas db

const uri =
  "mongodb+srv://oyeng:hirolucu123@cluster0.1mud1.mongodb.net/adingfo?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// debugging connect ke database

// BERHASIL DEBUGGING DENGAN MONGO DB

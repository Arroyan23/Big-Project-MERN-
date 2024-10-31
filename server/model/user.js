const mongoose = require("mongoose");

// file untuk konfig database user

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

module.exports = mahasiswa;

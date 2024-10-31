// halaman untuk detail pada user

const mongoose = require("mongoose");

// buat schema modelnya

const mahasiswaDetail = mongoose.model("detailmhs", {
  nim: {
    type: String,
  },
  birth: {
    type: String,
  },
  sex: {
    type: String,
  },
  adress: {
    type: String,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mahasiswas",
  },
});

module.exports = mahasiswaDetail;
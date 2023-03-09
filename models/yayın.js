const mongoose = require("mongoose");

module.exports = mongoose.model("jakrino_stat", new mongoose.Schema({
  user: String,
   yayindurum: String,
   sonyayintarih: Number,
   sonmesajtarih: Number,
   sonsestarih: Number,
   toplam: Number,
   toplammesaj: Number,
   toplamses: Number
}));

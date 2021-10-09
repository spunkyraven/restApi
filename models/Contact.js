const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: String,
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});

module.exports = Contact = mongoose.model("contact", contactSchema);

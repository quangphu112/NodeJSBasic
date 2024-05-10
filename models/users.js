const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const userSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: Number,
    // },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    //   required: true,
    },
    email: {
      type: String,
    //   required: true,
    },
    phone: {
      type: String,
    //   required: true,
    },
    birthday: {
      type: Date,
      required: true,
      default: Date.now,
    },
    address: {
      type: String,
    //   required: true,
    },
    userName: {
      type: String,
    //   required: true,
    },
    passWord: {
      type: String,
    //   required: true,
    },
    confirmPassword: {
      type: String,
    //   required: true,
    },
  },
  {
    _id: false,
  }
);

userSchema.plugin(AutoIncrement, {id: 'user_id'});
module.exports = mongoose.model("User", userSchema);

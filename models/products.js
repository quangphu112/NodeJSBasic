const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const productSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: Number,
    // },
    name: {
      type: String,
      required: true,
    },
    decription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
      // required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
    updateDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);
productSchema.plugin(AutoIncrement, { id: "product_id" });
module.exports = mongoose.model("Product", productSchema);

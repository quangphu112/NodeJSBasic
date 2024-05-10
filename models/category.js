const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
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

categorySchema.plugin(AutoIncrement, {id: 'category_id'});
module.exports = mongoose.model("Category", categorySchema);
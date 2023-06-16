const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const secretKey = process.env.KEY;

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, //left and right side of the name if have any spce it trimes
    },
    number: {
        type: String,
        require: true,
        uniqued: true, // it creat the number is unique
        maxlength: 10, //it creat the length of the number only 10
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    conPassword: {
        type: String,
        required: true,
        minlength: 6,
    },
    cart: Array,
});



const userModel = mongoose.model("users", usersSchema);


//book schema
//----------------------------------------------------------------

const bookSchema = new mongoose.Schema({
    category: {
        type: String,
        require: true,
    },
    imgLink: {
        type: String,
        require: true,
    },
    titel: {
        type: String,
        require: true,
    },
    discountPrice: {
        type: Number,
        require: true,
    },
    originalPrice: {
        type: Number,
        require: true,
    },
    rating: {
        type: String,
    },
    about: {

        author: {
            type: String,
        },
        publisher: {
            type: String,
        },
        language: {
            type: String,
        },
        subject: {
            type: String,
        },
        edition: {
            type: String,
        },
        isbn: {
            type: String,
        },
        sku: {
            type: String,
        },
    }

});



const bookModel = mongoose.model("books", bookSchema);


module.exports = { userModel, bookModel };
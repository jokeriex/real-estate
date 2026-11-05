const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    'title': {
        'type': String,
        'required': [true, 'Title is required'],
        'trim': true
    },
    'description' :{
        'type': String,
        'required': [true, 'Description is required'],
        'trim': true
    },
    'price': {
        'type': Number,
        'required': [true, 'Price is required'],
        'min': [0, 'Price must be a positive number']
    },
    'city': {
        'type': String,
        'required': [true, 'City is required'],
        'trim': true
    },
    'type': {
        'type': String,
        'required': [true, 'Type is required'],
        'enum': ['apartment', 'store', 'villa']
    },
    'area': {
        'type': Number,
        'required': [true, 'Area is required'],
        'min': [0, 'Area must be a positive number']
    },
    'bedrooms': {
        'type': Number,
        'required': [true, 'Number of bedrooms is required'],
        'min': [0, 'Number of bedrooms must be a positive number']
    },
}, {timestamps: true});

module.exports = mongoose.model('Property', propertySchema);
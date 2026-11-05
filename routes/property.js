const express = require('express')
const { getAllProperties, getProperty, createProperty, editProperty, deleteProperty } = require('../controllers/property')

const router = express.Router()

router.route('/')
    .get(
        getAllProperties
    )
    .post(
        createProperty
    )

router.route('/:id')
    .get(
        getProperty
    )
    .put(
        editProperty
    )
    .delete(
        deleteProperty
    )

module.exports = router
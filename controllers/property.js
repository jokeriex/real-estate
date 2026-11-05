const Property = require('../models/properties');

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find()
        res.status(200).json(properties)

    }
    catch (error) {
        res.status(500).json({ message: 'error getting properties', error: error.message })
        console.error(error)
    }
}

const getProperty = async (req, res) => {
    const { id } = req.params
    try {
        const property = await Property.findById(id)
        if (!property) { return res.status(404).json({ message: 'no such a property' }) }
        res.status(200).json(property)
    }
    catch (error) {
        if (error.name === 'CastError') { return res.status(400).json({ message: 'error getting property' }) }
        res.status(500).json({ message: 'error' })
    }
}

const createProperty = async (req, res) => {
    try {
        const { title, description, price, city, type, area, bedrooms } = req.body
        const property = await Property.create({ title, description, price, city, type, area, bedrooms })
        res.status(201).json(property)
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json(error.message)
        }
        res.status(500).json({ message: error.message })
    }
}

const editProperty = async (req, res) => {
    const { id } = req.params
    try {
        const { title, description, price, city, type, area, bedrooms } = req.body
        const property = await Property.findByIdAndUpdate(
            id,
            {
                title,
                description,
                price,
                area,
                city,
                type,
                bedrooms
            },
            {
                new: true,
                runValidators: true
            })
        if (!property) { return res.status(404).json({ message: "no such property" }) }
        res.status(200).json({ message: "The new property is", property })
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message })
        }
        if (error.name === 'CastError') { return res.status(400).json({ message: "Invalid property ID" }) }
        res.status(500).json({ message: error.message })
    }
}

const deleteProperty = async (req, res) => {
    const { id } = req.params
    try {
        const property = await Property.findByIdAndDelete(id)
        if (!property) { return res.status(404).json({ message: "no such a property" }) }
        res.status(200).json({ message: "The property has been deleted" })
    } catch (error) {
        if (error.name === 'CastError') { return res.status(400).json({ message: "Invalid property ID" }) }
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllProperties,
    getProperty,
    createProperty,
    editProperty,
    deleteProperty
}
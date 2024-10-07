const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // reference to the User model
});

module.exports = mongoose.model('Product', productSchema);

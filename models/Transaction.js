const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // reference to the Product model
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // reference to the User model
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);

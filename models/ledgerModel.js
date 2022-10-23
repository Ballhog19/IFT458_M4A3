const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: false,
            unique: true
        },
        paymentAmount: {
            type: Number,
            required: true
        },
        interest: {
            type: Number,
            required: [true, 'Loan must have an interest value'],
            unique: false,
            min: [0, 'Interest rate must be non-negative']
        },
        principal: {
            type: Number,
            required: true
        },
        createdDate: {
            type: Date,
            default: Date.now()
        },
        modifiedDate: {
            type: Date,
            default: Date.now()
        },
        isDeleted: {
            type: Boolean
        }
    });

const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;

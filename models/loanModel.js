const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: false,
            unique: true
        },
        loanType: {
            type: String,
            required: [true, 'Loan Type is required'],
            unique: false,
            trim: true
        },
        loanNumber: {
            type: Number,
            required: [true, 'Loan Number is required'],
            unique: true,
            min: [1000, 'Loan Number must be a 4 digit number'],
            max: [9999, 'Loan Number must be a 4 digit number']
        },
        amount: {
            type: Number,
            required: [true, 'Loan must have a value'],
            unique: false,
            min: [1, 'Loan must be at least $1']
        },
        interestRate: {
            type: Number,
            required: [true, 'Loan must have an interest value'],
            unique: false,
            min: [0, 'Interest rate must be non-negative']
        },
        loanTerm: {
            type: Number,
            required: [true, 'Loan Term is required'],
            unique: false
        },
        startDate: {
            type: Date,
            required: true
        },
        createdDate: {
            type: Date,
            required: true,
            default: Date.now().toString()
        },
        modifiedDate: {
            type: Date,
            required: true,
            default: Date.now().toString()
        },
        isDeleted: {
            type: Boolean,
            required: true,
            default: "false"
        }
    });

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
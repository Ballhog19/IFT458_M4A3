const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: false,
            unique: true
        },
        name: {
            type: String,
            required: [true, 'Customer name must be provided'],
            unique: false,
            trim: true,
            maxLength: [40, 'Name must be less than 40 characters'],
            minLength: [5, 'Name must be at least 5 characters']
        },
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            unique: false,
            trim: true
        },
        middleName: {
            type: String,
            required: false,
            unique: false,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            maxLength: [50, 'Last Name must be less than 50 characters']
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: false,
            trim: true
        },
        createdDate: {
            type: Date,
            required: true,
            default: Date.now()
        },
        modifiedDate: {
            type: Date,
            required: true,
            default: Date.now()
        },
        isDeleted: {
            type: Boolean,
            required: true,
            default: "false"
        }
    });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

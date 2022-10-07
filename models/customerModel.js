const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        // id: {
        //     type: Number,
        //     required: true,
        //     unique: true,
        //     index: true
        // },
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
            trim: true,
            minLength: [2, 'First name must be at least 2 characters']
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
            maxLength: [20, 'Last Name must be less than 20 characters']
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

customerSchema.index({id: 1});
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
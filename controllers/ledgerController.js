const Ledger = require('./../models/ledgerModel');
const APIFeatures = require('./../dbManager/loanDbContext');
const Customer = require("../models/customerModel");

exports.getAllLedgers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Ledger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const ledgers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: ledgers.length,
      data: {
        ledgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLedger = async (req, res) => {
  try {
    const ledger = await Ledger.findById(req.params.id);
    //const loan = await Loan.findOne({ loanId: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLedger = async  (req, res) => {
  try {
    // const newCourse = new Course({})
    // newCourse.save()

    const newLedger = await Ledger.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loan: newLedger
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createMany = async (req, res) => {
  try {
    const newCustomers = await Ledger.insertMany(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        results: newCustomers
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

exports.updateLedger = async (req, res) => {
  try {
    const ledger = await Ledger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLedger = async (req, res) => {
  try {
    await Ledger.findByIdAndDelete(req.params.id).exec();

    res.status(204).json({
      status: 'success',
      data: "Successfully Deleted Ledger"
    });
  } catch (err) {
    res.status(404).json({
      params: req.params.id,
      status: 'fail',
      message: err
    });
  }
};

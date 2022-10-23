const Customer = require('./../models/customerModel');
const APIFeatures = require('./../dBManager/loanDbContext');

exports.getAllCustomers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    //const loan = await Loan.findOne({ loanId: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createCustomer = async  (req, res) => {
  try {
    // const newCourse = new Course({})
    // newCourse.save()

    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loan: newCustomer
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
        const newCustomers = await Customer.insertMany(req.body);

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

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id).exec();

    res.status(204).json({
      status: 'success',
      data: "Successfully Deleted Customer"
    });
  } catch (err) {
    res.status(404).json({
      params: req.params.id,
      status: 'fail',
      message: err
    });
  }
};

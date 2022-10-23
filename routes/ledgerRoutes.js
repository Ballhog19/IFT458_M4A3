const express = require('express');
const ledgerController = require('../controllers/ledgerController');
const router = express.Router();

router
    .route('/')
    .get(ledgerController.getAllLedgers)
    .post(ledgerController.createLedger);

router
    .route('/multi')
    .post(ledgerController.createMany);

router
    .route('/:id')
    .get(ledgerController.getLedger)
    .patch(ledgerController.updateLedger)
    .delete(ledgerController.deleteLedger);

module.exports = router;

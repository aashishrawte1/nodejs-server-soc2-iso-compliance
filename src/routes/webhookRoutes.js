const express = require('express');
const validateWebhook = require('../middlewares/validateWebhook');
const router = express.Router();

router.post('/webhook', validateWebhook, (req, res) => {
    console.log('webhook received', req.body);
    // validate and handle webhook payload
    res.status(200).json({ message: ['webhook processed successfully'] });
});

module.exports = router;
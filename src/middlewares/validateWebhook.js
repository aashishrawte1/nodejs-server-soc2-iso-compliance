const crypto = require('crypto');
require('dotenv').config();

const validateWebhook = ( req, res, next ) => {
    const signature = req.headers('x-webhook-signature');
    const payload = JSON.stringify(req.body);
    const secret = process.env.WEBHOOK_SECRET;

    const hash = crypto
        .createHash('sha256', secret)
        .update(payload)
        .digest('hex');

    if(hash !== signature) {
        return res.status(403).json({ message: 'Forbidden: Invalid signature' });
    }

    next();
}

module.exports = validateWebhook;
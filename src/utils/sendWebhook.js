const axios = require('axios');
const crypto = require('crypto');
require('dotenv').config();

const sendWebhook = async (url, payload) => {
    const secret = process.env.WEBHOOK_SECRET;
    const signature = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(payload))
        .digest('hex');

    const headers = {
        'Content-Type': 'application/json',
        'X-Webhook-Signature': signature
    };

    try {
        const response = await axios.post(url, payload, { headers });
        return response.data;
    } catch (error) {
        console.error('Error sending webhook', error);
        throw error;
    }
}

module.exports = sendWebhook;
const sendWebhook = require('../utils/sendWebhook');

const triggerWebhook = async (req, res) => {
    const webhookurl = 'https://jlabs-other-server.com/webhook';
    const payload = {
        event: 'user_registered',
        user: req.body
    };

    try {
        const response = await sendWebhook(webhookurl, payload);
        res.status(200).json({ message: 'webhook triggered successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Failed  to trigger webhook', error: error.message });
    }
}

module.exports = { triggerWebhook };
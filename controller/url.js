const Url = require('../model/url');
const ids = require('short-id');
async function handleCreateShortUrl(req, res) {
    const shortId = ids.generate();
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ Status: 'url is required' })
    }
    Url.create({
        shortId: shortId,
        redirectUrl: body.url,
        vistitedHistory: [],
        createdBy:req.user._id,
    });
    return res.render('home',{shortUrl: shortId})

}

async function handleRedirect(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                vistitedHistory: {
                    timeStamp:Date.now()
                }
            } 
        });
    res.redirect(entry.redirectUrl)
}
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await Url.findOne({ shortId }) 
    return res.json(
        {
            totalClicks: result.vistitedHistory.length,
            Analytics: result.vistitedHistory
        })
}

module.exports = { handleCreateShortUrl, handleRedirect, handleGetAnalytics }
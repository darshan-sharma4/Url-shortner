const express =  require('express')

const router = express.Router();
const {handleCreateShortUrl,handleRedirect,handleGetAnalytics} = require('../controller/url')

router.post('/',handleCreateShortUrl)
router.get('/:shortId',handleRedirect)
router.get('/analytics/:shortId',handleGetAnalytics)


module.exports= router;
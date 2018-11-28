var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('index', {
        title: '爱回收首页'
    })
})

module.exports = router;
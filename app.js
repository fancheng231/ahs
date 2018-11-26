var express = require('express');
var swig = require('swig');
var app = express()
var router = express.Router()

app.set('view cache', false)
app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', swig.renderFile)

app.use('/static',express.static('public'))

router.get('/', function (req, res, next) {
    res.render('index', {
        title: '爱回收首页'
    })
})

app.use('/', router)

app.listen(8086, function () {
    console.log('服务启动，端口是8086')
})

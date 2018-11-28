var express = require('express');
var swig = require('swig');
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1000
}))

var router = require('./router')
var user = require('./router/user')

app.use('/', router)
app.use('/user', user)

swig.setDefaults({cache: false})
app.set('view cache', false)
app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', swig.renderFile)

app.use('/static', express.static('public'))

app.listen(8086, function () {
    console.log('服务启动，端口是8086')
})

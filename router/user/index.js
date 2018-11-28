var express = require('express')
var router = express.Router()
var fs = require('fs')

router.get('/login', function (req, res, next) {
    res.render('user/login', {
        title: '登录页'
    })
})

router.get('/reg', function (req, res, next) {
    res.render('user/reg', {
        title: '注册页'
    })
})

router.get('/usercenter', function (req, res, next) {
    res.render('user/usercenter', {
        title: '用户中心'
    })
})

router.post('/login', function (req, res, next) {
    var body = req.body;

    fs.readFile('./mock/user.json', function (err, data) {
        if (err) {
            return err
        }
        var userData = JSON.parse(data.toString())
        for (var i = 0; i < userData.length; i++) {
            if (body.username === userData[i].username && body.userpassword === userData[i].userpassword) {
                return res.redirect('/');
            }
        }
        res.redirect('/user/login')
    })
})

router.post('/reg', function (req, res, next) {
    var body = req.body;
    fs.readFile('./mock/user.json', function (err, data) {
        if (err) {
            return err
        }
        var userData = JSON.parse(data.toString())
        for (var i = 0; i < userData.length; i++) {
            if (userData[i]['username'] === body.username) {
                return res.redirect('/user/reg');
            }
        }
        userData.push(body);
        fs.writeFile('./mock/user.json', JSON.stringify(userData), function () {
            return res.redirect('/user/login');
        })
    })
})

module.exports = router;
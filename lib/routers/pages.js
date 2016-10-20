var router = require('express').Router();

router.route('/one')
    .get(function(req, res, next) {
        // 渲染模版
        res.render('one');
    });

module.exports = router;

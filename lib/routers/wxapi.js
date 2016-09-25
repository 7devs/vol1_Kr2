var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
      explicitArray:false
    }),function(req, res, next){
       var data = req.body.xml;
       var content = data.content;
       switch (cotent) {
         case '1':
           content='我是1'；
           break;
         case '2':
           content='我是2'；
           break;
         case '3':
           content='我是3'；
           break;
         case '4':
           content='我是4'；
           break;
         case '5':
           content='我是5'；
           break;
         case '6':
           content='我是6'；
           break;
         case '7':
           content='我是7'；
           break;
         case '8':
           content='我是8'；
           break;
         case '9':
           content='我是9'；
           break;

         default:
           content='hello!'；

       }
       // TODO: xxxx
       res.append('Content-Type', 'text/xml');
       res.send(xml({
         xml:[
           {ToUserName: {_cdata: data.fromusername}},
           {FromUserName: {_cdata: data.tousername}},
           {CreateTime: +new Date()},
           {MsgType: {_cdata:'text'}},
           {Content: {_cdata:content}}
         ]
       }));
    })
    .get(function(req, res, next){
       var str = req.query.echostr
       res.send(str);
    });


module.exports = router;

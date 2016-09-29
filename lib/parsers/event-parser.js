var conf = require('../config.js');
var wechat = require('../wechat.js')
module.exports = function(data){
  var event = data.event.toLowerCase(),
      eventKey = data.eventkey,
       reContent;
  switch (event) {
    case 'click':
       switch (eventKey) {
         case 'menu1':
               reContent = 'menu1 clicked.';
               break;
         case 'menu2':
               reContent = 'menu2 clicked.';
               wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
                 content: {
                   color: '#ff0000',
                   value: '测试内容'
                 }
               } );
               break;
         default:
               reContent = '...';
               break;

       }

      break;
    default:
        reContent = event;
        break;

  }
  return reContent;
}

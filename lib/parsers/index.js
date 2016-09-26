module.exports = function(date){
      var msgType = data.msgtype;
      var reContent;

      switch(msgType){
        case 'text':
             return require('./text-parser.js')(data.content);
          break;
        case 'voice':
             return require('./voice-parser.js')(data.recognition);
          break;
        case 'video':
        case 'location':
        case 'shortvideo':
          break;
        default:reContent = 'I have no idea.'
      }

  return reContent
}

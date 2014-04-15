
exports.index = function(req, res){
  res.render('index');
};

exports.requestPage = function(req, res){
 
  var data = require('./request_data').data();
  res.render('request', {
    requests: data
  });
};

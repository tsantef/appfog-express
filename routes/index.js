
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'AppFog', appfog: req.appfog });
};
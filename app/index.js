module.exports = function(app, db) {
  app.get('/',function(req, res) {
       res.sendFile(process.cwd() + '/public/index.html');
    });

    
}
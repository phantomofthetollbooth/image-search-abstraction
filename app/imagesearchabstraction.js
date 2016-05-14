module.exports = function(app,db){

var searches = db.collection('searches');

var request = require('request');

app.get('/search/:query*',getImgur);

app.get('/latest', getLatest);



function getImgur(req,res){
	  var queryUrl = "https://api.imgur.com/3/gallery/search/time";
    if (req.query.offset){
      queryUrl += "/" + req.query.offset;
    }
    queryUrl += "?q_all=" + req.params.query;
    
    var requestOptions = {
      url: queryUrl,
      headers: {
        'Authorization': "Client-Id 47640773803e259"
      }
    }
request(requestOptions, function (error, response, body) {
  if (error) {
	  console.log(error)
  }else{
	 res.json(JSON.parse(body).data;
	
  }
})
}	



/*searches.insert({query: req.params.query, time: Date.now()}, function(err, result) {
      if (err) {throw err};
      return;
    });*/




function getLatest(app,db){
	
	
}










}
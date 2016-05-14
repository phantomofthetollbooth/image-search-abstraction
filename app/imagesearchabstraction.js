module.exports = function(app,db){

var searches = db.collection('searches');

var request = require('request');

app.get('/search/:query*',search);

app.get('/latest', getLatest);

function search(app,db){

var getImgur = function(req,res){
	  var queryUrl = "https://api.imgur.com/3/gallery/search/time";
    if (req.query.offset){
      queryUrl += "/" + req.query.offset;
    }
    queryUrl += "?q_all=" + req.params.query;
    console.log(queryUrl);
    var requestOptions = {
      url: queryUrl,
      headers: {
        'Authorization': "Client-Id 47640773803e259"
      }
    }
}	

request(getImgur, function (error, response, body) {
  if (error) {
	  console.log(error)
  }else{
    console.log(body)  
  }
})

/*searches.insert({query: req.params.query, time: Date.now()}, function(err, result) {
      if (err) {throw err};
      return;
    });*/


}

function getLatest(app,db){
	
	
}










}
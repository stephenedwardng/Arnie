// Arnie arnieQuotes

var QuoteView = require('./views/quoteView');

var app = function(){
  var url = "http://localhost:3000/arnieQuotes";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status != 200) return;
  var arnieQuotestring = this.responseText;
  var arnieQuotes = JSON.parse(arnieQuotestring);
  var ui = new QuoteView(arnieQuotes);
}

window.addEventListener('load', app);
var QuoteView = function(arnieQuotes){
  this.render(arnieQuotes);
}

QuoteView.prototype = {
  render: function(arnieQuotes){
    
    console.log(arnieQuotes);
    arnieQuotes.forEach( function(quote){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('arnieQuotes');
      text.innerText = quote.name + ": " + '"' + quote.quote + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = QuoteView;
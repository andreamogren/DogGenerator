/* $.ajax({

  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  type: 'GET',

  // The URL to make the request to.
  url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+dog',

  // The 'contentType' property sets the 'Content-Type' header.
  // The JQuery default for this property is
  // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
  // a preflight. If you set this value to anything other than
  // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
  // you will trigger a preflight request.
  contentType: 'gifs',

  xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
    withCredentials: false
  },

  headers: {
    // Set any custom headers here.
    // If you set any non-simple headers, your server must include these
    // headers in the 'Access-Control-Allow-Headers' response header.
  },

  success: function() {
    // Here's where you handle a successful response.
  },

  error: function() {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
  }
});
*/

/*function otherName()
{
var input = document.getElementById("userInput"); // $("#userInput") - samma sak
alert(input);
}

var sender = document.getElementById("sub");

sender.addEventListener("click", setInputText, false);
var rand = Math.floor(Math.random()*giphy.data.length) //random array

var inpTxt = rand;

function setInputText (){
    inpTxt = document.getElementById("prompt").value;
    //document.getElementById("usertxt").innerHTML = inpTxt;
    getData();
}; //get name
*/


/*$(document).ready(function(){
    getData();

});

function getData() {
  // do jQuery
   var giphyData;
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog', function(response) {
   getData = response.results;
   console.log(inpTxt);
   var query = inpTxt; //replace this with input if you get it to work.
   var found;
   for (var i = 0; i <= giphyData.length; i++) {
    if (giphyData[i] && giphyData[i].name.indexOf(query) > -1) {
      found = giphyData[i];
    }
   }


   console.log(giphyData);

  })
	});
});*/

var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+dog");
xhr.done(function(data) { console.log("success got data", data); });

var postGIF = xhr.data.image_url

document.getElementById('imageContainer').innerHTML = '<img src="'+postGIF+'" border=0>';

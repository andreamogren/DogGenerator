document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("randomDog").onclick = function() {
    request = new XMLHttpRequest;
    request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+dog', true);
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 400) {
          data = JSON.parse(request.responseText).data.image_url;
          console.log(data);
          document.getElementById("imageContainer").innerHTML = '<center><img src = "' + data + '"  title="GIF via Giphy"></center>';
        } else {
          console.log('reached giphy, but API returned an error');
        }
      }
    }
    request.onerror = function() {
      console.log('connection error');
    };

    request.send();
  };

});

document.getElementById("randomDog").onclick = function () {
  var dogData = new Array()

  dogData[0] = "Dogg/1BJ9F4Y.jpg"
  dogData[1] = "Dogg/dKN9W2d.jpg"
  dogData[2] = "Dogg/tumblr_o5ylo4Co0J1uae2w5o1_1280.jpg"
  dogData[3] = "Dogg/Corgi.png"
  dogData[4] = "Dogg/fc66726153192e36bb9004406a40d6d1.jpg"
  dogData[5] = "Dogg/Go8XrPg.jpg"
  dogData[6] = "Dogg/mf7xVvi.jpg"
  dogData[7] = "Dogg/mnuBaTa.jpg"

  var generateDog = Math.floor(Math.random()*dogData.length);
  document.getElementById('imageContainer').innerHTML = '<img src="'+dogData[generateDog]+'" border=0>';
};

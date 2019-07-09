$(document).ready(function(){

var APIKey = "iujBp7bl3MhknRg9wmTT7laW3Zd9ty2eWIocBbKX";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKey;
     

axios.get(queryURL)
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      var data = response.data
      // Log the resulting object
      console.log(response.data);

      // Transfer content to HTML
      $(".date").html("<h3> Date:" + data.date + "</h3>");
      $(".explanation").text("Explanation: " + data.explanation);
      $(".title").text("Title: " + data.title);
    
    var imgURL = data.url;
    var image = $("<img>").attr("src", imgURL);
    $(".url-displayed").append(image);
      

      // Log the data in the console as well
      console.log("<h3> Date:" + data.date + "</h3>");
      console.log("Explanation: " + data.explanation);
      console.log("Title: " + data.title);
      console.log('<img src="'+ data.url +'">');

      
    });
    

})


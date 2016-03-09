$(document).ready(function() {

  var titles = ["What's orange and sounds like a parrot?", "What sea critter attended the Oscars?"]; // array for possible titles
  var dice; // variable in which our randomly generated number will be contained

  function roll() { // standalone function for genreating a random number
    dice = Math.floor(Math.random() * titles.length); // generating a random number
  }
  
  roll(); // executes the roll function above as soon as the page loads

  document.getElementById('test').innerHTML = titles[dice]; // uses random number to place a random title from the array above.
  

	// $(".button").click(function() {
	// $("body").animate({scrollTop: $("#one").offset().top}, 800);
	// });

  // $(".button2").click(function() {
  // $("body").animate({scrollTop: $("#start").offset().top}, 1500);
  // });

   $("#whale").click(function() {
   $("#whale").animate({left: "+=400px"}, 2000);
    });

    slide2 ();
  function slide2() {
    $("#yellowfish").animate({left: "100px"}, 8300);
    $("#yellowfish2").animate({left: "50px"}, 7500, slide);
  }

    slide ();
  function slide() {
    $("#arrow").animate({left: "100px"}, 1300);
    $("#arrow").animate({left: "50px"}, 1300, slide);
  }

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	$('#scene').parallax({
  		calibrateX: false,
  		calibrateY: false,
  		invertX: false,
  		invertY: true,
  		limitX: false,
  		limitY: false,
  		scalarX: 20,   // important
  		scalarY: 80,  // important
  		frictionX: 0.5,
  		frictionY: 0.8,
  		originX: 0.0,
  		originY: 1.0
	});

  var joke = ["carrot.svg","starfish.svg"]; // array for images
  var words = ["A Carrot!", "A Starfish!"]; // array for text

  $("#begin").click(function() {
    $('html, body').animate({scrollTop: $("#one").offset().top}, 1500); // autoscroll to bottom

  });

  $('#reset').click(function() {
    $('body').animate({scrollTop: 0}, 2400); // autoscroll back to top

    document.getElementById('text').innerHTML = ""; // clears content in paragraph element
      $('#pic').css({"background-image" : "none"});  //clears background image of div
      roll(); // generates a new random number 
      document.getElementById('test').innerHTML = titles[dice]; // uses new random number to refresh title
  });

  $("#trunk").click(function() {
      document.getElementById('text').innerHTML = words[dice]; // uses randomly generated number to select a text and place it in the paragraph element
      $('#pic').css({"background-image" : "url(images/" + joke[dice] + ")"}); // uses the same random number to select a picture and place it in the div as background image
  });
	
});
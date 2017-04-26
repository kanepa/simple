// angular.bind(self, function)

		var element = document.getElementById("FadeBox");
var duration = 3000;  /* fade duration in millisecond */
var hidtime = 2000; /* time to stay hidden */
var showtime = 2000; /* time to stay visible */

function SetOpa(Opa) {
  element.style.opacity = Opa;
  element.style.MozOpacity = Opa;
  element.style.KhtmlOpacity = Opa;
  element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
}

function fadeOut() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + (1 - i) +")", i * duration);
  }
   setTimeout("FadeIn()", (duration + hidtime));
}
function FadeIn() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + i +")", i * duration);
  }
   setTimeout("fadeOut()", (duration + showtime));
}


		var images = document.getElementById("thumbs").getElementsByTagName("img");

		for(var i = 0; i < images.length; i++) {
			images[i].onmouseover = function() {
				this.style.cursor = 'hand';
				this.style.borderColor = 'red';
			}
			images[i].onmouseout = function() {
				this.style.cursor = 'pointer';
				this.style.borderColor = 'grey';

		}
	}

	function changeImage(event) {
		event = event || window.event;

		var targetElement = event.target || event.srcElement;

		if(targetElement.tagName == "IMG")
		{

			document.getElementById("mainImage").src = targetElement.getAttribute("src");
		}
	}

	function changeColourOver()
	{
		var control = document.getElementById("colour");
		control.style.background = 'red';
		control.style.color = 'yellow'
	}

	function changeColourOut()
	{
		var control = document.getElementById("colour");
		control.style.background = 'black';
		control.style.color = 'white'
	}


	function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


var countDownDate = new Date("Aug 4, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Were on holidays";
    }
}, 1000);


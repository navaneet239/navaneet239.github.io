function topnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}


// Remove the background color of all tablinks/buttons
tablinks = document.getElementsByClassName("header");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
}

// Show the specific tab content
document.getElementById(pageName).style.display = "block";

document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}


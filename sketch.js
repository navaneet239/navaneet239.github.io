function topnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function topnavFunction(){
  document.getElementById("myTopnav").style.visibility = "visible";
  document.getElementById("myTopnav").style.opacity = "1";

  document.getElementById("ContentHP").style.visibility = "visible";
  document.getElementById("ContentHP").style.opacity = "1";
  
  document.getElementById("myBlank").style.visibility = "hidden";
  document.getElementById("myBlank").style.opacity = "0";

  document.getElementById("loading").style.visibility = "hidden";
  document.getElementById("loading").style.opacity = "0";

}

function ShowInfoMain(){
  document.getElementById("myInfoMain").style.opacity = "1";

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


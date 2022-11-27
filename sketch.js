function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  document.getElementById("navbar").style.padding = "17px 10px";
  document.getElementById("navbar").style.top = "0.5%";
  document.getElementById("navbar").style.scale = "0.95";
  document.getElementById("ShowSB").style.scale = "0.75";

  document.getElementById("logo").style.fontSize = "25px";
} else {
  document.getElementById("navbar").style.padding = "30px 10px";
  document.getElementById("navbar").style.top = "2%";
  document.getElementById("navbar").style.scale = "1";
  document.getElementById("ShowSB").style.scale = "1";

  document.getElementById("logo").style.fontSize = "35px";
}
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.visibility = "visible";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.visibility = "hidden";
}

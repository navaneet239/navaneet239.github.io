var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

const blob = document.getElementById("blob");

 document.body.onpointermove = event => {
    const { clientX, clientY } = event; 

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    },{ duration: 3000, fill: "forwards" })
}

function load(){

    setTimeout(() => {
        document.getElementById("logon").style.opacity= '0';
    }, 1750);

    setTimeout(() => {
        document.getElementById("logon").style.display= 'none';
        document.getElementById('main').style.display= 'block';
    }, 2500);

    setTimeout(() => {
        document.getElementsByClassName("header")[0].style.opacity= '1';
        document.body.style.overflow= "auto";
    }, 3000);
}

var ham = document.getElementById("ham-menu");
var hamb1 = document.getElementById("b1");
var hamb2 = document.getElementById("b2");
var navRight = document.getElementById("nav-menu");

ham.addEventListener("click", ()=>{
  if (hamb2.style.width == '44px') {
      hamb1.style.webkitTransform= 'translateY(0px) rotate(0deg)'
      hamb1.style.transform= 'translateY(0px) rotate(0deg)'
      hamb2.style.webkitTransform= 'rotate(0deg)'
      hamb2.style.transform= 'rotate(0deg)'
      hamb2.style.width= '34px'
      hamb2.style.translate= '10px 0'
      navRight.style.right = '-100%'
  }
  else{
      hamb1.style.webkitTransform= 'translateY(15px) rotate(45deg)'
      hamb2.style.webkitTransform= 'rotate(-45deg)'
      hamb1.style.transform= 'translateY(15px) rotate(45deg)'
      hamb2.style.transform= 'rotate(-45deg)'
      hamb2.style.width= '44px'
      hamb2.style.translate= '0 0'
      navRight.style.right = '1%'
  }
})

function navMobile(){
  if (hamb2.style.width == '44px') {
    hamb1.style.webkitTransform= 'translateY(0px) rotate(0deg)'
    hamb2.style.webkitTransform= 'rotate(0deg)'
    hamb1.style.transform= 'translateY(0px) rotate(0deg)'
    hamb2.style.transform= 'rotate(0deg)'
    hamb2.style.width= '34px'
    hamb2.style.translate= '10px 0'
    navRight.style.right = '-100%'
}
else{
    hamb1.style.webkitTransform= 'translateY(15px) rotate(45deg)'
    hamb2.style.webkitTransform= 'rotate(-45deg)'
    hamb1.style.transform= 'translateY(15px) rotate(45deg)'
    hamb2.style.transform= 'rotate(-45deg)'
    hamb2.style.width= '44px'
    hamb2.style.translate= '0 0'
    navRight.style.right = '1%'
}
}

function showAboutMore(){
    document.getElementById('about-moreBtn').style.transition= "all 0.75s";
    document.getElementById('about-moreBtn').style.opacity= "1";
    document.getElementById('about-moreBtn').style.webkitTransform= "translate(-50%) scale(1.1)";
    document.getElementById('about-moreBtn').style.transform= "translate(-50%) scale(1.1)";
    document.getElementById('about-moreBtn').style.marginTop= "-6px";
}

function hideAboutMore(){
    document.getElementById('about-moreBtn').style.transition= "all 0.2s";
    document.getElementById('about-moreBtn').style.opacity= "0";
    document.getElementById('about-moreBtn').style.webkitTransform= "translate(-50%) scale(1)";
    document.getElementById('about-moreBtn').style.transform= "translate(-50%) scale(1)";
    document.getElementById('about-moreBtn').style.marginTop= "-25px";
}

function showAboutMMore(){
    document.getElementById('about-tm').style.paddingBottom= "60px";
    document.getElementById('aboutM-moreBtn').style.transition= "all 0.75s";
    document.getElementById('about-expand').style.opacity= "0";
    document.getElementById('aboutM-moreBtn').style.opacity= "1";
    document.getElementById('aboutM-moreBtn').style.webkitTransform= "scale(1.1)";
    document.getElementById('aboutM-moreBtn').style.transform= "scale(1.1)";
    document.getElementById('aboutM-moreBtn').style.marginTop= "-6px";
}

function hideAboutMMore(){
    document.getElementById('about-tm').style.paddingBottom= "65px";
    document.getElementById('aboutM-moreBtn').style.transition= "all 0.2s";
    document.getElementById('about-expand').style.opacity= "1";
    document.getElementById('aboutM-moreBtn').style.opacity= "0";
    document.getElementById('aboutM-moreBtn').style.webkitTransform= "scale(1)";
    document.getElementById('aboutM-moreBtn').style.transform= "scale(1)";
    document.getElementById('aboutM-moreBtn').style.marginTop= "-25px";
}

var about = document.getElementById('about-tm');
function aboutMoreDisplay(){
  console.log();
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


var burgerMenuVisible=false;
var onAppMenu=false;

function popupMenu() {
  if (!burgerMenuVisible) {
    $(".appMenu").show();
    $(".appMenu").css("z-index", "99999");
    $(".box").css("opacity", "0.3");
  } else {
    $(".appMenu").hide();
    $(".appMenu").css("z-index", "99992");
    $(".box").css("opacity", "1.0");
  }
  burgerMenuVisible=!burgerMenuVisible;
}

function hideMenu() {
  $(".appMenu").hide();
  burgerMenuVisible=false;
  $(".box").css("opacity", "1.0");
}

$("#burgerMenuIco").on("mouseover", function() {
    onAppMenu = true;
});

$("#burgerMenuIco").on("mouseout", function() {
    onAppMenu = false;
});

$(".appMenu").on("mouseover", function() {
    onAppMenu = true;
});

$(".appMenu").on("mouseout", function() {
    onAppMenu = false;
});

$("body").on("click", function() {
  if (!onAppMenu) {
    hideMenu();
  }
});

function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function setFooterPos() {
  if (document.getElementById("footerCont")) {
    tollerance = 16;
    $("#footerCont").css("top", parseInt( window.innerHeight - $("#footerCont").height() - tollerance ) + "px");
    $("#footer").css("top", parseInt( window.innerHeight - $("#footer").height() - tollerance ) + "px");
  }
}

function setLayout() {
  winWidth = parseInt(window.innerWidth);
  if (winWidth < 600) {
    $("#invite-text").css("font-size", "13px");
  } else if (winWidth > 1300) {
    $("#invite-text").css("font-size", "15px");
  } else {
    $("#invite-text").css("font-size", "1.1vw");
  }
}

function setLogo()
{
  d=new Date();
  h=d.getHours();
  if (h>=9 && h<=18) {
    $("#logo-place").css("background-image", "url('res/sun.png')");
  } else {  
    $("#logo-place").css("background-image", "url('res/moon.png')");
  }
} 

window.addEventListener("load", function() {

  $("div.appMenu").load("https://appmenu.5mode.com/?v="+ rnd(50000, 99999));

  setTimeout("setFooterPos()", 1000);

  setLayout();

  setLogo();

}, true);

window.addEventListener("resize", function() {

  hideMenu();

  setTimeout("setFooterPos()", 1000);

  setTimeout("setLayout()", 1000);
}, true);

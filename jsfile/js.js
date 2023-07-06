let search = document.querySelector(".search");
let boxSearch = document.querySelector(".search-box");

let droplist = document.querySelector(".droplist");
let listLink = document.querySelector(".nav-bar");
let Toggle = false;
let flag = false;
droplist.onclick = function () {
  /*****************display nav-bar & boxSearch****************/
  listLink.classList.toggle("navBar");
  /*****************display nav-bar & boxSearch****************/
  let s1 = document.querySelector(".s1");
  let s2 = document.querySelector(".s2");
  let s3 = document.querySelector(".s3");

  if (!flag) {
    s1.classList.add("goDown");
    s2.classList.add("hiddenS2");
    s3.classList.add("goUp");
    ///////////////////////////////
    s1.classList.remove("backUp");
    s2.classList.remove("blocks");
    s3.classList.remove("backDown");
    flag = true;
  } else {
    s1.classList.remove("goDown");
    s2.classList.remove("hiddenS2");
    s3.classList.remove("goUp");
    ///////////////////////
    s1.classList.add("backUp");
    s2.classList.add("blocks");
    s3.classList.add("backDown");
    flag = false;
  }
};
/////////////////////////////////////////////////
let count = 1;
function sliderImg() {
  let slide = (document.getElementById("radio" + count).checked = true);
  count++;
  if (count > 3) {
    count = 1;
  }
}
let query = window.matchMedia("(min-width:790px)");
if (query.matches) {
  setInterval(sliderImg, 2000);
}
window.onload = function () {
  let green2 = document.querySelector(".green2");
  let green = document.querySelector(".green");
  let lettuce = document.querySelector(".lettuce");
  let tomato = document.querySelector(".tomato");
  let cheli = document.querySelector(".cheli");
  let cheli2 = document.querySelector(".cheli2");
  let h2Text = document.querySelector(".h2Text");
  let pText = document.querySelector(".pText");

  let li1 = document.querySelector(".li1");
  let li2 = document.querySelector(".li2");
  let li3 = document.querySelector(".li3");

  li1.classList.add("animationRightLi1");
  li2.classList.add("animationRightLi2");
  li3.classList.add("animationRightLi3");
  pText.classList.add("animationVegetableToDown");
  h2Text.classList.add("animationVegetableToRight");
  tomato.classList.add("animationVegetableToLeft");
  lettuce.classList.add("animationVegetableToUp");
  cheli.classList.add("animationVegetableToUp");
  cheli2.classList.add("animationVegetableToUp");

  green.classList.add("animationVegetableToRight");
  green2.classList.add("animationVegetableToRight");
};
let toTop = document.querySelector(".toTop");
let boxitems1 = document.querySelectorAll(".box-items1");
let New = document.querySelectorAll(".new");
let News = document.querySelector(".news");
let about = document.querySelector(".about");
let imgAbout = document.querySelector(".imgAbout");
let aboutText = document.querySelector(".aboutText");
let welcome = document.querySelector(".welcome");
let textWelcome = document.querySelector(".textWelcome");
let imgWelcome = document.querySelector(".imgWelcome");
let service = document.querySelector(".service");
let serviceInfo = document.querySelectorAll(".serviceInfo");
let counter = document.querySelector(".counter");
let num = document.querySelectorAll(".num");

window.onscroll = function () {
  if (window.scrollY > 500) {
    toTop.classList.add("goTop");
    if (
      about.offsetTop + 300 >= window.scrollY &&
      News.offsetTop + 150 < window.scrollY
    ) {
      toTop.classList.add("setRed");
    } else {
      toTop.classList.remove("setRed");
    }
  } else {
    toTop.classList.remove("goTop");
  }
  ///////////////////////////////////////////////////////
  if (window.scrollY >= 50) {
    boxitems1.forEach((E) => {
      E.classList.add("UpItems");
    });
  } else {
    boxitems1.forEach((E) => {
      E.classList.remove("UpItems");
    });
  }
  ///////////////////////////////////////////////////////

  if (window.scrollY >= News.offsetTop - 800) {
    New.forEach((E) => {
      E.classList.add("UpItems");
    });
  } else {
    New.forEach((E) => {
      E.classList.remove("UpItems");
    });
  }
  ///////////////////////////////////////////////////////
  if (window.scrollY >= about.offsetTop - 700) {
    imgAbout.classList.add("pizzatoLeft");
    aboutText.classList.add("TextRight");
  } else {
    imgAbout.classList.remove("pizzatoLeft");
    aboutText.classList.remove("TextRight");
  }
  ///////////////////////////////////////////////////////

  if (window.scrollY >= welcome.offsetTop - 800) {
    textWelcome.classList.add("pizzatoLeft");
    imgWelcome.classList.add("Hidden");
  } else {
    textWelcome.classList.remove("pizzatoLeft");
    imgWelcome.classList.remove("Hidden");
  }
  ////////////////////////////////////////////////////

  if (window.scrollY >= service.offsetTop - 800) {
    serviceInfo.forEach((E) => {
      E.classList.add("Hidden");
    });
  } else {
    serviceInfo.forEach((E) => {
      E.classList.remove("Hidden");
    });
  }
  ////////////////////////////////////////////////////
  if (window.scrollY >= counter.offsetTop - 500) {
    num.forEach((E) => {
      setCounter(E);
    });
  } else {
    num.forEach((E) => {
      E.innerHTML = 0;
    });
  }
};
////////////////////////////////////////////////////
function setCounter(E) {
  let goal = E.dataset.num;
  let count = setInterval(function () {
    if (E.textContent == goal) {
      clearInterval(count);
    } else {
      E.textContent++;
    }
  }, 4000 / goal);
}
////////////////////////////////////////////////////
function Clock() {
  /*******************************/
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let second = document.querySelector(".second");
  let amPm = document.querySelector(".amPm");
  let clock = document.querySelector(".clock");
  let state1 = document.querySelector(".state1");

  let hh, mm, ss, Now;
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
      hh = "0" + hours;
    } else {
      hh = hours;
    }
    if (minutes < 10) {
      mm = "0" + minutes;
    } else {
      mm = minutes;
    }
    if (seconds < 10) {
      ss = "0" + seconds;
    } else {
      ss = seconds;
    }
    if (hours < 12) {
      Now = "AM";
    } else {
      Now = "PM";
    }
    hour.innerHTML = hh + ":";
    minute.innerHTML = mm + ":";
    second.innerHTML = ss;
    amPm.innerHTML = Now;

    if (hh >= 13 && hh <= 23) {
      clock.classList.add("setGreen");
      clock.classList.remove("setRed");
      state1.innerHTML = " OPEN NOW";
      state1.classList.add("setGreen");
      state1.classList.remove("setRed");
    } else {
      clock.classList.add("setRed");
      clock.classList.remove("setGreen");
      state1.innerHTML = " CLOSE NOW";
      state1.classList.add("setRed");
      state1.classList.remove("setGreen");
    }
  }, 1000);
}
Clock();
/////////////////////////////////////////////////

toTop.onclick = function () {
  window.scrollTo(0, 0);
};
/*
let form = document.querySelector("form");
form.addEventListener(
  "click",
  function (e) {
    let fname, lname;
    if (e.target.getAttribute("for") == "fname") {
      fname = document.getElementById(e.target.getAttribute("for"));
      fname.classList.add("setHeight");
    } else if (e.target.getAttribute("for") == "lname") {
      lname = document.getElementById(e.target.getAttribute("for"));
      lname.classList.add("setHeight");
    }
    console.log(fname);
  },
  false
);*/
let NavItem = document.querySelector(".NavItem");
NavItem.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("all")) {
      setAll();
    } else if (e.target.classList.contains("pizza")) {
      setPizza();
    } else if (e.target.classList.contains("pasta")) {
      setPasta();
    } else if (e.target.classList.contains("burgers")) {
      setBurger();
    } else if (e.target.classList.contains("salad")) {
      setSalad();
    } else if (e.target.classList.contains("desserts")) {
      setDesserts();
    }
  },
  false
);
///////////////////////////////////////////////////
let Product = document.querySelectorAll(".boxItem");
function setAll() {
  Product.forEach((e) => {
    e.style.display = "block";
  });
}
///////////////////////////////////////////////////
function setPizza() {
  Product.forEach((e) => {
    if (e.getAttribute("class") == "boxItem PIZZA") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
///////////////////////////////////////////////////
function setPasta() {
  Product.forEach((e) => {
    if (e.getAttribute("class") == "boxItem PASTA") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
///////////////////////////////////////////////////
function setBurger() {
  Product.forEach((e) => {
    if (e.getAttribute("class") == "boxItem BURGERS") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
///////////////////////////////////////////////////
function setSalad() {
  Product.forEach((e) => {
    if (e.getAttribute("class") == "boxItem SALADS") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
///////////////////////////////////////////////////
function setDesserts() {
  Product.forEach((e) => {
    if (e.getAttribute("class") == "boxItem DESSERTS") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}

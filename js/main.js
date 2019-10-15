const gghSwitchText = document.getElementById("ggh-switch-text");

// TAG ANIMATION

var animateHTML = function() {
  var elems;
  var windowHeight;

  function init() {
    elems = document.querySelectorAll(".hidden-animation");
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden-animation",
          "tracking-in-contract-bck"
        );
      }

      if (positionFromTop - windowHeight > 1 || positionFromTop < 0) {
        elems[i].className = elems[i].className.replace(
          "tracking-in-contract-bck",
          "hidden-animation"
        );
      }
    }
  }

  return {
    init: init
  };
};

window.onload = function() {
  animateHTML().init();
};

$(document).ready(function() {
  $(".awesome-tooltip").tooltip({
    placement: "right",
    delay: { show: 500, hide: 100 }
  });

  $(window).bind("scroll", function(e) {
    dotnavigation();
  });

  function dotnavigation() {
    var numSections = $("section").length;

    $("#dot-nav li a")
      .removeClass("active")
      .parent("li")
      .removeClass("active");
    $("section").each(function(i, item) {
      var ele = $(item),
        nextTop;

      if (typeof ele.next().offset() != "undefined") {
        nextTop = ele.next().offset().top;
      } else {
        nextTop = $(document).height();
      }

      if (ele.offset() !== null) {
        thisTop = ele.offset().top - (nextTop - ele.offset().top) / numSections;
      } else {
        thisTop = 0;
      }

      var docTop = $(document).scrollTop();

      if (docTop >= thisTop && docTop < nextTop) {
        $("#dot-nav li")
          .eq(i)
          .addClass("active");
      }
    });
  }

  /* get clicks working */
  $("#dot-nav li").click(function() {
    var id = $(this)
        .find("a")
        .attr("href"),
      posi,
      ele,
      padding = 0;

    ele = $(id);
    posi = ($(ele).offset() || 0).top - padding;

    $("html, body").animate({ scrollTop: posi }, "slow");

    return false;
  });

  /* end dot nav */
});

//  SWITCH

$(document).ready(function() {
  $("#switch").click(function() {
    $(".ggh-img img").toggleClass("hidden");
  });
});

const mainSwitch = document.querySelector("#switch");

$(document).ready(function() {
  $("#switch").click(function() {
    $(".ig-img img").toggleClass("hidden");
    $("#white-in").toggleClass("white-in");
    $("#blue-genius").toggleClass("blue-genius");
    $("#white-girl").toggleClass("white-girl");
    $("#yellow-geeks").toggleClass("yellow-geeks");
  });
});

document.addEventListener("DOMContentLoaded", function(event) {
  var ingeniuscontainer = document.getElementById("main");
  var gghcontainer = document.getElementById("mainggh");

  mainSwitch.checked = false;
  gghcontainer.classList.add("ggh-visuallyhidden");
  mainSwitch.addEventListener("click", function() {
    if (mainSwitch.checked) {
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        gghSwitchText.style.marginTop = "-55px";
      }
      if (gghcontainer.classList.contains("main-hidden")) {
        gghcontainer.classList.remove("main-hidden");

        setTimeout(function() {
          gghcontainer.classList.remove("ggh-visuallyhidden");
        }, 20);
        setTimeout(function() {
          ingeniuscontainer.classList.add("ig-visuallyhidden");
        }, 20);
        setTimeout(function() {
          ingeniuscontainer.classList.add("main-hidden");
        }, 700);
      }
    } else if (!mainSwitch.checked) {
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        gghSwitchText.style.marginTop = "-75px";
      }
      if (ingeniuscontainer.classList.contains("main-hidden")) {
        console.log("if ig main hidden)");
        ingeniuscontainer.classList.remove("main-hidden");

        setTimeout(function() {
          ingeniuscontainer.classList.remove("ig-visuallyhidden");
        }, 20);
        setTimeout(function() {
          gghcontainer.classList.add("ggh-visuallyhidden");
        }, 20);
        setTimeout(function() {
          gghcontainer.classList.add("main-hidden");
        }, 700);
      }
    }
  });

  const toggleClasses = function() {
    $(".ig-img img").toggleClass("hidden");
    $("#white-in").toggleClass("white-in");
    $("#blue-genius").toggleClass("blue-genius");
    $("#white-girl").toggleClass("white-girl");
    $("#yellow-geeks").toggleClass("yellow-geeks");
    $(".ggh-img img").toggleClass("hidden");
  };

  document.querySelector(".ggh-p").addEventListener("click", function() {
    if (!mainSwitch.checked) {
      gghcontainer.classList.remove("main-hidden");

      setTimeout(function() {
        gghcontainer.classList.remove("ggh-visuallyhidden");
      }, 20);
      setTimeout(function() {
        ingeniuscontainer.classList.add("ig-visuallyhidden");
      }, 20);
      setTimeout(function() {
        ingeniuscontainer.classList.add("main-hidden");
      }, 700);
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        gghSwitchText.style.marginTop = "-55px";
      }
      mainSwitch.checked = true;
      toggleClasses();
    }
  });

  document.querySelector(".ig-p").addEventListener("click", function() {
    if (mainSwitch.checked) {
      ingeniuscontainer.classList.remove("main-hidden");

      setTimeout(function() {
        ingeniuscontainer.classList.remove("ig-visuallyhidden");
      }, 20);
      setTimeout(function() {
        gghcontainer.classList.add("ggh-visuallyhidden");
      }, 20);
      setTimeout(function() {
        gghcontainer.classList.add("main-hidden");
      }, 700);
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        gghSwitchText.style.marginTop = "-75px";
      }
      mainSwitch.checked = false;
      toggleClasses();
    }
  });

  document
    .querySelector("#ggh-img-toggle")
    .addEventListener("click", function() {
      if (!mainSwitch.checked) {
        gghcontainer.classList.remove("main-hidden");

        setTimeout(function() {
          gghcontainer.classList.remove("ggh-visuallyhidden");
        }, 20);
        setTimeout(function() {
          ingeniuscontainer.classList.add("ig-visuallyhidden");
        }, 20);
        setTimeout(function() {
          ingeniuscontainer.classList.add("main-hidden");
        }, 700);
        if (navigator.userAgent.indexOf("Firefox") > 0) {
          gghSwitchText.style.marginTop = "-55px";
        }
        mainSwitch.checked = true;
        toggleClasses();
      }
    });

  document
    .querySelector("#ig-img-toggle")
    .addEventListener("click", function() {
      if (mainSwitch.checked) {
        ingeniuscontainer.classList.remove("main-hidden");

        setTimeout(function() {
          ingeniuscontainer.classList.remove("ig-visuallyhidden");
        }, 20);
        setTimeout(function() {
          gghcontainer.classList.add("ggh-visuallyhidden");
        }, 20);
        setTimeout(function() {
          gghcontainer.classList.add("main-hidden");
        }, 700);
        if (navigator.userAgent.indexOf("Firefox") > 0) {
          gghSwitchText.style.marginTop = "-75px";
        }
        mainSwitch.checked = false;
        toggleClasses();
      }
    });
});

// Accordion
var action = "click";
var speed = "500";

$(document).ready(function() {
  // Question handler
  $("li.q").on(action, function() {
    // Get next element
    $(this)
      .next()
      .slideToggle(speed)
      .siblings("li.a")
      .slideUp();
    // Get arrow for active question
    var arrow = $(this).children(".fa");
    // Remove the 'rotate' class for all images except the active.
    $(".fa")
      .not(arrow)
      .removeClass("rotate");
    // Toggle rotate class
    arrow.toggleClass("rotate");
  });
});

// ANIMATION

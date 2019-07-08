"use strict";

(function ($, root, undefined) {
  $(function () {
    "use strict";

    updateHeroImage(); // DOM ready, take it away

    var bootstrapBreakpoints = [{
      maxwidth: 767,
      minwidth: 0,
      name: "xs"
    }, {
      maxwidth: 991,
      minwidth: 768,
      name: "sm"
    }, {
      maxwidth: 1199,
      minwidth: 992,
      name: "md"
    }, {
      maxwidth: 99999,
      minwidth: 1200,
      name: "lg"
    }];
    var fadeTargets = $(".scroll-fade-target");

    function updateFadeTargets(fadeTargets) {
      fadeTargets.each(function (index, element) {
        element = $(element);
        var elementOffset = element.offset().top - window.innerHeight;

        if (window.pageYOffset > elementOffset) {
          element.attr("data-scroll-past", "true");
          TweenMax.to(element, 0.7, {
            css: {
              opacity: 1,
              top: "0px"
            }
          });
        } else {
          element.attr("data-scroll-past", "false");
          TweenMax.to(element, 0, {
            css: {
              opacity: 0,
              top: "50px"
            }
          });
        }
      });
    }

    updateFadeTargets(fadeTargets);
    var windowBreakpoint = getCurrentBreak(window.innerWidth);
    var breakpointDisplay = document.createElement("h1");
    document.body.appendChild(breakpointDisplay).setAttribute("id", "bootstrap-breakpoint-display");
    breakpointDisplay.setAttribute("style", "opacity: .5;position: fixed;top: 0px;left: 30px;");
    breakpointDisplay.innerHTML = windowBreakpoint.name;

    function getCurrentBreak(size) {
      return bootstrapBreakpoints.filter(function (breakpoint) {
        return parseInt(size) >= breakpoint.minwidth && parseInt(size) < breakpoint.maxwidth;
      })[0];
    }

    function windowResize() {
      if (windowBreakpoint !== getCurrentBreak(window.innerWidth)) {
        windowBreakpoint = getCurrentBreak(window.innerWidth);
        breakpointDisplay.innerHTML = windowBreakpoint.name;
      }

      updateHeroImage();
      addScrollClassToNav();
    }

    function addScrollClassToNav() {
      if (getCurrentBreak(window.innerWidth).name === 'xs' && window.pageYOffset > $('#header-element').outerHeight() && !$('.contact-container').hasClass('scroll-past-nav')) {
        $('#header-element > div').addClass('scroll-past-nav');
        TweenMax.to($('.contact-container'), .3, {
          css: {
            top: "0px"
          },
          ease: Power2.easeOut,
          onComplete: function onComplete() {}
        });
      } else {// $('#header-element > div').removeClass('scroll-past-nav');
      }
    }

    function windowScroll() {
      updateFadeTargets(fadeTargets);
      addScrollClassToNav();
    }

    window.onresize = windowResize;
    window.onscroll = windowScroll;
    var contactButton = document.getElementById("contact-button");
    contactButton.addEventListener("click", chevClick);
    var bodyChev = document.getElementById("body-chev");
    bodyChev.addEventListener("click", chevClick);

    function chevClick(event) {
      var targetSelector = "#".concat(event.target.dataset.scrollTarget);
      TweenMax.to(window, 0.7, {
        scrollTo: targetSelector
      });
    }

    function updateHeroImage(event) {
      var headerElement = document.getElementById("header-element");
      var heroImageElement = document.getElementById("hero-image-element");
      var chevronElement = document.getElementById("chevron-element");
      var totalOffsetHeight = headerElement.clientHeight + heroImageElement.clientHeight + chevronElement.clientHeight;
      var differenceInHeight = totalOffsetHeight - window.innerHeight;
      var newHeight = heroImageElement.clientHeight - differenceInHeight;
      heroImageElement.setAttribute("style", "height: ".concat(newHeight, "px"));
    } // document.addEventListener("DOMContentLoaded", updateHeroImage);

  });
})(jQuery, void 0);
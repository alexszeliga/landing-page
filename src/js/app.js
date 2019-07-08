(function($, root, undefined) {
  $(function() {
    "use strict";
    updateHeroImage();
    // DOM ready, take it away
    const bootstrapBreakpoints = [
      { maxwidth: 767, minwidth: 0, name: "xs" },
      { maxwidth: 991, minwidth: 768, name: "sm" },
      { maxwidth: 1199, minwidth: 992, name: "md" },
      { maxwidth: 99999, minwidth: 1200, name: "lg" }
    ];

    const fadeTargets = $(".scroll-fade-target");

    function updateFadeTargets(fadeTargets) {
      fadeTargets.each((index, element) => {
        element = $(element);
        let elementOffset = element.offset().top - window.innerHeight;
        if (window.pageYOffset > elementOffset) {
          element.attr("data-scroll-past", "true");
          TweenMax.to(element, 0.7, { css: { opacity: 1, top: "0px" } });
        } else {
          element.attr("data-scroll-past", "false");
          TweenMax.to(element, 0, { css: { opacity: 0, top: "50px" } });
        }
      });
    }


    updateFadeTargets(fadeTargets);

    let windowBreakpoint = getCurrentBreak(window.innerWidth);
    let breakpointDisplay = document.createElement("h1");
    document.body
      .appendChild(breakpointDisplay)
      .setAttribute("id", "bootstrap-breakpoint-display");
    breakpointDisplay.setAttribute(
      "style",
      "opacity: .5;position: fixed;top: 0px;left: 30px;"
    );
    breakpointDisplay.innerHTML = windowBreakpoint.name;

    function getCurrentBreak(size) {
      return bootstrapBreakpoints.filter(breakpoint => {
        return (
          parseInt(size) >= breakpoint.minwidth &&
          parseInt(size) < breakpoint.maxwidth
        );
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
    function addScrollClassToNav () {
      if (getCurrentBreak(window.innerWidth).name === 'xs' && window.pageYOffset > ($('#header-element').outerHeight() + $('.contact-container').outerHeight()) && !$('.contact-container').hasClass('scroll-past-nav')) {
        $('#header-element > div').addClass('scroll-past-nav');
        TweenMax.fromTo($('.contact-container'), .3, {css:{top:"-80px", opacity:0}},{css:{top: "0px", opacity:1}, ease:Power2.easeOut});
      } else if (window.pageYOffset < ($('#header-element').outerHeight() + $('.contact-container').outerHeight()) && $('.contact-container').hasClass('scroll-past-nav')) {
        TweenMax.to($('.contact-container'), .2, {css:{top: "-80px", opacity:0}, ease:Power2.easeOut, onComplete: function () {
          $('#header-element > div').removeClass('scroll-past-nav');
          TweenMax.to($('.contact-container'), 0.2, {css:{opacity:1}});
        }});
      }
    }
    function windowScroll() {
      updateFadeTargets(fadeTargets);
      addScrollClassToNav();
    }
    window.onresize = windowResize;
    window.onscroll = windowScroll;

    const contactButton = document.getElementById("contact-button");

    contactButton.addEventListener("click", chevClick);

    const bodyChev = document.getElementById("body-chev");

    bodyChev.addEventListener("click", chevClick);

    function chevClick(event) {
      let targetSelector = `#${event.target.dataset.scrollTarget}`;
      TweenMax.to(window, 0.7, { scrollTo: targetSelector });
    }
    function updateHeroImage(event) {
      const headerElement = document.getElementById("header-element");
      const heroImageElement = document.getElementById("hero-image-element");
      const chevronElement = document.getElementById("chevron-element");

      let totalOffsetHeight =
        headerElement.clientHeight +
        heroImageElement.clientHeight +
        chevronElement.clientHeight;

      let differenceInHeight = totalOffsetHeight - window.innerHeight;

      let newHeight = heroImageElement.clientHeight - differenceInHeight;
      heroImageElement.setAttribute("style", `height: ${newHeight}px`);
    }

    // document.addEventListener("DOMContentLoaded", updateHeroImage);
  });
})(jQuery, this);

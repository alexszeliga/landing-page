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
      if (getCurrentBreak(window.innerWidth).name === 'xs' && window.pageYOffset > $('#header-element').outerHeight() + $('.contact-container').outerHeight() && !$('.contact-container').hasClass('scroll-past-nav')) {
        $('#header-element > div').addClass('scroll-past-nav');
        TweenMax.fromTo($('.contact-container'), .3, {
          css: {
            top: "-80px",
            opacity: 0
          }
        }, {
          css: {
            top: "0px",
            opacity: 1
          },
          ease: Power2.easeOut
        });
      } else if (window.pageYOffset < $('#header-element').outerHeight() + $('.contact-container').outerHeight() && $('.contact-container').hasClass('scroll-past-nav')) {
        TweenMax.to($('.contact-container'), .2, {
          css: {
            top: "-80px",
            opacity: 0
          },
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            $('#header-element > div').removeClass('scroll-past-nav');
            TweenMax.to($('.contact-container'), 0.2, {
              css: {
                opacity: 1
              }
            });
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwicm9vdCIsInVuZGVmaW5lZCIsInVwZGF0ZUhlcm9JbWFnZSIsImJvb3RzdHJhcEJyZWFrcG9pbnRzIiwibWF4d2lkdGgiLCJtaW53aWR0aCIsIm5hbWUiLCJmYWRlVGFyZ2V0cyIsInVwZGF0ZUZhZGVUYXJnZXRzIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImVsZW1lbnRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiYXR0ciIsIlR3ZWVuTWF4IiwidG8iLCJjc3MiLCJvcGFjaXR5Iiwid2luZG93QnJlYWtwb2ludCIsImdldEN1cnJlbnRCcmVhayIsImlubmVyV2lkdGgiLCJicmVha3BvaW50RGlzcGxheSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInNpemUiLCJmaWx0ZXIiLCJicmVha3BvaW50IiwicGFyc2VJbnQiLCJ3aW5kb3dSZXNpemUiLCJhZGRTY3JvbGxDbGFzc1RvTmF2Iiwib3V0ZXJIZWlnaHQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiZnJvbVRvIiwiZWFzZSIsIlBvd2VyMiIsImVhc2VPdXQiLCJvbkNvbXBsZXRlIiwicmVtb3ZlQ2xhc3MiLCJ3aW5kb3dTY3JvbGwiLCJvbnJlc2l6ZSIsIm9uc2Nyb2xsIiwiY29udGFjdEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZXZDbGljayIsImJvZHlDaGV2IiwiZXZlbnQiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldCIsImRhdGFzZXQiLCJzY3JvbGxUYXJnZXQiLCJzY3JvbGxUbyIsImhlYWRlckVsZW1lbnQiLCJoZXJvSW1hZ2VFbGVtZW50IiwiY2hldnJvbkVsZW1lbnQiLCJ0b3RhbE9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsImRpZmZlcmVu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QyxZQUFqQixDQUE4QixPQUE5QixvQkFBa0RxQyxTQUFsRDtBQUNELEtBdEdVLENBd0dYOztBQUNELEdBekdBLENBQUQ7QUEwR0QsQ0EzR0QsRUEyR0dDLE1BM0dIIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQsIHJvb3QsIHVuZGVmaW5lZCkge1xyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHVwZGF0ZUhlcm9JbWFnZSgpO1xyXG4gICAgLy8gRE9NIHJlYWR5LCB0YWtlIGl0IGF3YXlcclxuICAgIGNvbnN0IGJvb3RzdHJhcEJyZWFrcG9pbnRzID0gW1xyXG4gICAgICB7IG1heHdpZHRoOiA3NjcsIG1pbndpZHRoOiAwLCBuYW1lOiBcInhzXCIgfSxcclxuICAgICAgeyBtYXh3aWR0aDogOTkxLCBtaW53aWR0aDogNzY4LCBuYW1lOiBcInNtXCIgfSxcclxuICAgICAgeyBtYXh3aWR0aDogMTE5OSwgbWlud2lkdGg6IDk5MiwgbmFtZTogXCJtZFwiIH0sXHJcbiAgICAgIHsgbWF4d2lkdGg6IDk5OTk5LCBtaW53aWR0aDogMTIwMCwgbmFtZTogXCJsZ1wiIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZmFkZVRhcmdldHMgPSAkKFwiLnNjcm9sbC1mYWRlLXRhcmdldFwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGYWRlVGFyZ2V0cyhmYWRlVGFyZ2V0cykge1xyXG4gICAgICBmYWRlVGFyZ2V0cy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50T2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKS50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IGVsZW1lbnRPZmZzZXQpIHtcclxuICAgICAgICAgIGVsZW1lbnQuYXR0cihcImRhdGEtc2Nyb2xsLXBhc3RcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgVHdlZW5NYXgudG8oZWxlbWVudCwgMC43LCB7IGNzczogeyBvcGFjaXR5OiAxLCB0b3A6IFwiMHB4XCIgfSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbWVudC5hdHRyKFwiZGF0YS1zY3JvbGwtcGFzdFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgVHdlZW5NYXgudG8oZWxlbWVudCwgMCwgeyBjc3M6IHsgb3BhY2l0eTogMCwgdG9wOiBcIjUwcHhcIiB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUZhZGVUYXJnZXRzKGZhZGVUYXJnZXRzKTtcclxuXHJcbiAgICBsZXQgd2luZG93QnJlYWtwb2ludCA9IGdldEN1cnJlbnRCcmVhayh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICBsZXQgYnJlYWtwb2ludERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBkb2N1bWVudC5ib2R5XHJcbiAgICAgIC5hcHBlbmRDaGlsZChicmVha3BvaW50RGlzcGxheSlcclxuICAgICAgLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vdHN0cmFwLWJyZWFrcG9pbnQtZGlzcGxheVwiKTtcclxuICAgIGJyZWFrcG9pbnREaXNwbGF5LnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICBcIm9wYWNpdHk6IC41O3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDBweDtsZWZ0OiAzMHB4O1wiXHJcbiAgICApO1xyXG4gICAgYnJlYWtwb2ludERpc3BsYXkuaW5uZXJIVE1MID0gd2luZG93QnJlYWtwb2ludC5uYW1lO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRCcmVhayhzaXplKSB7XHJcbiAgICAgIHJldHVybiBib290c3RyYXBCcmVha3BvaW50cy5maWx0ZXIoYnJlYWtwb2ludCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIHBhcnNlSW50KHNpemUpID49IGJyZWFrcG9pbnQubWlud2lkdGggJiZcclxuICAgICAgICAgIHBhcnNlSW50KHNpemUpIDwgYnJlYWtwb2ludC5tYXh3aWR0aFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdpbmRvd1Jlc2l6ZSgpIHtcclxuICAgICAgaWYgKHdpbmRvd0JyZWFrcG9pbnQgIT09IGdldEN1cnJlbnRCcmVhayh3aW5kb3cuaW5uZXJXaWR0aCkpIHtcclxuICAgICAgICB3aW5kb3dCcmVha3BvaW50ID0gZ2V0Q3VycmVudEJyZWFrKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICBicmVha3BvaW50RGlzcGxheS5pbm5lckhUTUwgPSB3aW5kb3dCcmVha3BvaW50Lm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlSGVyb0ltYWdlKCk7XHJcbiAgICAgIGFkZFNjcm9sbENsYXNzVG9OYXYoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZFNjcm9sbENsYXNzVG9OYXYgKCkge1xyXG4gICAgICBpZiAoZ2V0Q3VycmVudEJyZWFrKHdpbmRvdy5pbm5lcldpZHRoKS5uYW1lID09PSAneHMnICYmIHdpbmRvdy5wYWdlWU9mZnNldCA+ICgkKCcjaGVhZGVyLWVsZW1lbnQnKS5vdXRlckhlaWdodCgpICsgJCgnLmNvbnRhY3QtY29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSkgJiYgISQoJy5jb250YWN0LWNvbnRhaW5lcicpLmhhc0NsYXNzKCdzY3JvbGwtcGFzdC1uYXYnKSkge1xyXG4gICAgICAgICQoJyNoZWFkZXItZWxlbWVudCA+IGRpdicpLmFkZENsYXNzKCdzY3JvbGwtcGFzdC1uYXYnKTtcclxuICAgICAgICBUd2Vlbk1heC5mcm9tVG8oJCgnLmNvbnRhY3QtY29udGFpbmVyJyksIC4zLCB7Y3NzOnt0b3A6XCItODBweFwiLCBvcGFjaXR5OjB9fSx7Y3NzOnt0b3A6IFwiMHB4XCIsIG9wYWNpdHk6MX0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCAoJCgnI2hlYWRlci1lbGVtZW50Jykub3V0ZXJIZWlnaHQoKSArICQoJy5jb250YWN0LWNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkpICYmICQoJy5jb250YWN0LWNvbnRhaW5lcicpLmhhc0NsYXNzKCdzY3JvbGwtcGFzdC1uYXYnKSkge1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKCQoJy5jb250YWN0LWNvbnRhaW5lcicpLCAuMiwge2Nzczp7dG9wOiBcIi04MHB4XCIsIG9wYWNpdHk6MH0sIGVhc2U6UG93ZXIyLmVhc2VPdXQsIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJyNoZWFkZXItZWxlbWVudCA+IGRpdicpLnJlbW92ZUNsYXNzKCdzY3JvbGwtcGFzdC1uYXYnKTtcclxuICAgICAgICAgIFR3ZWVuTWF4LnRvKCQoJy5jb250YWN0LWNvbnRhaW5lcicpLCAwLjIsIHtjc3M6e29wYWNpdHk6MX19KTtcclxuICAgICAgICB9fSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdpbmRvd1Njcm9sbCgpIHtcclxuICAgICAgdXBkYXRlRmFkZVRhcmdldHMoZmFkZVRhcmdldHMpO1xyXG4gICAgICBhZGRTY3JvbGxDbGFzc1RvTmF2KCk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSB3aW5kb3dSZXNpemU7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSB3aW5kb3dTY3JvbGw7XHJcblxyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1idXR0b25cIik7XHJcblxyXG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hldkNsaWNrKTtcclxuXHJcbiAgICBjb25zdCBib2R5Q2hldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keS1jaGV2XCIpO1xyXG5cclxuICAgIGJvZHlDaGV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGV2Q2xpY2spO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZXZDbGljayhldmVudCkge1xyXG4gICAgICBsZXQgdGFyZ2V0U2VsZWN0b3IgPSBgIyR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2Nyb2xsVGFyZ2V0fWA7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKHdpbmRvdywgMC43LCB7IHNjcm9sbFRvOiB0YXJnZXRTZWxlY3RvciB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhlcm9JbWFnZShldmVudCkge1xyXG4gICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItZWxlbWVudFwiKTtcclxuICAgICAgY29uc3QgaGVyb0ltYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVyby1pbWFnZS1lbGVtZW50XCIpO1xyXG4gICAgICBjb25zdCBjaGV2cm9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hldnJvbi1lbGVtZW50XCIpO1xyXG5cclxuICAgICAgbGV0IHRvdGFsT2Zmc2V0SGVpZ2h0ID1cclxuICAgICAgICBoZWFkZXJFbGVtZW50LmNsaWVudEhlaWdodCArXHJcbiAgICAgICAgaGVyb0ltYWdlRWxlbWVudC5jbGllbnRIZWlnaHQgK1xyXG4gICAgICAgIGNoZXZyb25FbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIGxldCBkaWZmZXJlbmNlSW5IZWlnaHQgPSB0b3RhbE9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIGxldCBuZXdIZWlnaHQgPSBoZXJvSW1hZ2VFbGVtZW50LmNsaWVudEhlaWdodCAtIGRpZmZlcmVuY2VJbkhlaWdodDtcclxuICAgICAgaGVyb0ltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgaGVpZ2h0OiAke25ld0hlaWdodH1weGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHVwZGF0ZUhlcm9JbWFnZSk7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSwgdGhpcyk7XHJcbiJdLCJmaWxlIjoiYXBwLmpzIn0=

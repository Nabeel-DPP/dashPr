/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

/* ====== Index ======

1. SCROLLBAR SIDEBAR
2. MOBILE OVERLAY
3. SIDEBAR MENU
4. SIDEBAR TOGGLE FOR MOBILE
5. SIDEBAR TOGGLE FOR VARIOUS SIDEBAR LAYOUT
6. TODO LIST
7. RIGHT SIDEBAR
8. OFFCANVAS
9. DROPDOWN NOTIFY
10. REFRESS BUTTON
11. NAVBAR TRANSPARENT SCROLL
12. NAVBAR SEARCH
====== End ======*/

// $(function (){
//     "use strict";
  
//     /*======== 1. SCROLLBAR SIDEBAR ========*/
  
//     /*======== 2. MOBILE OVERLAY ========*/
//     if ($(window).width() < 768) {
//       $(".sidebar-toggle").on("click", function () {
//         $("body").css("overflow", "hidden");
//         $("body").prepend('<div class="mobile-sticky-body-overlay"></div>');
//       });
  
//       $(document).on("click", ".mobile-sticky-body-overlay", function (e) {
//         $(this).remove();
//         $("#body")
//           .removeClass("sidebar-mobile-in")
//           .addClass("sidebar-mobile-out");
//         $("body").css("overflow", "auto");
//       });
//     }
  
//     /*======== 3. SIDEBAR MENU ========*/
//     // $(".sidebar .nav > .has-sub > a").click(function () {
//     //   $(this).parent().siblings().removeClass("expand");
//     //   $(this).parent().toggleClass("expand");
//     // });
  
//     // $(".sidebar .nav > .has-sub .has-sub > a").click(function () {
//     //   $(this).parent().toggleClass("expand");
//     // });
  
//       $('#sidebar-toggler').on('click', function () {
//         $('#sidebar').slideToggle(200); // Adjust duration as needed
//         $(this).toggleClass('active'); // Optional: toggle an active class for styling
//       });
    
  
//     /*======== 4. SIDEBAR TOGGLE FOR MOBILE ========*/
//     if ($(window).width() < 768) {
//       $(document).on("click", ".sidebar-toggle", function (e) {
//         e.preventDefault();
//         var min = "sidebar-mobile-in",
//           min_out = "sidebar-mobile-out",
//           body = "#body";
//         $(body).hasClass(min)
//           ? $(body).removeClass(min).addClass(min_out)
//           : $(body).addClass(min).removeClass(min_out);
//       });
//     }
  
//     /*======== 5. SIDEBAR TOGGLE FOR VARIOUS SIDEBAR LAYOUT ========*/
//     var body = $("#body");
//     if ($(window).width() >= 768) {
//       if (body.hasClass("sidebar-mobile-in sidebar-mobile-out")) {
//         body.removeClass("sidebar-mobile-in sidebar-mobile-out");
//       }
  
//       window.isMinified = false;
//       window.isCollapsed = false;
  
//       $("#sidebar-toggler").on("click", function () {
//         if (
//           body.hasClass("sidebar-fixed-offcanvas") ||
//           body.hasClass("sidebar-static-offcanvas")
//         ) {
//           $(this)
//             .addClass("sidebar-offcanvas-toggle")
//             .removeClass("sidebar-toggle");
//           if (window.isCollapsed === false) {
//             body.addClass("sidebar-collapse");
//             window.isCollapsed = true;
//             window.isMinified = false;
//           } else {
//             body.removeClass("sidebar-collapse");
//             body.addClass("sidebar-collapse-out");
//             setTimeout(function () {
//               body.removeClass("sidebar-collapse-out");
//             }, 300);
//             window.isCollapsed = false;
//           }
//         }
  
//         if (body.hasClass("sidebar-fixed") || body.hasClass("sidebar-static")) {
//           $(this)
//             .addClass("sidebar-toggle")
//             .removeClass("sidebar-offcanvas-toggle");
//           if (window.isMinified === false) {
//             body
//               .removeClass("sidebar-collapse sidebar-minified-out")
//               .addClass("sidebar-minified");
//             window.isMinified = true;
//             window.isCollapsed = false;
//           } else {
//             body.removeClass("sidebar-minified");
//             body.addClass("sidebar-minified-out");
//             window.isMinified = false;
//           }
//         }
//       });
//     }
  
//     if ($(window).width() >= 768 && $(window).width() < 992) {
//       if (body.hasClass("sidebar-fixed") || body.hasClass("sidebar-static")) {
//         body
//           .removeClass("sidebar-collapse sidebar-minified-out")
//           .addClass("sidebar-minified");
//         window.isMinified = true;
//       }
//     }
  
//     /*======== 6. TODO LIST ========*/
  
//     function todoCheckAll() {
//       var mdis = document.querySelectorAll(".todo-single-item .mdi");
//       mdis.forEach(function (fa) {
//         fa.addEventListener("click", function (e) {
//           e.stopPropagation();
//           e.target.parentElement.classList.toggle("finished");
//         });
//       });
//     }
  
//     if (document.querySelector("#todo")) {
//       var list = document.querySelector("#todo-list"),
//         todoInput = document.querySelector("#todo-input"),
//         todoInputForm = todoInput.querySelector("form"),
//         item = todoInputForm.querySelector("input");
  
//       document.querySelector("#add-task").addEventListener("click", function (e) {
//         e.preventDefault();
//         todoInput.classList.toggle("d-block");
//         item.focus();
//       });
  
//       todoInputForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         if (item.value.length <= 0) {
//           return;
//         }
//         list.innerHTML =
//           '<div class="todo-single-item d-flex flex-row justify-content-between">' +
//           '<i class="mdi"></i>' +
//           "<span>" +
//           item.value +
//           "</span>" +
//           '<span class="badge badge-primary">Today</span>' +
//           "</div>" +
//           list.innerHTML;
//         item.value = "";
//         //Close input field
//         todoInput.classList.toggle("d-block");
//         todoCheckAll();
//       });
  
//       todoCheckAll();
//     }
  
//     /*======== 7. RIGHT SIDEBAR ========*/
//     if ($(window).width() < 1025) {
//       body.addClass("right-sidebar-toggoler-out");
  
//       var btnRightSidebarToggler = $(".btn-right-sidebar-toggler");
  
//       btnRightSidebarToggler.on("click", function () {
//         if (!body.hasClass("right-sidebar-toggoler-out")) {
//           body
//             .addClass("right-sidebar-toggoler-out")
//             .removeClass("right-sidebar-toggoler-in");
//         } else {
//           body
//             .addClass("right-sidebar-toggoler-in")
//             .removeClass("right-sidebar-toggoler-out");
//         }
//       });
//     }
  
//     var navRightSidebarLink = $(".nav-right-sidebar .nav-link");
  
//     navRightSidebarLink.on("click", function () {
//       if (!body.hasClass("right-sidebar-in")) {
//         body.addClass("right-sidebar-in").removeClass("right-sidebar-out");
//       } else if ($(this).hasClass("show")) {
//         body.addClass("right-sidebar-out").removeClass("right-sidebar-in");
//       }
//     });
  
//     var cardClosebutton = $(".card-right-sidebar .close");
//     cardClosebutton.on("click", function () {
//       body.removeClass("right-sidebar-in").addClass("right-sidebar-out");
//     });
  
//     /*======== 8. OFFCANVAS ========*/
//     var offcanvasToggler = $(".offcanvas-toggler");
//     var cardOffcanvas = $(".card-offcanvas");
  
//     offcanvasToggler.on("click", function () {
//       var offcanvasId = $(this).attr("data-offcanvas");
//       cardOffcanvas.removeClass("active");
//       $("#" + offcanvasId).addClass("active");
//       $("#body").append('<div class="offcanvas-overlay"></div>');
//     });
  
//     /* Overlay Click*/
//     $(document).on("click", ".offcanvas-overlay", function () {
//       $(this).remove();
//       cardOffcanvas.removeClass("active");
//     });
  
//     /*======== 9. DROPDOWN NOTIFY ========*/
//     // var dropdownToggle = $(".notify-toggler");
//     // var dropdownNotify = $(".dropdown-notify");
  
//     // if (dropdownToggle.length !== 0) {
//     //   dropdownToggle.on("click", function () {
//     //     if (!dropdownNotify.is(":visible")) {
//     //       dropdownNotify.fadeIn(5);
//     //     } else {
//     //       dropdownNotify.fadeOut(5);
//     //     }
//     //   });
  
//     //   $(document).mouseup(function (e) {
//     //     if (
//     //       !dropdownNotify.is(e.target) &&
//     //       dropdownNotify.has(e.target).length === 0
//     //     ) {
//     //       dropdownNotify.fadeOut(5);
//     //     }
//     //   });
//     // }
  
//     /*======== 10. REFRESS BUTTON ========*/
//     var refressButton = $("#refress-button");
//     if (refressButton !== 0) {
//       refressButton.on("click", function () {
//         $(this).addClass("mdi-spin");
//         var $this = $(this);
//         setTimeout(function () {
//           $this.removeClass("mdi-spin");
//         }, 3000);
//       });
//     }
  
//     /*======== 11. NAVBAR TRANSPARENT SCROLL ========*/
//     var body = $("#body");
//     var navbar = $("#navbar");
//     $(window).scroll(function () {
//       if (
//         body.hasClass("navbar-fixed") &&
//         $(this).width() > 765 &&
//         navbar.hasClass("navbar-transparent")
//       ) {
//         var scroll = $(window).scrollTop();
  
//         if (scroll >= 10) {
//           navbar.addClass("navbar-light").addClass("navbar-transparent");
//         } else {
//           navbar.removeClass("navbar-light").addClass("navbar-transparent");
//         }
//       }
//     });
  
//     /*======== 12. NAVBAR SEARCH ========*/
//     var searchInput = $("#search-input");
//     if (searchInput !== 0) {
//       var inputSearch = $("#input-group-search");
//       searchInput.focus(function () {
//         $(".dropdown-menu-search").show();
//         removeRadius();
//         $(this).addClass("focus");
//       });
  
//       searchInput.focusout(function () {
//         $(".dropdown-menu-search").hide();
//         addRadius();
//         $(this).removeClass("focus");
//       });
  
//       function removeRadius() {
//         inputSearch.css({
//           "border-bottom-left-radius": "0",
//           "border-bottom-right-radius": "0",
//         });
//       }
  
//       function addRadius() {
//         inputSearch.css({
//           "border-bottom-left-radius": ".5rem",
//           "border-bottom-right-radius": ".5rem",
//         });
//       }
  
//       window.displayBoxIndex = -1;
//       searchInput.keyup(function (e) {
//         if (e.keyCode == 40) {
//           Navigate(1);
//         }
//         if (e.keyCode == 38) {
//           Navigate(-1);
//         }
//         if (e.keyCode == 27) {
//           $(".dropdown-menu-search").hide();
//           addRadius();
//         }
//       });
  
//       var Navigate = function (diff) {
//         displayBoxIndex += diff;
//         var oBoxCollection = $(".dropdown-menu-search .nav-item");
//         if (displayBoxIndex >= oBoxCollection.length) displayBoxIndex = 0;
//         if (displayBoxIndex < 0) displayBoxIndex = oBoxCollection.length - 1;
//         var cssClass = "active";
//         oBoxCollection
//           .removeClass(cssClass)
//           .eq(displayBoxIndex)
//           .addClass(cssClass);
//       };
//     }
  
//     hotkeys("/", function (event, handler) {
//       switch (handler.key) {
//         case "/":
//           event.preventDefault();
//           searchInput.focus();
//           break;
//       }
//     });
//   });


  
  


// $(function () {
//   "use strict";

//   /*======== 1. SCROLLBAR SIDEBAR ========*/
//   // Your scrollbar logic here (if applicable)

//   /*======== 2. MOBILE OVERLAY ========*/
//   function handleMobileOverlay() {
//       if ($(window).width() < 768) {
//           $(".sidebar-toggle").on("click", function () {
//               $("body").css("overflow", "hidden");
//               $("body").prepend('<div class="mobile-sticky-body-overlay"></div>');
//           });

//           $(document).on("click", ".mobile-sticky-body-overlay", function () {
//               $(this).remove();
//               $("#body").removeClass("sidebar-mobile-in").addClass("sidebar-mobile-out");
//               $("body").css("overflow", "auto");
//           });
//       }
//   }

//   handleMobileOverlay();

//   /*======== 3. SIDEBAR MENU ========*/
//   $('#sidebar-toggler').on('click', function () {
//       $('#sidebar').slideToggle(200);
//       $(this).toggleClass('active');
//   });

//   /*======== 4. SIDEBAR TOGGLE FOR VARIOUS SIDEBAR LAYOUT ========*/
//   var body = $("#body");

//   function handleSidebarToggle() {
//       if ($(window).width() >= 768) {
//           $("#sidebar-toggler").on("click", function () {
//               if (body.hasClass("sidebar-fixed-offcanvas") || body.hasClass("sidebar-static-offcanvas")) {
//                   $(this).toggleClass("sidebar-offcanvas-toggle");
//                   body.toggleClass("sidebar-collapse");
//               }
//           });
//       }
//   }

//   handleSidebarToggle();

//   /*======== 5. TODO LIST ========*/
//   function todoCheckAll() {
//       $(".todo-single-item .mdi").each(function () {
//           $(this).on("click", function (e) {
//               e.stopPropagation();
//               $(this).parent().toggleClass("finished");
//           });
//       });
//   }

//   if (document.querySelector("#todo")) {
//       var list = $("#todo-list"),
//           todoInput = $("#todo-input"),
//           item = todoInput.find("form input");

//       $("#add-task").on("click", function (e) {
//           e.preventDefault();
//           todoInput.toggleClass("d-block");
//           item.focus();
//       });

//       todoInput.on("submit", function (e) {
//           e.preventDefault();
//           if (item.val().length <= 0) return;

//           list.prepend(
//               '<div class="todo-single-item d-flex flex-row justify-content-between">' +
//               '<i class="mdi"></i>' +
//               "<span>" + item.val() + "</span>" +
//               '<span class="badge badge-primary">Today</span>' +
//               "</div>"
//           );
//           item.val("");
//           todoInput.toggleClass("d-block");
//           todoCheckAll();
//       });

//       todoCheckAll();
//   }

//   /*======== 6. RIGHT SIDEBAR ========*/
//   if ($(window).width() < 1025) {
//       body.addClass("right-sidebar-toggoler-out");
//       $(".btn-right-sidebar-toggler").on("click", function () {
//           body.toggleClass("right-sidebar-toggoler-in right-sidebar-toggoler-out");
//       });
//   }

//   /*======== 7. OFFCANVAS ========*/
//   $(".offcanvas-toggler").on("click", function () {
//       var offcanvasId = $(this).data("offcanvas");
//       $(".card-offcanvas").removeClass("active");
//       $("#" + offcanvasId).addClass("active");
//       $("#body").append('<div class="offcanvas-overlay"></div>');
//   });

//   $(document).on("click", ".offcanvas-overlay", function () {
//       $(this).remove();
//       $(".card-offcanvas").removeClass("active");
//   });

//   /*======== 8. NAVBAR TRANSPARENT SCROLL ========*/
//   var navbar = $("#navbar");
//   $(window).scroll(function () {
//       if (body.hasClass("navbar-fixed") && $(this).width() > 765 && navbar.hasClass("navbar-transparent")) {
//           var scroll = $(window).scrollTop();
//           navbar.toggleClass("navbar-light", scroll >= 10);
//       }
//   });

//   /*======== 9. NAVBAR SEARCH ========*/
//   var searchInput = $("#search-input");
//   if (searchInput.length) {
//       searchInput.on("focus", function () {
//           $(".dropdown-menu-search").show();
//           $(this).addClass("focus");
//       }).on("focusout", function () {
//           $(".dropdown-menu-search").hide();
//           $(this).removeClass("focus");
//       });

//       searchInput.on("keyup", function (e) {
//           if (e.keyCode === 27) {
//               $(".dropdown-menu-search").hide();
//               $(this).removeClass("focus");
//           }
//       });
//   }

//   /*======== 10. REFRESH BUTTON ========*/
//   $("#refress-button").on("click", function () {
//       $(this).addClass("mdi-spin");
//       var $this = $(this);
//       setTimeout(function () {
//           $this.removeClass("mdi-spin");
//       }, 3000);
//   });
// });
























document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /*======== 1. SCROLLBAR SIDEBAR ========*/
  // Your scrollbar logic here (if applicable)

  /*======== 2. MOBILE OVERLAY ========*/
  function handleMobileOverlay() {
      if (window.innerWidth < 768) {
          const sidebarToggle = document.querySelector(".sidebar-toggle");
          sidebarToggle.addEventListener("click", function () {
              document.body.style.overflow = "hidden";
              const overlay = document.createElement("div");
              overlay.className = "mobile-sticky-body-overlay";
              document.body.prepend(overlay);

              overlay.addEventListener("click", function () {
                  overlay.remove();
                  document.getElementById("body").classList.remove("sidebar-mobile-in");
                  document.getElementById("body").classList.add("sidebar-mobile-out");
                  document.body.style.overflow = "auto";
              });
          });
      }
  }

  handleMobileOverlay();

  /*======== 3. SIDEBAR MENU ========*/
  // document.getElementById("sidebar-toggler").addEventListener("click", function () {
  //     const sidebar = document.getElementById("sidebar");
  //     sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  //     this.classList.toggle("active");
  // });

    const sidebarToggler = document.getElementById("sidebar-toggler");
    const sidebar = document.getElementById("sidebar");

    if (sidebarToggler && sidebar) {
        // Ensure sidebar is initially set to display: none if not already
        if (getComputedStyle(sidebar).display === "none") {
            sidebar.style.display = "none";
        } else {
            sidebar.style.display = "block";
        }

        sidebarToggler.addEventListener("click", function () {
            sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
            this.classList.toggle("active");
        });
    } else {
        console.error("Sidebar or Sidebar Toggler not found in the DOM.");
    }


  /*======== 4. SIDEBAR TOGGLE FOR VARIOUS SIDEBAR LAYOUT ========*/
  const body = document.getElementById("body");

  function handleSidebarToggle() {
      if (window.innerWidth >= 768) {
          document.getElementById("sidebar-toggler").addEventListener("click", function () {
              if (body.classList.contains("sidebar-fixed-offcanvas") || body.classList.contains("sidebar-static-offcanvas")) {
                  this.classList.toggle("sidebar-offcanvas-toggle");
                  body.classList.toggle("sidebar-collapse");
              }
          });
      }
  }

  handleSidebarToggle();

  /*======== 5. TODO LIST ========*/
  function todoCheckAll() {
      document.querySelectorAll(".todo-single-item .mdi").forEach(function (item) {
          item.addEventListener("click", function (e) {
              e.stopPropagation();
              this.parentElement.classList.toggle("finished");
          });
      });
  }

  if (document.getElementById("todo")) {
      const list = document.getElementById("todo-list");
      const todoInput = document.getElementById("todo-input");
      const itemInput = todoInput.querySelector("form input");

      document.getElementById("add-task").addEventListener("click", function (e) {
          e.preventDefault();
          todoInput.classList.toggle("d-block");
          itemInput.focus();
      });

      todoInput.addEventListener("submit", function (e) {
          e.preventDefault();
          if (itemInput.value.length <= 0) return;

          const todoItem = document.createElement("div");
          todoItem.className = "todo-single-item d-flex flex-row justify-content-between";
          todoItem.innerHTML = `
              <i class="mdi"></i>
              <span>${itemInput.value}</span>
              <span class="badge badge-primary">Today</span>
          `;
          list.prepend(todoItem);
          itemInput.value = "";
          todoInput.classList.toggle("d-block");
          todoCheckAll();
      });

      todoCheckAll();
  }

  /*======== 6. RIGHT SIDEBAR ========*/
  if (window.innerWidth < 1025) {
      body.classList.add("right-sidebar-toggoler-out");
      document.querySelector(".btn-right-sidebar-toggler").addEventListener("click", function () {
          body.classList.toggle("right-sidebar-toggoler-in");
          body.classList.toggle("right-sidebar-toggoler-out");
      });
  }

  /*======== 7. OFFCANVAS ========*/
  document.querySelectorAll(".offcanvas-toggler").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
          const offcanvasId = this.dataset.offcanvas;
          document.querySelectorAll(".card-offcanvas").forEach(function (card) {
              card.classList.remove("active");
          });
          document.getElementById(offcanvasId).classList.add("active");

          const overlay = document.createElement("div");
          overlay.className = "offcanvas-overlay";
          document.getElementById("body").appendChild(overlay);

          overlay.addEventListener("click", function () {
              this.remove();
              document.querySelectorAll(".card-offcanvas").forEach(function (card) {
                  card.classList.remove("active");
              });
          });
      });
  });

  /*======== 8. NAVBAR TRANSPARENT SCROLL ========*/
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
      if (body.classList.contains("navbar-fixed") && window.innerWidth > 765 && navbar.classList.contains("navbar-transparent")) {
          const scroll = window.scrollY;
          navbar.classList.toggle("navbar-light", scroll >= 10);
      }
  });

  /*======== 9. NAVBAR SEARCH ========*/
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
      searchInput.addEventListener("focus", function () {
          document.querySelector(".dropdown-menu-search").style.display = "block";
          this.classList.add("focus");
      });

      searchInput.addEventListener("focusout", function () {
          document.querySelector(".dropdown-menu-search").style.display = "none";
          this.classList.remove("focus");
      });

      searchInput.addEventListener("keyup", function (e) {
          if (e.key === "Escape") {
              document.querySelector(".dropdown-menu-search").style.display = "none";
              this.classList.remove("focus");
          }
      });
  }

  /*======== 10. REFRESH BUTTON ========*/
  document.getElementById("refress-button").addEventListener("click", function () {
      this.classList.add("mdi-spin");
      const button = this;
      setTimeout(function () {
          button.classList.remove("mdi-spin");
      }, 3000);
  });
});

$(function() {

    var header = $("#header");
    //var headerH = $("#header").innerHeight();
    var headerH = 0;
    var scrolloffset = 0;

    /* Fixed header */
    
    $(window).on("scroll", function() {

        scrolloffset = $(this).scrollTop();

        if ( scrolloffset > headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockID = $(this).data('scroll');
        var blockoffSet = $(blockID).offset().top - 128;

        console.log(blockID)
        
        $("html, body").animate({
            scrollTop: blockoffSet
        }, 500);
    });



});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


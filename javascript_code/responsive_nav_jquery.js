$(document).ready(function() {
    var par = $('.main-nav');
    $(par).hide();
    
    $('.js-nav-icon').click(function(e) {
        $(par).slideToggle(200);
        e.preventDefault();
    });
  });

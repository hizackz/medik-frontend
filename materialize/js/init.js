(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
      
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $(document).ready(function(){
        $('.slider').slider({full_width: true});
    });
        

  }); // end of document ready
})(jQuery); // end of jQuery name space
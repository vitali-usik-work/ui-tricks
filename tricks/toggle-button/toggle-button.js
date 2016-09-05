(function () {
  'use strict';

  $(document).ready(function () {

    $('#toggle-button-btnID').click(handleWidgetsToggler);

    function handleWidgetsToggler() {
      $(this).toggleClass('toggle-button-btn-selected');
      $('.fa-times', $(this)).toggle();
      $('.fa-check', $(this)).toggle();
      $('.toggle-button-label', $(this).parent()).toggleClass('toggle-button-label-enable');
    }

  });


})();

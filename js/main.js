var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.outerHeight();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height) ;
    console.log(window_bottom_position)

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    console.log(element_top_position)

    //check to see if this current container is within viewport
    if (element_top_position <= window_bottom_position) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
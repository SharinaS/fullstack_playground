

$(function() {
  $('#message').find('b').text('$2000');
})

$(function() {
  //changes to new image with a click on the image, and changes src to "new_text_image"
  $('img#my_img').on('click', function(event){
    $(this).attr({src: 'https://baconmockup.com/640/360' });
   });
})


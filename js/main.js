var audio = ["sound/truecs/1.wav", "sound/truecs/2.wav", "sound/truecs/3.wav", "sound/truecs/4.wav", "sound/truecs/5.wav", "sound/truecs/6.wav", "sound/truecs/7.wav", "sound/truecs/8.wav", "sound/truecs/9.wav", "sound/truecs/10.wav", "sound/truecs/11.wav", "sound/truecs/12.wav", "sound/truecs/13.wav", "sound/truecs/14.wav"];

$(document).ready(function(){
  $('.category-container #allprojects').addClass('textColor');
  if ($(window).width() <= 640) {
  if($("#german").is(':checked')){
      $('.german-text').show();
      $('.english-text').hide();
      $('#germanbutton').addClass('underline');
}  else{
      $('.german-text').hide();
      $('.english-text').show();
    }
  }

});

// $(window).resize(function() {
//    location.reload();
// });

$('.category-container .category').click(function(){
  var filtername = $(this).attr('id');
  $('.category-container .category').removeClass('textColor');
  $(this).addClass('textColor');
if(filtername == "allprojects"){
  $('.project-item-wrap').show();
}
else {
  $('.project-item-wrap').show();
  $('.project-item-wrap').not('[data-category*="'+ filtername +'"]').hide();
}

$('.text-category').text(filtername);
  });


$('.year-container .year').click(function(){
  var filtername = $(this).attr('id');
  $('.year-container .year').removeClass('textColor');
  $(this).addClass('textColor');
  if(filtername == "allprojects"){
    $('.project-item-wrap').show();
  }
  else {
    $('.project-item-wrap').show();
    $('.project-item-wrap').not('[data-year*="'+ filtername +'"]').hide();
  }
  $('.text-category').text(filtername);
    });


  $(".project-item-wrap").hover(function(){
    var categories = $(this).data("category");
    var year = $(this).data("year");
         $(categories).addClass('hover');
         $("#" + year).addClass('hover');
       },
  function(){
    var categories = $(this).data("category");
    var year = $(this).data("year");
    $(categories).removeClass('hover');
    $("#" + year).removeClass('hover');
  });
  $("img").bind("load", function() {
    $('.img-description').each(function() {
      $(this).css({"top":$(this).prev().height()/2});
    });
  }).each(function() {
    if(this.complete) {
        $(this).load(); // For jQuery < 3.0
        // $(this).trigger('load'); // For jQuery >= 3.0
    }
});

function resizeButton() {
if ($(window).width() <= 640) {
  $('.german-text').show();
  $('.english-text').hide();
  $('#germanbutton').addClass('underline');
  $('#englishbutton').removeClass('underline');
$('#german').click(function() {
    $('.german-text').show();
    $('.english-text').hide();
    $('#germanbutton').addClass('underline');
    $('#englishbutton').removeClass('underline');
});
$('#english').click(function() {
    $('.german-text').hide();
    $('.english-text').show();
    $('#englishbutton').addClass('underline');
    $('#germanbutton').removeClass('underline');
});
}
else{
  $('.german-text').show();
  $('.english-text').show();
}
}

$(window).bind('resize', resizeButton);


$('button.launchpad').click(function() {
  var i = $(this).attr('id').substring(1);           //get the index of button
  new Audio(audio[i - 1]).play();          //play corresponding audio
});

$(".about-picture").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

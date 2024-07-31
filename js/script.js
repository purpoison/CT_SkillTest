$(document).ready(function () {
    $('.slider__wrap').slick({
      arrows: false,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
if($('.subteam__link')){
  $('.subteam__link').on('click', function(e){
    e.preventDefault();
    $('.subteam__link').removeClass('subteam__link-active');
    $(this).addClass('subteam__link-active');
    let schedule = $(this).data('page');
    $('.schedule__wrap').each(function(){
      if($(this).attr('id') == schedule){
        $(this).removeClass('hidden');
      }else{
        $(this).addClass('hidden');
      }
    })
  });
}

$(window).on('resize', classRemover);
$(window).on('load', classRemover);

function classRemover(){
  if ($(window).width() < 768) {
    $('.schedule__wrap').each(function(){
      $(this).removeClass('hidden');
    })
  }
}

if($('.mobile__tab').length){
  $('.mobile__tab').on('click', function(e){
    e.preventDefault();
  })

  $('.mobile__tab').on('click', function(e){
    $(this).toggleClass('open');
    let elem = $(this).closest('.schedule__wrap').find('.container');
    elem.toggle('hidden');

  })
}

});

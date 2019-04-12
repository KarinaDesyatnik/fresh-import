$(function(){
	$('.slider').slick({
		arrows: false,
		dots: true, 
    autoplay: true,
    responsive: [
     {
      breakpoint: 992,
      settings: {
      autoplay: false
     }
   }
    ]

	});
$('.slider-cert').slick({
    slidesToShow: 3,
    responsive: [

    {
      breakpoint: 992,
      settings: {
      arrows: true,

       prevArrow: $('.prev2'),
       nextArrow: $('.next2'),
       slidesToShow: 2,
     }
   },
{
      breakpoint: 680,
      settings: {
      arrows: true,

       prevArrow: $('.prev2'),
       nextArrow: $('.next2'),
       slidesToShow: 1,
     }
   },
]

    
  });
$('.slder-partners').slick({
    arrows: true,
    prevArrow: $('.prev3'),
    nextArrow: $('.next3')
   
  });
$('.slider3').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next')
    
  });
 $('.popup-with-video').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#name',
  callbacks: {
   beforeOpen: function() {
    if($(window).width() < 700) {
     this.st.focus = false;
   } else {
     this.st.focus = '#name';
   }
 }
}
});
});


$('.close-callback-box').click(function(){
  $('.callback-popup-box, .menu-container').removeClass('active');
});
$('.top-header__callback').click(function(){
  $('.callback-popup-box').addClass('active');  
});




$('.single-product').click(function(){
   $(this).next().addClass('active'); 
});
$('.close-product').click(function(){
  $('.product-description').removeClass('active');
});

$('.btn_menu').click(function(){
  $('.menu-container').addClass('active');  
});

$('.menu ul li').click(function(){ 
  $('ul',this).toggleClass('active');  
});

$('.close-filter').click(function(){ 
  $('.active-filter').hide();  
});
if(window.innerWidth > 768) {
$('.checkbox').click(function(){ 
  $('.btn-see-more.clean').show();  
});
}




$('.btn-see-more.clean').click(function(){
 var uncheck=document.getElementsByTagName('input');
 for(var i=0;i<uncheck.length;i++)
 {
  if(uncheck[i].type=='checkbox')
  {
   uncheck[i].checked=false;
  }
 }
 $(this).hide()
});

;(function ($) {
  // $('a').on('click', function(e){
  //     e.preventDefault();
  //   }); 
  if(window.innerWidth > 768) {

    $('.menu ul li').hover(function () {
      $('ul',this).slideDown();
    }, function () { 
      $('ul',this).slideUp(); 
    });

  }


}(jQuery));



;(function ($) {
   if(window.innerWidth < 768) {
  $('.menu-item-sub-fild').on('click', function(e){
    e.preventDefault();
  }); 

}





}(jQuery));



$(function(){
  $('.slider-instagram').slick({
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 6,
    responsive: [

    {
      breakpoint: 1400,
      settings: {

       prevArrow: $('.prev2'),
       nextArrow: $('.next2'),
       slidesToShow: 5,
     }
   },
   {
    breakpoint: 1200,
    settings: {

     prevArrow: $('.prev2'),
     nextArrow: $('.next2'),
     slidesToShow: 4,
   }
 }, 
 {
  breakpoint: 992,
  settings: {

   prevArrow: $('.prev2'),
   nextArrow: $('.next2'),
   slidesToShow: 3,
 }
},
{
  breakpoint: 660,
  settings: {

   prevArrow: $('.prev2'),
   nextArrow: $('.next2'),
   slidesToShow: 2 ,
 }
},

]
});

});

$(function($) {
  var allAccordions = $('.accordion div.data');
  var allAccordionItems = $('.accordion .accordion-item');
  var input = $('.accordion div.data input');

  $('.accordion > .accordion-item').click(function() {
    if($(this).hasClass('open'))
    {
      $(this).removeClass('open');
      $(this).next().slideUp("slow");

    }


    else
    {
    //allAccordionItems.removeClass('open');
    $(this).addClass('open');
    $(this).next().slideDown("slow");
    return false;
    }

    
    
  });
});

$().fancybox({
    selector : '.imglist a:visible'
});

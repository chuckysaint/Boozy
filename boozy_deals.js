


/* inspired by https://goo.gl/HuhJi1 and https://goo.gl/ABJTqd  */

$(document).ready(function(){
 /* Ex1 */
$(".Banner1").delay(1000).fadeIn(500);
$(".BannerBorder,.BannerBorderLine").delay(1000).fadeIn(500);
$(".BannerHolder").delay(2500).fadeIn(1000);
$(".Sales").delay(3500).fadeIn(1000);
$(".Biggest").delay(4500).fadeIn(1000);
$(".ShopNow").delay(5500).fadeIn(1000);


   /* Ex2 */
$(".Banner2").delay(6000).fadeIn(500);
$(".BannerHolderEx2").delay(6500).fadeIn(500);
$(".BannerBorderEx2,.BannerBorderLineEx2").delay(7000).fadeIn(500);
$(".SalesEx2").delay(7300).fadeIn(500);
$(".Mega").delay(8500).fadeIn(500);
$(".ShopNowEx2").delay(9000).fadeIn(500);

    /* Ex3 */
$(".Banner3").delay(10000).fadeIn(500);
$(".BannerHolderEx3").delay(10500).fadeIn(500);
$(".BannerBorderEx3,.BannerBorderLineEx3").delay(11000).fadeIn(500);
$(".SalesEx3").delay(11300).fadeIn(500);
$(".Best").delay(12500).fadeIn(500);
$(".Limited").delay(13000).fadeIn(500);

      /* Ex4 */
$(".Banner4").delay(15000).fadeIn(500);
$(".BannerHolderEx4").delay(16000).fadeIn(500);
$(".BannerBorderEx4,.BannerBorderLineEx3").delay(2100).fadeIn(500);
$(".SaleEx4").delay(16400).fadeIn(500);
$(".circleEx4").delay(17000).fadeIn(500);
$(".OffEx4").delay(17600).fadeIn(500);
$(".BestEx4").delay(18000).fadeIn(500);
$(".triangle1Ex4").delay(17100).fadeIn(500);
$(".triangle2Ex4").delay(17300).fadeIn(500);
$(".triangle3Ex4").delay(17600).fadeIn(500);

  /* Ex5 */
$(".Banner5").delay(20000).fadeIn(500);
$(".BannerHolderEx5").delay(20000).fadeIn(500);
$(".BannerBorderEx5,.BannerBorderLineEx5").delay(2200).fadeIn(500);
$(".SaleEx5").delay(20400).fadeIn(500);
$(".circleEx5").delay(21000).fadeIn(500);
$(".OffEx5").delay(22600).fadeIn(500);
$(".BestEx5").delay(22000).fadeIn(500);
$(".triangle1Ex5,.Oval3Ex5").delay(21100).fadeIn(500);
$(".triangle2Ex5,.Oval1Ex5").delay(21300).fadeIn(500);
$(".triangle3Ex5,.Oval2Ex5, .triangle4Ex5").delay(21600).fadeIn(500);


 /* Ex6 */
$(".Banner6").delay(24000).fadeIn(500);
$(".BannerHolderEx6").delay(24000).fadeIn(500);
$(".BannerBorderEx6,.BannerBorderLineEx6").delay(2500).fadeIn(500);
$(".SaleEx6").delay(26400).fadeIn(500);
$(".circleEx6").delay(26000).fadeIn(500);
$(".OffEx6").delay(26600).fadeIn(500);


});





/* Rerun on click */

/* Ex1 */
$( ".Banner1" ).click(function() {
$(".BannerBorder,.BannerBorderLine,.BannerHolder,.Sales,.Biggest,.ShopNow").delay(0).fadeOut(500);
$(".BannerBorder,.BannerBorderLine").delay(1000).fadeIn(500);
$(".BannerHolder").delay(2500).fadeIn(1000);
$(".Sales").delay(3500).fadeIn(1000);
$(".Biggest").delay(4500).fadeIn(1000);
$(".ShopNow").delay(5500).fadeIn(1000);
});


/* Ex2 */
$( ".Banner2" ).click(function() {
$(".BannerHolderEx2,.BannerBorderEx2,.BannerBorderLineEx2,.SalesEx2,.Mega,.ShopNowEx2").delay(0).fadeOut(500);
$(".Banner2").delay(1000).fadeIn(500);
$(".BannerHolderEx2").delay(1500).fadeIn(500);
$(".BannerBorderEx2,.BannerBorderLineEx2").delay(2000).fadeIn(500);
$(".SalesEx2").delay(2300).fadeIn(500);
$(".Mega").delay(3500).fadeIn(500);
$(".ShopNowEx2").delay(4000).fadeIn(500);
});


    /* Ex3 */
$( ".Banner3" ).click(function() {
$(".BannerHolderEx3,.BannerBorderEx3,.BannerBorderLineEx3,.SalesEx3,.Best,.Limited").delay(0).fadeOut(500);
$(".Banner3").delay(1000).fadeIn(500);
$(".BannerHolderEx3").delay(1500).fadeIn(500);
$(".BannerBorderEx3,.BannerBorderLineEx3").delay(2000).fadeIn(500);
$(".SalesEx3").delay(2300).fadeIn(500);
$(".Best").delay(3500).fadeIn(500);
$(".Limited").delay(4000).fadeIn(500);
});


/* Ex4*/
$( ".Banner4" ).click(function() {
$(".BannerHolderEx4,.BannerBorderEx4,.BannerBorderLineEx4,.SaleEx4,.circleEx4,.OffEx4,.BestEx4,.triangle1Ex4,.triangle2Ex4,.triangle3Ex4").delay(0).fadeOut(500);
$(".BannerHolderEx4").delay(1000).fadeIn(500);
$(".BannerBorderEx4,.BannerBorderLineEx4").delay(100).fadeIn(500);
$(".SaleEx4").delay(2000).fadeIn(500);
$(".circleEx4").delay(3000).fadeIn(500);
$(".OffEx4").delay(3600).fadeIn(500);
$(".BestEx4").delay(3800).fadeIn(500);
$(".triangle1Ex4").delay(4100).fadeIn(500);
$(".triangle2Ex4").delay(4300).fadeIn(500);
$(".triangle3Ex4").delay(4600).fadeIn(500);
});



  /* Ex5 */
$( ".Banner5" ).click(function() {
$(".BannerHolderEx5,.BannerBorderEx5,.BannerBorderLineEx5,.SaleEx5,.circleEx5,.OffEx5,.triangle2Ex5,.triangle1Ex5,.Oval3Ex5,.BestEx5,.Oval1Ex5,.triangle3Ex5,.Oval2Ex5,.triangle4Ex5").delay(0).fadeOut(500);
$(".Banner5").delay(1000).fadeIn(500);
$(".BannerHolderEx5").delay(1000).fadeIn(500);
$(".BannerBorderEx5,.BannerBorderLineEx5").delay(220).fadeIn(500);
$(".SaleEx5").delay(1400).fadeIn(500);
$(".circleEx5").delay(2000).fadeIn(500);
$(".OffEx5").delay(3600).fadeIn(500);
$(".BestEx5").delay(3000).fadeIn(500);
$(".triangle1Ex5,.Oval3Ex5").delay(3100).fadeIn(500);
$(".triangle2Ex5,.Oval1Ex5").delay(3300).fadeIn(500);
$(".triangle3Ex5,.Oval2Ex5, .triangle4Ex5").delay(3600).fadeIn(500);
});

/* Ex6 */
$( ".Banner6" ).click(function() {
$(".BannerHolderEx6,.BannerBorderEx6,.BannerBorderLineEx6,.SaleEx6,.circleEx6Shadow,.circleEx6,.OffEx6").delay(0).fadeOut(500);
$(".Banner6").delay(1000).fadeIn(500);
$(".BannerHolderEx6").delay(2000).fadeIn(500);
$(".BannerBorderEx6,.BannerBorderLineEx6").delay(2500).fadeIn(500);
$(".SaleEx6").delay(2400).fadeIn(500);
 $(".circleEx6Shadow").delay(2600).fadeIn(500);
$(".circleEx6").delay(3600).fadeIn(500);
$(".OffEx6").delay(3660).fadeIn(500);
});

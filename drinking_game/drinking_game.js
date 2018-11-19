setInterval(function() {
   if ($(".beer").height() == 30) {
      document.getElementById("drink").innerHTML = "oh, another one?";

      $("#drink").click(function() {
         $(".beer").css("height", "+=330");
      });
   }

   if ($(".beer").height() > 30) {
      document.getElementById("drink").innerHTML = "drink";

      $("#drink").click(function() {
         $(".beer").css("height", "-=80");
      });
   }
}, 500);

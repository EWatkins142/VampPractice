//alert("test");

function witchy(){
  var witchsolve = document.getElementById("witchfly").value
      if(witchsolve==16){
    $(document).ready(function(){
     $('.fly').animate({left: '80%'}, 3000,function(){$(this).removeAttr('style');});
      document.getElementById('wrong').innerHTML=""
    });
    }else {
        document.getElementById('wrong').innerHTML="No, That's The Wrong Answer! Try Again!"
      }
    }

function vampy(){
  var vampsolve = document.getElementById("vamp").value
    if (vampsolve==48){
      $(document).ready(function(){
        $(".drac").css('width', '90%');
        setTimeout(function(){$(".drac").removeAttr('style');}, 3000);
      document.getElementById('wrong').innerHTML="";
    });
    } else{
      document.getElementById('wrong').innerHTML="No, That's The Wrong Answer! Try Again!"
    }
   }

function ghosty(){
  var ghostsolve=document.getElementById('ghost').value
  if (ghostsolve==100){
   $(document).ready(function(){
     $(".ghost").css({'opacity':'1.0'});
     $('.ghost').animate({bottom:'25em'},"slow");
    setTimeout(function(){$(".ghost").removeAttr('style');}, 3000);
   document.getElementById('wrong').innerHTML="";
  });
    } else{
      document.getElementById('wrong').innerHTML="No, That's The Wrong Answer! Try Again!"
     }
    }

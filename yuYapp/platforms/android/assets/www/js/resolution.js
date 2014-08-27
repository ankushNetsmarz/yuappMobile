
   
        $(document).ready(function () {                       
           var flag = 0;      
           var top;
           var topFlag = 0;
          GetUserPost();
         GetUserProfile(); 
              var currentWindowHeight= $(window).height();   // returns height of browser viewport
      var currentWindowWidth = $(window).width(); // returns height of HTML document
      

           $("#logout").on("click", function () {
               localStorage.clear();
               window.location.replace("login.html");
           });
         

 

     

            $(".right-top-btn").on("click", function () {
                if (flag == 0) {
                    $(".profile-menu").css("display", "block");
                    flag = 1;
                }
                else {
                    $(".profile-menu").css("display", "none");
                    flag = 0;
                }
            });
               $(".menu_btn_top").bind('click', function () {
          
               if (flag == 0) {
                
                   if (topFlag == 1)
                   {
                     
                      $(".inner-pages").css("display","none");
                   }
                   $('.inner-pages').animate({
                  'top': top    //moves up
                  
                  });
                
                   flag = 1;
               }
               else {
                
                   if (topFlag == 1) {
                       $(".inner-pages").css("display","block");
                   }
              
                   $('.inner-pages').animate({
                  'top': "0px" //moves up
                  });
                   flag = 0;
               }

           });
           
    


switch (currentWindowHeight) {
               case 320:                   //320 *480
                   
                   {                     
                       top = '380px';
                       topFlag = 1;

                   }
                   break;
				   
               case 568:
				   if(currentWindowWidth == 320)  //320*568
                   {
                       top='440px';           
                   }
                   break;
				   
               case 480:  

                   if (currentWindowWidth == 320)//480*320
                   {
                       top = '345px';
                   }
                   else {
                       top = '420px';          //480* 800
                   }
                   break;

               case 800:

                   if (currentWindowWidth == 1280)//800*1280
                   {
                       top = '1024px';
                   }
                   else{
                       top = '380px';          //800*480

                   }
                   break;
				   
               case 640:
                   if(currentWindowWidth == 400)  //400*640
                   {
                       top = '520px';
                   }
                   else
                   {
                       top='500px';           //360*640
                   }
                   break;
				   
			   case 640:
				   if(currentWindowWidth == 384)  //384*640
                   {
                       top='415px';           
                   }
                   break;
               case 768:
                   {
                       top= '500px'          //768 *1024
                   }
                   break;
               case 1024:
                   
                   {
                       top = '445px'          //1024 *768
                   }
                   break;

			   case 600:
                   {
                       top = '490px'          //1024 *600
                   }
                   break;

               case 540:
                   {
                       top = '485px'          //540 *960
                   }
                   break;
               case 360:
                   if(currentWindowWidth == 600)     //360*600
                   {
                       top = '485px';
                   }
                   else
                   {
                       top= '440px';       //360*640
                   }
                   break;
				   case 360:
				   if(currentWindowWidth == 480)   //360*480
                   {
                       top = '485px'     
                   }
                   break;
               default:
                   {
                       top='390px';
                   }
           }
          });
         
   </script>
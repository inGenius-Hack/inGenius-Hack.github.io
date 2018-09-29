var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');
 
setTimeout(function() {
      clearInterval(loading);
      $loadingMessage.hide();
   }, 1500);

var initProgram = setTimeout(function(){
    var greeting = "<InGenius>";
    var message = "<InGenius>";
    var $identityDiv = $("#identity-results");
    var $name = " inGenius, the flagship event of PESITSouth IEEE Computer Society, is an annual 24-hour hackathon.\n After five successful iterations, inGenius 2018 is back! This time around, our theme is Open Hack. The future is data-driven. So get behind the wheel & hack it out on the 03rd and 04th of November, 2018.";
    var $alias = "Participate"
    var $occupation  ="Mark your dates for 23rd - 24th September "
    var $frontEnd  = ">Thinking big? Think bigger! Come and blow our minds. ";
    var $JSFrameworks = "The 24 hour event will feature food, games and a lot of fun";
    var $JSLibs = "Build and register your team online, along with an abstract about your hack! ";
    var $CSSFrameworks = " Teams with the best hack ideas get shortlisted.";
    var $CSSPre = "Shortlisted teams collect ticket and gear up for the event.";
    var $frontEndAnimation = "IEEE PESITSouth Computer Society has been started in 2017 by the Computer Science Department of PESIT South Campus. We also organise workshops, seminars and a couple of amazing events like inGenius (annual) and the Pursuit (bi-annual Online Treasure Hunt)!";
    var $cmsDevelopment = "The IEEE Computer Society is the world's leading membership organization dedicated to computer science and technology. Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students.";
      
   function initIdentityResults(i){
       $("#message").addClass("sign cursor").text(message.substring(0, i));
         if(i < message.length){
             setTimeout(function(){
                 initIdentityResults(i + 1);
             }, 35);   
         }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                  $("#loadingMessage2").show()
                  var dotAlpha = document.getElementById("alpha-loading");
                  var loadingAlpha = setInterval(function() {
                   if(dotAlpha.innerHTML.length == 6) {
                       dotAlpha.innerHTML = "";
                   } else {
                       dotAlpha.innerHTML += ".";
                       setTimeout(function() {
                           clearInterval(loadingAlpha);
                           $("#loadingMessage2").hide();
                        }, 2000);
                   }
               }, 350);  // Dot Speed
            }
            loadingResume();
            function initName(i){
               $("#name").addClass("sign cursor").text($name.substring(0, i));
                  if(i < $name.length){
                     setTimeout(function(){
                        initName(i + 1);   
                     }, 35);
                  }else{
                     $("#name").removeClass("cursor");
                     setTimeout(function() {
                        initAlias(0);
                     }, 1500);      
                  }
            }
            setTimeout(function() {
               initName(0);
            }, 2500);
         }
         function initAlias(i){
            $("#alias").addClass("sign cursor").text($alias.substring(0, i));
               if(i < $alias.length){
                  setTimeout(function(){
                     initAlias(i + 1);   
                  }, 35);
               }else{
                  $("#alias").removeClass("cursor");
                  setTimeout(function() {
                    initOccupation(0);
                  }, 1500);
               }
        }
        
         function initOccupation(i){
            $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                  if(i < $occupation.length){
                     setTimeout(function(){
                        initOccupation(i + 1);   
                     }, 35);
                  }else{
                     $("#occupation").removeClass("cursor");
                     setTimeout(function() {
                        initFrontEnd(0);
                     }, 1500);
                  }
         }
         function initFrontEnd(i){
            $('#front-end-span').addClass('fa fa-wrench');
            $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
               if(i < $frontEnd.length){
                  setTimeout(function(){
                     initFrontEnd(i + 1);  
                  }, 35);
               }else{
                  $('#front-end').removeClass("cursor");
                     setTimeout(function() {
                        initJSFrameworks(0);
                     }, 1500);
               }
         }
         function initJSFrameworks(i){
            $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
               if(i < $JSFrameworks.length){
                  setTimeout(function(){
                      initJSFrameworks(i + 1);  
                  }, 35);
               }else{
                  $('#js-frameworks').removeClass("cursor");
                     setTimeout(function() {
                        initJSLibs(0);
                     }, 1500);
               }
         }
         function initJSLibs(i){
            $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
               if(i < $JSLibs.length){
                  setTimeout(function(){
                      initJSLibs(i + 1);  
                  }, 35);
               }else{
                  $('#js-libs').removeClass("cursor");
                     setTimeout(function() {
                        initCSSFrameworks(0);
                     }, 1500);
               }
         }
         function initCSSFrameworks(i){
            $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
               if(i < $CSSFrameworks.length){
                  setTimeout(function(){
                      initCSSFrameworks(i + 1);  
                  }, 35);
               }else{
                  $('#css-frameworks').removeClass("cursor");
                  setTimeout(function() {
                    initCSSPre(0);
                     }, 1500);
               }
         }
         function initCSSPre(i){
            $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
               if(i < $CSSPre.length){
                  setTimeout(function(){
                      initCSSPre(i + 1);  
                  }, 35);
               }else{
                  $('#css-pre').removeClass("cursor");
                  setTimeout(function() {
                        initFrontEndAnimation(0);
                     }, 1500);
               }
         }
         function initFrontEndAnimation(i){
            $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
               if(i < $frontEndAnimation.length){
                  setTimeout(function(){
                      initFrontEndAnimation(i + 1);  
                  }, 35);
               }else{
                  $('#front-end-animation').removeClass("cursor");
                  setTimeout(function() {
                        initCMSDevelopment(0);
                     }, 1500);
               }
         }
         function initCMSDevelopment(i){
            $('#cms-span').addClass("fa fa-wordpress")
            $('#CMS-development').addClass("cursor").text($cmsDevelopment.substring(0, i));
               if(i < $cmsDevelopment.length){
                  setTimeout(function(){
                      initCMSDevelopment(i + 1);  
                  }, 35);
               }else{
                  $('#CMS-development').removeClass("cursor");
                  setTimeout(function() {
                    initDesignAnimation(0);
                     }, 1500);
               }
         }
         
          
         
         
         function initDesignAnimation(i){
            $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
               if(i < $designAnimation.length){
                  setTimeout(function(){
                      initDesignAnimation(i + 1);  
                  }, 35);
               }else{
                  //$('#design-animation').removeClass("cursor");
               }
         }
      }
      
   function initProgramAlpha(i){
       $("#greeting").addClass("cursor").text(greeting.substring(0, i));
         if(i < greeting.length){
             setTimeout(function(){
                 initProgramAlpha(i + 1);
             }, 35);   
         }else{
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
         }
      }
      initProgramAlpha(0)

}, 1500);

initProgram()
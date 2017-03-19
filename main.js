var captionVisible = false;

var infoCounter = 1;

var windowLocation = window.location;



$(function () {
    $("body").click(function (e) {
        if (e.target.class == "proj-img-cont" || $(e.target).parents(".proj-img-cont").size()) {
            $(".caption").css({
                "visibility": "visible"
                , "opacity": 1
            });
            
            $('.p-thumb').addClass('height-100');
            
            $('body').addClass('body-background');
            
            $('.outer').offset().top;
            
            captionVisible = true;
            
            
        }
        
        else if (e.target.class == "caption" || $(e.target).parents(".caption").size()) {
            $(".caption").css({
                "visibility": "hidden"
                , "opacity": 0
            });
            
            $('.p-thumb').removeClass('height-100');
            
            $('body').removeClass('body-background');
            
            captionVisible = false;
            
            
        }
        
        else {
            
            
            if (captionVisible == true) {
                console.log("bleahhh");
                $(".caption").css({
                    "visibility": "hidden", 
                    "opacity": 0
                });
                
                $('.p-thumb').removeClass('height-100');
                
                $('body').removeClass('body-background');

                captionVisible = false;
                
                if (infoCounter > 0) {
                    infoCounter = infoCounter + 1;
                };
                
                if (infoCounter == 3) {
                        alert("wtf man !?")
                }
            }
            
            else if (captionVisible == false) {
                infoCounter = 0;
                
                switch (window.location.hash) {
                     case '':
                         window.location = window.location.pathname + "#second"
                         break;
                     case '#first':
                         window.location = window.location.pathname + "#second"
                         break;
                     case '#second':
                         window.location = window.location.pathname + "#third"
                         break;
                     case '#third':
                         window.location = window.location.pathname + "#forth"
                         break;
                     case '#forth':
                         window.location = window.location.pathname + "#first"
                         break;    
                 }
                
            }
        }
    });
})


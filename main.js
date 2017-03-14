var captionVisible = false;

var infoCounter = 1;



$(function () {
    $("body").click(function (e) {
        if (e.target.class == "proj-img" || $(e.target).parents(".proj-img").size()) {
            $(".caption").css({
                "visibility": "visible"
                , "opacity": 1
            });
            
            captionVisible = true;
            
            
        }
        
        else if (e.target.class == "caption" || $(e.target).parents(".caption").size()) {
            $(".caption").css({
                "visibility": "hidden"
                , "opacity": 0
            });
            
            captionVisible = false;
            
            
        }
        
        else {
            
            
            if (captionVisible == true) {
                console.log("bleahhh");
                $(".caption").css({
                    "visibility": "hidden", 
                    "opacity": 0
                });

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
                        window.location = "file:///C:/Users/neded/Documents/GitHub/tv/index.html#second"
                        break;
                    case '#first':
                        window.location = "file:///C:/Users/neded/Documents/GitHub/tv/index.html#second"
                        break;
                    case '#second':
                        window.location = "file:///C:/Users/neded/Documents/GitHub/tv/index.html#third"
                        break;
                    case '#third':
                        window.location = "file:///C:/Users/neded/Documents/GitHub/tv/index.html#forth"
                        break;
                    case '#forth':
                        window.location = "file:///C:/Users/neded/Documents/GitHub/tv/index.html#first"
                        break;    
                }
                
            }
        }
    });
})


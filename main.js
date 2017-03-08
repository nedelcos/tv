var captionVisible = false;


$(function () {
    $("body").click(function (e) {
        if (e.target.class == "inner-content" || $(e.target).parents(".inner-content").size()) {
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
            }
            
            else if (captionVisible == false) {
                
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


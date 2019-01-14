$(document).ready(function(){
    $("button.navbar-toggle").on("click", function(){

        $(".icon-bar:nth-child(3)").toggleClass("mobile-nav-middle-bar");
        $(".icon-bar:nth-child(2)").toggleClass("x-part-1");
        $(".icon-bar:nth-child(4)").toggleClass("x-part-2");
       
        // I dont have parens after the function name, because that would invoke it immediately     
    });
});
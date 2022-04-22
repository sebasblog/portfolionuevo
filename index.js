$(document).ready(function(){

    $("#banner").css({"height":$(window).height() + "px"});
    
    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200){
            if(!flag){
                $("#logo").css({"margin-top": "-5px", "width": "50px", "height": "50px"});
                
                $("header").css({"background-color": "#3c3c3c"});
                flag = true;
            }
            } else {
            if(flag){    
            $("#logo").css({"margin-top": "120px", "width": "500px", "height": "500px"});
            
            $("header").css({"background-color": "transparent"});
            flag = false;
        }
        }
    });
});



function irArriba(pxPantalla) {
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > pxPantalla){
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -120 + "px";
        }
    })
}

irArriba(300);

window.onload = function() {
var arrowDown = document.getElementById('arrowDown');
var menuNav= document.getElementById("menu-nav");
var music = document.querySelector('.music');
var parallax = document.querySelector('.parallax');


    
    function expandNav(){
        if(menuNav.style.display === "none"){
            menuNav.style.minHeight= "100px";
            menuNav.style.display="block";
            
        }else{
            menuNav.style.minHeight= "0px";
            menuNav.style.display="none";
        }
    }

    arrowDown.addEventListener('click',expandNav);
    document.addEventListener('scroll',function(){
        var navBar= document.getElementById('wrapper');
        if(window.pageYOffset >= 100 ){
            navBar.style.opacity="0.8";
            navBar.style.background="lightblue";
        }else{
            navBar.style.background="transparent";
        };
    });

}


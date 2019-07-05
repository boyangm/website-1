window.onload = function() {
var arrowDown = document.getElementById('arrowDown');
function expandNav(){
    var menuNav= document.getElementById("menu-nav");
    if(menuNav.style.display === "none"){
        menuNav.style.display="block";
        menuNav.style.height= "200px";
        
    }else{
        menuNav.style.display="none";
        menuNav.style.height= "0px";
    }
}
arrowDown.addEventListener('click',expandNav);
window.addEventListener('scroll',function(){
    var navBar= document.getElementById('wrapper');
    if(window.pageYOffset >= 50 ){
        navBar.style.opacity="0.8";
        navBar.style.background="lightblue";
    }else{
        navBar.style.background="transparent";
    }
});





}

function start(){
    left_a_link=document.getElementById("left");
    right_a_link=document.getElementById("right");
    left_a_link.addEventListener("click",left_handler,false);
    right_a_link.addEventListener("click",right_handler,false);

}
function left_handler(e){
    id=document.getElementsByClassName("left-list");
    id[0].setAttribute("class","left-list-open");
    e.preventDefault();
}
function right_handler(e){
    id=document.getElementsByClassName("right-list");
    id[0].setAttribute("class","right-list-open");
    e.preventDefault();
}
window.addEventListener("load",start,false);
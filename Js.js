
function start(){
    left_a_link=document.getElementById("left");
    right_a_link=document.getElementById("right");
    left_a_link.addEventListener("click",left_handler,false);
    right_a_link.addEventListener("click",right_handler,false);

}
function left_handler(e){
    id=document.getElementsByClassName("left-list");
    id2=document.getElementsByClassName("list-left");
    id[0].setAttribute("class","left-list left-right-list-open");
    for(let i=0;i<id2.length;i++){
        id2[i].setAttribute("class","list-left list-left-open");
    }
    e.preventDefault();
}
function right_handler(e){
    id=document.getElementsByClassName("right-list");
    id[0].setAttribute("class","right-list left-right-list-open");
    e.preventDefault();
}
window.addEventListener("load",start,false);
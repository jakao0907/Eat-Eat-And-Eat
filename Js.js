var open_left=false;
var open_right=false;
function start(){
    left_a_link=document.getElementById("left");
    right_a_link=document.getElementById("right");
    left_a_link.addEventListener("click",left_handler,false);
    right_a_link.addEventListener("click",right_handler,false);
    go_back_content=document.getElementsByClassName("content");
    go_back_content[0].addEventListener("click",back,false);
    go_back_head=document.getElementsByClassName("header");
    go_back_head[0].addEventListener("click",back,false);
    shop_hover=document.getElementsByClassName("shop_hover");
    for(let i=0;i<shop_hover.length;i++)
        shop_hover[i].addEventListener("mouseover",function(){shop(i)},false);
    for(let i=0;i<shop_hover.length;i++)
        shop_hover[i].addEventListener("mouseleave",function(){shop_back(i)},false);
}
function left_handler(e){
    if(open_left==false){
        id=document.getElementsByClassName("left-list");
        id2=document.getElementsByClassName("list-left");
        id[0].setAttribute("class","left-list left-right-list-open");
        for(let i=0;i<id2.length;i++){
            id2[i].setAttribute("class","list-left list-left-open");
        }
        content_black();
        setTimeout(function(){ open_left=true;console.log(open_left); }, 200);
        e.preventDefault();
    }
}
function right_handler(e){
    if(open_right==false){
        id=document.getElementsByClassName("right-list");
        console.log(id[0]);
        id[0].setAttribute("class","right-list left-right-list-open");
        content_black();
        setTimeout(function(){ open_right=true;console.log(open_right); }, 200);
        e.preventDefault();
    }
}
function back(e){
    if(open_left==true){
        id=document.getElementsByClassName("left-right-list-open");
        id[0].setAttribute("class","left-list");
        id2=document.getElementsByClassName("list-left list-left-open");
        for(let i=0;i<id2.length;){
            id2[i].setAttribute("class","list-left");
        }
        open_left=false;
        content_back()
        e.preventDefault();
    }
    else if(open_right==true){
        id=document.getElementsByClassName("right-list left-right-list-open");
        id[0].setAttribute("class","right-list");
        open_right=false;
        content_back()
        e.preventDefault();
    }
}
function content_black(){
    id=document.getElementsByClassName("hover_all");
    id[0].setAttribute("class","hover_all hover_all_black");
}
function content_back(){
    id=document.getElementsByClassName("hover_all hover_all_black");
    id[0].setAttribute("class","hover_all");
}
function shop(i){
    id=document.getElementsByClassName("shop_hover_text");
    id[i].setAttribute("class","shop_hover_text shop_hover_text_display");
}
function shop_back(i){
    id=document.getElementsByClassName("shop_hover_text_display");
    id[0].setAttribute("class","shop_hover_text");
}

window.addEventListener("load",start,false);
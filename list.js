var items = [];

function build(){
    // console.log("hi");
    let cnt = 0;
    let str = "";
    let len = items.length;
    // console.log(len/4);
    for(let i=0;i<4;i++){
        str+='<div class="col">';
        if(!i){
            str+='<div class="shop" id="ho"><div class="hover_all"></div></div>';
        }
        for(let j=0;j<parseInt(len/4);j++){
            // console.log(j);
            let idx = cnt++;
            str+='<div class="shop">';
            str+='<a href="Shop_Instruction.html?shop='+idx+'">';
            str+='<div class="shop_hover">'
                  str+='<div class="shop_hover_text">';
                    str+=items[idx].name;
                str+='</div>';
                str+='</div>';
                str+='<div class="hover_img">'
                  str+='<img src="圖包/'+idx+'-1.jpg" alt="">';
                str+='</div>';
                str+='<div class="text">';
                  str+='<div>店名:'+items[idx].name+'</div>';
                  str+='<div>Open time:'+items[idx].opentime+'</div>';
                str+='</div>';
              str+='</a>';
            str+='</div>';
        }

        if(len%4>=i+1){
            let idx = cnt++;
            str+='<div class="shop">';
            str+='<a href="Shop_Instruction.html?shop='+idx+'">';
            str+='<div class="shop_hover">'
                  str+='<div class="shop_hover_text">';
                    str+=items[idx].name;
                  str+='</div>';
                str+='</div>';
                str+='<div class="hover_img">'
                  str+='<img src="圖包/'+idx+'-1.jpg" alt="">';
                str+='</div>';
                str+='<div class="text">';
                  str+='<div>店名:'+items[idx].name+'</div>';
                  str+='<div>Open time:'+items[idx].opentime+'</div>';
                str+='</div>';
              str+='</a>';
            str+='</div>';
        }
        str+='</div>';
    }
    document.getElementsByClassName("content")[0].innerHTML=str;
}


$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/1PfwNgNqYSLfCjUcHyPFTHNekRnu89SYh0rdzTuwtPtM/1/public/values?alt=json', function(data) {
    var d = data.feed.entry;
    for(let i in d){
        let item = {};
        item.name = d[i].gsx$name.$t;
        item.opentime = d[i].gsx$opentime.$t;
        item.address = d[i].gsx$address.$t;
        item.phone = d[i].gsx$phone.$t;
        items.push(item);
    }
    build();
  });
});
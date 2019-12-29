
function getValue(varname)
{
  var url = window.location.href;
  var qparts = url.split("?");
  if (qparts.length == 0){return "";}
  var query = qparts[1];
  var vars = query.split("&amp;");
  var value = "";
  for (i=0; i<vars.length; i++)
  {
    var parts = vars[i].split("=");
    if (parts[0] == varname)
    {
      value = parts[1];
      break;
    }
  }
  value = unescape(value);
  value.replace(/\+/g," ");
  return parseInt(value);
}


$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/1PfwNgNqYSLfCjUcHyPFTHNekRnu89SYh0rdzTuwtPtM/1/public/values?alt=json', function(data) {
    var d = data.feed.entry;
    var i = getValue("shop");
    var item = {};
    item.name = d[i].gsx$name.$t;
    item.opentime = d[i].gsx$opentime.$t;
    item.address = d[i].gsx$address.$t;
    item.phone = d[i].gsx$phone.$t;
    document.getElementsByClassName("contact")[0].innerHTML="<h1>"+item.name+"<h1>"+
                                                            "<div>Open time:"+item.opentime+"</div>"+
                                                            "<div>地址:"+item.address+"</div>"+
                                                            "<div>電話:"+item.phone+"</div>";
    });
});
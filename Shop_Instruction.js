
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
  return value;
}

$(function() {
    var shop = getValue("shop");
    $.getJSON("Shop_data.json","", function(data) {
        var d = data;
        for(var i in d) {
            if(d[i].gsx$name.$t==shop){
                tem.name = d[i].gsx$name.$t;
                item.longitude = d[i].gsx$longitude.$t;
                item.latitude = d[i].gsx$latitude.$t;
                item.phone = d[i].gsx$phone.$t;
                items.push(item);
            }
        }
    })
});
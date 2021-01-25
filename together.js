
$("document").ready(function () {
  loadGoods();
  //showCart();
});

function loadGoods() {
  $.getJSON("server/catalog.json", function (data) {
    var out = "";
    var out1 = "";
    var out2 = "";
    var out3 = "";
    for (var key in data) {
      if (data[key]["filter"] == "done2020") {
        out+='<div class="box">';
        out+='<div class="FlexCorToRow">';
        out+='<div class="smallIconLeft">';
        out+= '<div class="box_smallIconLeft">'+data[key]["language"]+'</div>'
        out+=  '</div>';
        out +='<div class="smallIconMid">';
        if(data[key]["bookOrAudio"]==="Book")
          out +='<div class="box_smallIconMid">'+data[key]["bookOrAudio"]+'</div>';
        else
          out +='<div class="box_smallIconMid_audio">'+data[key]["bookOrAudio"]+'</div>';

            out +='</div>';
            out +='<div class="smallIconRight">';
            out += '<div class="box_smallIconRight">'+data[key]["rightNowOnPage"]+'/'+data[key]["Pages"]+'</div>';
          out +='</div>';

        out +='</div>';
        
        out +='<img src="'+ data[key]["img"] +'" alt="">';
        out +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
        out +='</div>';;
      }
      if (data[key]["filter"] == "done2021") {
        out1+='<div class="box">';
        out1+='<div class="FlexCorToRow">';
        out1+='<div class="smallIconLeft">';
        out1+= '<div class="box_smallIconLeft">'+data[key]["language"]+'</div>'
        out1+=  '</div>';
        out1 +='<div class="smallIconMid">';
        if(data[key]["bookOrAudio"]==="Book")
          out1 +='<div class="box_smallIconMid">'+data[key]["bookOrAudio"]+'</div>';
        else
          out1 +='<div class="box_smallIconMid_audio">'+data[key]["bookOrAudio"]+'</div>';

            out1 +='</div>';
            out1 +='<div class="smallIconRight">';
            out1 += '<div class="box_smallIconRight">'+data[key]["rightNowOnPage"]+'/'+data[key]["Pages"]+'</div>';
          out1 +='</div>';

        out1 +='</div>';
        
        out1 +='<img src="'+ data[key]["img"] +'" alt="">';
        out1 +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
        out1 +='</div>';
      }
      if (data[key]["filter"] == "reading") {

  
    
        out2+='<div class="box">';
        out2+='<div class="FlexCorToRow">';
        out2+='<div class="smallIconLeft">';
        out2+= '<div class="box_smallIconLeft">'+data[key]["language"]+'</div>'
        out2+=  '</div>';
        out2 +='<div class="smallIconMid">';
        
        if(data[key]["bookOrAudio"]==="Book")
          out2 +='<div class="box_smallIconMid">'+data[key]["bookOrAudio"]+'</div>';
        else
          out2 +='<div class="box_smallIconMid_audio">'+data[key]["bookOrAudio"]+'</div>';

            out2 +='</div>';
            out2 +='<div class="smallIconRight">';
            out2 += '<div class="box_smallIconRight">'+data[key]["rightNowOnPage"]+'/'+data[key]["Pages"]+'</div>';
          out2 +='</div>';

        out2 +='</div>';
        
        out2 +='<img src="'+ data[key]["img"] +'" alt="">';
        out2 +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
        out2 +='</div>';




      }
      if (data[key]["filter"] == "toread") {
        out3+='<div class="box">';
        out3+='<div class="FlexCorToRow">';
        out3+='<div class="smallIconLeft">';
        out3+= '<div class="box_smallIconLeft">'+data[key]["language"]+'</div>'
        out3+=  '</div>';
        out3 +='<div class="smallIconMid">';
        if(data[key]["bookOrAudio"]==="Book")
          out3 +='<div class="box_smallIconMid">'+data[key]["bookOrAudio"]+'</div>';
        else
          out3 +='<div class="box_smallIconMid_audio">'+data[key]["bookOrAudio"]+'</div>';
          
            out3 +='</div>';
            out3 +='<div class="smallIconRight">';
            out3 +='<div class="box_smallIconRight">'+data[key]["rightNowOnPage"]+'/'+data[key]["Pages"]+'</div>';
          out3 +='</div>';

        out3 +='</div>';
        
        out3 +='<img src="'+ data[key]["img"] +'" alt="">';
        out3 +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
        out3 +='</div>';
      }
    }
    $("#res").html(out);
    $("#res1").html(out1);
    $("#res2").html(out2);
    $("#res3").html(out3);
  });
}


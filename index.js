var cardlist = "";
var cardArr = [];
var deckCont = 0



function carregaDeck(){
    $("#cards").html("");
    deckCont = 0
    cardlist = String($("#string").val())
    console.log(cardlist)
    setCookie("deckstring",cardlist,360)
    cardArr = cardlist.split(",");
    cardArr.forEach(escreveCards)
    $("#qtd").html("Cards total: "+deckCont)
    $('#tabdeck').click();
    
}
function escreveCards(item, index) {
    
    var card = cardArr[index].split("=");
    var qtd = card[1];
    deckCont = deckCont + parseInt(qtd)
    var splitLocal=card[0].split("_");
    var local = ""
    console.log(splitLocal)
    switch(splitLocal[1]) {
		case "WX01":
			local="/EN_CCS_WX01/"
			break;
        case "W54":
        local = "EN_BDG_W54/";
          break;
        case "W47":
          local = "EN_BD_W47/";
          break;
        default:
          // code block
      }
    var urlIMG = "http://jktcg.com/WS_EN/"+local+card[0]+".jpg"
    
    $("#cards").html($("#cards").html()+"<div class='column'><div class='ui fluid card'><div class='image'><img src='"+urlIMG+"'/></div><div class='extra content'><span><i title='ID' class='file alternate icon'></i>"+card[0]+"</span> <span title='Quantidade' class='right floated'><i class='close icon'></i>"+card[1]+"</span></div></div>");
}
$( document ).ready(function() {
    $('.tabular.menu .item').tab();
    $('#tabhash').click();
    if (getCookie("deckstring")!=""){
        $("#string").html(getCookie("deckstring"));
    }
    
});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cname + "=" + cvalue + ";" + expires + ";path=/")
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
 
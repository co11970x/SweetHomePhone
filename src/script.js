var button_audio=new
Audio("https://monoame.com/awi_class/ballsound/click14.wav");
button_audio.play();

var screen_audio=new
Audio("https://monoame.com/awi_class/ballsound/click18.wav");
screen_audio.play();

var main_audio=new
Audio("https://monoame.com/awi_class/ballsound/click23.wav");
main_audio.play();

var wiggle_audio=new
Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");
wiggle_audio.play();



$(".i6").click(
	function(){
		$(".phone").css("width","270px")
		$(".screen").css("height","440px")
		$(".phonename").text($(this).text())
		button_audio.play();
	}

);

var page=1;
var b1=new Boolean();
$("h1").click(
	function(){
		page=-1;
		main_audio.play();
	}
);

$(".page1,.page2,.page3").click(
	function(){
		page++;
		if(page>3 ){
			page=2;
			b1=true;
		}
		else if(b1==true){
			page=1;
			b1=false;
		}
		
		$(".pages").css("left","-"+page*100+"%")
		screen_audio.play();
		

		
	}
	);
$(".button").click(
	function(){
		page=1;
		$(".pages").css("left","-"+page*100+"%")
		main_audio.play();
	}
);


var b2=new Boolean();
var ol=1
$(".turn").click(
	function(){
		
	if(b2==false){
		$(".phone").css("transform", "rotate"+"("+ol*360+"deg)")
		ol++;
		b2=true;
	} 
		else if(b2==true){
		$(".phone").css("transform", "rotate"+"("+ol*360+"deg)")
		ol++;
		b2=false;
	}
		//$(".phone").css("transform", "rotate(0deg)")
	});
$(".wiggle").click(function(){
	wiggletime= 1;
}
);

var wiggletime=22;
setInterval(function(){
	if(wiggletime<=20){
		wiggletime++;
		console.log(wiggletime);
		if(wiggletime%2==1){
			$(".phone").css("left","-30px");
		}else{
			$(".phone").css("left","30px");
		}
		if(wiggletime==21){
			$(".phone").css("left","");
		}
		wiggle_audio.play();
	}
},80);

var shoplist={};
shoplist.name="購物清單";
shoplist.time="2016/9/10";
//建立陣列

shoplist.list=[
  {name: "吹風機",price: 300},
  {name: "麥克筆",price: 9000},
  {name: "筆記型電腦",price: 54555}
];
//商品列表


var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";
var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";
//HTML 數值套入

function showlist(){
  $("#items_list").html("");
  var total_price=0;
//清空項目

	for(var i=0;i<shoplist.list.length;i++){
    var item=shoplist.list[i];
    var item_id="buyitem_"+i;
    var del_item_id="del_buyitem_"+i;
//重新建立列表

    total_price+=parseInt(item.price);//新增欄位
    
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{id}}",item_id)
                 .replace("{{del_id}}",del_item_id)
                 .replace("{{price}}",item.price)
                 .replace("{{del_item_id}}",i)
		//數值替換

    ;
    
    $("#items_list").append(current_item_html);
    $("#"+del_item_id).click(
      function(){
        remove_item(parseInt($(this).attr("data-delid")));
      }
    );
  }

  var current_total_html=
      total_html.replace("{{price}}",total_price);
  $("#items_list").append(current_total_html);
}
//總價

showlist();
//執行後,程式只會跑一次
	$(".addbtn").click(
		function(){
			if(shoplist.list.length<=2){
			shoplist.list.push(
				{
					
						name:$("#input_name").val(),
						price: $("#input_price").val()
					
				}
				
			);
			}
			$("#input_name").val("");
			$("#input_price").val("");
		
			showlist();
			
		}

	);


//val("")->()裡給數值..
//push重新重整清單

function remove_item(id){
  shoplist.list.splice(id,1);
  showlist();
}
//刪除商品列


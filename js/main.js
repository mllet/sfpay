$(function () {
    //轮播图片
    var winW = $(window).width();
    $(".slider").find("ul").width(winW * 3);
    $(".slider").find("ul li").width(winW);
    $(window).resize(function () {
        winW = $(window).width();
        $(".slider").find("ul").width(winW * 3);
        $(".slider").find("ul li").width(winW);
    });
    var silderIndex = 0;
    $(".slider").find("dl dd").click(function () {
        silderIndex = $(this).index();
        $(".slider").find("ul").animate({"left": -silderIndex * winW + "px"}, 500);
        $(this).addClass("act").siblings().removeClass("act");
    });
    function sliderAuto () {
        silderIndex++;
        if (silderIndex > 1) {
            silderIndex = 0;
        }
        $(".slider").find("ul").animate({"left": -silderIndex * winW + "px"}, 500);
        $(".slider").find("dl dd").eq(silderIndex).addClass("act").siblings().removeClass("act");
    }
    var timer = setInterval(sliderAuto, 2000);
    $(".slider").hover(function () {
        clearTimeout(timer);
    }, function () {
        timer = setInterval(sliderAuto, 2000);
    });
    //登录弹出框
    $(".loginBtn").click(function (event) {
        event.preventDefault();
        $(".mask").show();
        $(".logTc").show();
        $(".close").click(function () {
            $(".mask").hide();
            $(".logTc").hide();
        });
    });
    $(".logTc p.p1").find("input").focus(function () {
        $(this).css("border-color", "#249cda");
    });
    $(".logTc p.p1").find("input").blur(function () {
        $(this).css("border-color", "#d2d2d2");
    });
    $(".dlCon p.p3 input").hover(function () {
        $(this).css("background", "#24aaf0");
    }, function () {
        $(this).css("background", "#249cda");
    });
    $("#loginname").blur(function () {
        var username = $("#loginname").val();
        if (username != "") {
            $("#loginname").parent().prev().html("");
        }
    });
    $("#loginpassword").blur(function () {
        var password = $("#loginpassword").val();
        if (password != "") {
            $("#loginpassword").parent().prev().html("");
        }
    });
  
    //注册页面
    $(".rad").click(function () {
        var radIndex = $(this).attr("value");
        if (radIndex == 1) {
            $("#weberinfo").show();
            $("#adverinfo").hide();
        } else {
            $("#weberinfo").hide();
            $("#adverinfo").show();
        }
    });
    $(".zcBtn").hover(function () {
        $(this).css("background", "#38bbff");
    }, function () {
        $(this).css("background", "#249cda");
    });
	
	$('.serviceTerm').on('click',function(){
		if($('#openxieyi').length==0){
			layer.open({
				type:1,
				id :'openxieyi',
				title : '注册协议',
				content : xieyi,
				area: ['500px', '300px']
			});
		}
	});
	
});


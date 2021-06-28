$(document).ready(function(){
    //scrollTop
    $("header ul li").click(function(){
        let $rel = $(this).attr("rel");
        console.log($rel);
        $("html, body").stop().animate({scrollTop:$("section." + $rel).offset().top}, 1000);
        
        let $index = $(this).index();
        console.log($index);
        $("header ul li").removeClass("active");
        $(this).addClass("active");


        
        return false;
    });

    let elm = ".box";
    $(elm).each(function(index){
        $(this).on("mousewheel DOMMouseScroll", function(e){
            e.preventDefault();
            console.log(e);
            let delta = 0;
            console.log(event.wheelDelta);
            console.log(e.detail);
            if(event.wheelDelta){
                delta = event.wheelDelta / 120;
                if(window.opera){
                    delta = -delta;
                }
            }else if(e.detail){
                delta = -e.detail / 3;
            }
            let moveTo = $(window).scrollTop();
            let elmIndex = $(elm).eq(index);
            console.log(elmIndex);
            if(delta < 0){
                try{
                    if($(elmIndex).next() != undefined){
                        moveTo = $(elmIndex).next().offset().top;
                        console.log(moveTo);
                        $(".box").removeClass("active");
                        $(elmIndex).next().addClass("active");
                        let $cur_index = $(".box.active").index();
                        console.log($cur_index);
                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                        $("header").removeClass("show");
                    }
                }catch(e){
                    console.log("예외처리");
                }
            }else{
                try{
                    if($(elmIndex).prev() != undefined){
                        moveTo = $(elmIndex).prev().offset().top;
                        console.log(moveTo);
                        $(".box").removeClass("active");
                        $(elmIndex).prev().addClass("active");
                        let $cur_index = $(".box.active").index();
                        console.log($cur_index);
                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                        $("header").addClass("show");
                    }
                }catch(e){
                    console.log("예외처리");
                }
            }
            $("html, body").stop().animate({scrollTop : moveTo + "px"}, 800);
        });
    });

    //type_text
    let typed = new Typed('.typed', {
        strings : ["Hi!", "I'm Developer.", "Welcome to visit Here", "I'm YOUNG SAK YUN"],  //브라우저 화면에 띄워줄 문구
        stringsElement : null,  //초기 상태에서 공간을 비운다
        typeSpeed : 100,  //타이핑 속도
        backSpeed : 20,  //backspace의 속도
        smartBackspace : true,  //동일한 값 또는 문구가 존재할 때 backspace로 제거하지 못하도록 구성 후, 다음 문장을 표현
        startDelay : 1000,  //1초후 타이핑을 통해서 글자가 작성되도록 시간을 지연시킴
        backDelay : 1000,  //첫번째 문장을 모두 작성되게 한 후, 1초 후에 backspace가 진행되도록 만듬
        loop : false,  //타이핑 문장 반복(true 또는 false)
        showCursor : true,
        cursorChar : '.',  //커서의 형태를 지정
        autoInsertCss : true
    });

    


    //슬라이드 배열
    let $sli_arr = [
        ["slide_01", "0", "kuliner 사이트", "구글 API를 이용한 구글 지도를 삽입해봤습니다.", "https://dbsdudtkr.github.io/kuliner/", "orange", "white", "gray"],
        ["slide_02", "1", "고정형 사이트", "건축사이트 입니다.", "https://dbsdudtkr.github.io/inspace/", "white", "gray", "orange"],
        ["slide_03", "2", "반응형 사이트", "HTML,CSS로 만든 반응형 웹입니다.", "https://dbsdudtkr.github.io/Origin/", "green", "white", "orange"],
        ["slide_04", "3", "어플리케이션", "구글 API를 연동하여 제작해봤습니다.", "https://dbsdudtkr.github.io/weatherApp1/", "blue", "white", "gray"],
        ["slide_05", "4", "DB 연동사이트", "실제 운영되는 홈페이지처럼 제작해봤습니다.", "http://dudtkr5388.dothome.co.kr/website/", "orange", "white", "gray"]
    ];
    let $sli_case = `
    <li class="slide_01" rel="0">
        <div class="port_img">
            <div class="site_img"></div>
            <div class="frame_img"></div>
        </div>
        <div class="port_txt">
            <div class="mid_context">
                <h2 class="tit">Kuliner</h2>
                <p></p>
                <div class="color">
                    <h3>사용 색감 : </h3>
                    <div class="cir"></div>
                    <div class="cir"></div>
                    <div class="cir"></div>
                </div>
                <a href="https://dbsdudtkr.github.io/kuliner/" target="_blank">Visit Site</a>
            </div>
        </div>
    </li>    
    `;
    for(i=0; i<$sli_arr.length; i++){
        $(".portfolio .slider ul").append($sli_case);
    }
    $(".portfolio .slider ul li").each(function(index){
        $(this).attr("class", $sli_arr[index][0]);
        $(this).attr("rel", $sli_arr[index][1]);
        $(this).find(".cir").eq(0).css("background-color", $sli_arr[index][5]);
        $(this).find(".cir").eq(1).css("background-color", $sli_arr[index][6]);
        $(this).find(".cir").eq(2).css("background-color", $sli_arr[index][7]);
        $(this).find("h2").text($sli_arr[index][2]);
        $(this).find("p").text($sli_arr[index][3]);
        $(this).find("a").attr("href", $sli_arr[index][4]);
    });

    $(".portfolio .slider ul li a").click(function(){
       // return false; -> a태그의 모든 속성을 봉쇄시킴
    });

    let $last_child = $(".portfolio .slider ul li").last();
    $(".portfolio .slider ul").prepend($last_child);


    setInterval(function(){

        let $hover = $(".slider").hasClass("hover");
    
        if($hover == true){
            //작동x
        }else{
            let $f_child = $(".portfolio .slider ul li").first();
            console.log($f_child);
            $(".portfolio .slider ul").stop().animate({"margin-left":"-100%"}, 1000, function(){
                $(this).append($f_child).css("margin-left", "0%");

                let $cur_show = $(".portfolio .slider ul li:eq(0)").attr("rel");
                console.log($cur_show);    //이미 애니메이션 동작과 문서조작이 완료된 시점에서 화면에 보여지는 li의 rel 속성값을 받아온다.
                $(".portfolio .slider ol li").removeClass("active");
                $(".portfolio .slider ol li").eq($cur_show).addClass("active");   


            });
        }
    }, 40000);    

    //#2. 슬라이드 공간에 마우스 오버시 자동 슬라이드 일시정지 기능 부여. hover라는 클래스명이 마우스의 진입여부를 판단
    $(".slider").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });

    $(".slider .prev").click(function(){
        let $l_child = $(".slider ul li").last();
        $(".slider ul").stop().animate({"margin-left": "0%"}, 1000, function(){
            $(".slider ul").prepend($l_child).css("margin-left", "-100%");

            let $cur_show = $(".portfolio .slider ul li:eq(1)").attr("rel");
            console.log($cur_show);    //이미 애니메이션 동작과 문서조작이 완료된 시점에서 화면에 보여지는 li의 rel 속성값을 받아온다.
            $(".portfolio .slider ol li").removeClass("active");
            $(".portfolio .slider ol li").eq($cur_show).addClass("active");               
        });
        return false;
    });

    $(".slider .next").click(function(){
        let $f_child = $(".slider ul li").first();
        $(".slider ul").stop().animate({"margin-left":"-200%"}, 1000, function(){
            $(".slider ul").append($f_child).css("margin-left", "-100%");

            let $cur_show = $(".portfolio .slider ul li:eq(1)").attr("rel");
            console.log($cur_show);    //이미 애니메이션 동작과 문서조작이 완료된 시점에서 화면에 보여지는 li의 rel 속성값을 받아온다.
            $(".portfolio .slider ol li").removeClass("active");
            $(".portfolio .slider ol li").eq($cur_show).addClass("active");               
        });
        return false;
    });



    /*구글 api*/
        $(".close").click(function(){
        $(".thankyou_message").hide();
        return false;
    });

    //svg 원형바
    let sec_height = $(window).height();
    console.log(sec_height);
    let sec_height_half = sec_height / 2;
    console.log(sec_height_half);

    let target_svgBox_top = $("#circle_bar").closest(".box").offset().top;
    console.log(target_svgBox_top);
    $(window).scroll(function(){
        let $scrollTop = $(window).scrollTop();
        if($scrollTop > target_svgBox_top - 1){
            $(".case").each(function(){
                let sel_count = $(this).find(".count").text();
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "calc(440 - (440 * " + sel_count + ") / 100)");
            });
        }else{
            $(".case").each(function(){
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "440");
            });
        }
    });

    //원형바 배열
    let $pd_arr = [
        ["HTML", "95"],        
        ["css", "90"],        
        ["jQuery", "85"],
        ["Photoshop,Illustrator", "70"]
    ];
    let $pd_case = `
    <div class="case">
        <div class="cont">
            <div class="top">
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70"/>
                </svg>
                <div class="num">
                    <h2>
                        <span class="count">95</span>
                        <span>%</span>
                    </h2>
                </div>
            </div>
            <div class="bottom">
                <h2 class="cont_text">HTML5</h2>
            </div>
        </div>
    </div>    
    `;
    for(i=0; i<$pd_arr.length; i++){
        $(".cont3 #circle_bar .frame").append($pd_case);
    }
    $(".cont3 #circle_bar .frame .case").each(function(index){
        $(this).find(".cont_text").text($pd_arr[index][0]);
        $(this).find(".count").text($pd_arr[index][1]);
    });

    //top_btn
    $(".top_btn").click(function(){
        $("html, body").animate({scrollTop:$(".intro").offset().top}, 1000);
        return false;
    });   
    
    //popup

    $(".tab_box .circle").click(function(){
        $(".dark").addClass("active");
        $(".popup").addClass("active");
    });
    $(".tab_box .circle:last-child").click(function(){
        $(".dark").addClass("active");
        $(".popup_second").addClass("active");
    });

    $(".close").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
    });
    $(".close").click(function(){
        $(".dark").removeClass("active");
        $(".popup_second").removeClass("active");
    });














    function resizeEvt(){
        var $port_mac = $(".port_img").width();
        console.log("초기 진행!!!!!");
        // let $mac_h = $port_mac * 0.87;
        var $mac_h = $port_mac * 0.87;
        $(".port_img").css("height", $mac_h);
    }
    resizeEvt();

    //1233 : 1072 = 1 : x
    $(window).resize(function(){
        resizeEvt();
    });


});
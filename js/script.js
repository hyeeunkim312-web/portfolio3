



$(function(){

    $(".side-menu li").hover(
        function(){
            const $a = $(this).find("a");
            const $span = $(this).find("span");
            const $img = $(this).find("img");

            $span.css({ opacity: 1, position: "absolute", visibility: "hidden" });
            const textWidth = $span.outerWidth();
            const iconWidth = $img.outerWidth(true);
            const padding = 35; 

            const autoWidth = iconWidth + textWidth + padding;

            $span.css({ position: "", visibility: "" });

            $a.stop().animate({ width: autoWidth + "px" }, 200);
            $span.css("opacity", "1");
        },
        function(){
            $(this).find("a").stop().animate({ width: "70px" }, 200);
            $(this).find("span").css("opacity", "0");
        }
    );

});

document.getElementById("topBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};



$(document).on("input", "#phone", function(){

    let value = $(this).val().replace(/[^0-9]/g, "");
    let result = "";

    if (value.length <= 3) {
        result = value;
    } else if (value.length <= 7) {
        result = value.slice(0, 3) + "-" + value.slice(3);
    } else {
        result = value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7, 11);
    }

    $(this).val(result);
});

/* 기본 제출 막기 (테스트용) */
$("#contactForm").on("submit", function(e){
    e.preventDefault();
    alert("신청이 완료되었습니다.");
});






var swiper = new Swiper(".mySwiper2", {
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1.1,     // 0 ~ 599
  spaceBetween: 15,      // 0 ~ 599 (1개라 의미없음)

  breakpoints: {


    860: {              // 600 ~ 1499
      slidesPerView: 2,
      spaceBetween: 80
    },
    1500: {             // 1500 ~ 2055
      slidesPerView: 2.26,
      spaceBetween: 148
    },
    2056: {             // 2056 이상
      slidesPerView: 3,
      spaceBetween: 148
    }
  }



  
});




$(function() {
    function updateAOSForMobile() {
        const isMobile = window.innerWidth <= 1200;

        $(".aos-init").each(function() {
            if ($(this).hasClass("main03_im1")) {
                $(this).attr("data-aos-delay", isMobile ? "0" : "500");
                $(this).attr("data-aos-duration", isMobile ? "1000" : "3000");
            }
            if ($(this).hasClass("main03_im_t")) {
                $(this).attr("data-aos-delay", isMobile ? "150" : "450");
            }
            if ($(this).hasClass("d_txt1")) {
                $(this).attr("data-aos-delay", isMobile ? "200" : "300");
            }
        });

        AOS.refresh();
    }

    updateAOSForMobile();
    $(window).on("resize", updateAOSForMobile);
});
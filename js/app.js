$(window).on('load', function() {
    $('.select-selected').css("visibility", "hidden");
    $('.logo').fadeOut(0)
    $('.welcome').fadeOut(0).fadeIn(2000, function() {
        $('.logo').fadeIn(1000);
    });
    $(".preloader").delay(3500).slideUp(750, function() {
        $('body').removeClass('loading');
        $('.preloader').fadeOut(500);
        $('.select-selected').css("visibility", "visible");
    });

    $(".reload").fadeOut()

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1080) {
          $('.reload:hidden').stop(true, true).fadeIn();
      } else if ($(this).scrollTop() == 1080) {
          $('.reload').stop(true, true).fadeOut();
      } else {
        $('.reload').stop(true, true).fadeOut();
      }
    });
});

$(".more").hide()

$("#viewmore").on('click', function() {
  $(".more").fadeIn(2000);
  $(this).fadeOut(100);
})

$(".reload").on('click', function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".preloader").offset().top
  }, 1500);
})

var videoModalbtn = $(".previewmax");
var videoModalbtn1 = $(".preview");
var videoModal = $("#videoModal");


function openVideo(num) {
  videoModal.css("display", "block");
  $(".videoModal-body " + num).css("display", "block");
  $('body').addClass('loading');
}

function closeVideo() {
  videoModal.css("display", "none");
  $('body').removeClass('loading');
  $('.video').siblings("video").hide();
}

function outsideClick(e) {
  if(e.target == videoModal) {
    videoModal.style.display = 'none';
  }
}

$(videoModalbtn).on('click', function() {
    // this.append wouldn't work
    var clickedBtnID = "#" + $(this).attr('id')
    openVideo(clickedBtnID)
});

$(videoModalbtn1).on('click', function() {
    // this.append wouldn't work
    var clickedBtnID = "#" + $(this).attr('id')
    openVideo(clickedBtnID)
});
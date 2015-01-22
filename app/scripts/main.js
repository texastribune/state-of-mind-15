'use strict';

$(document).ready(function() {
  $('.video-container').fitVids();

    // Rotating Ad
  var roofline = {
    interval: 15 * 1000,
    desktopAds: $('.rotating-ad-container').children('.mobile-hide').find('.rotating-ad'),
    mobileAds: $('.rotating-ad-container').children('.desktop-hide').find('.rotating-ad'),
    init: function(){
      if (roofline.desktopAds.length <= 1 && roofline.mobileAds.length <= 1) {
        return false;
      }
      roofline.desktopAds.eq(0).addClass('active');
      roofline.mobileAds.eq(0).addClass('active');
      roofline.desktopAds.filter(':gt(0)').removeClass('active').hide();
      roofline.mobileAds.filter(':gt(0)').removeClass('active').hide();
      this.timer = setTimeout(roofline.flip, roofline.interval);
    },
    showNext: function(ad){
      var next = ad.next('.rotating-ad');
      if (!next.length) {
        next = ad.siblings('.rotating-ad').eq(0);
      }
      next.addClass('active').show();
    },
    flip: function(){
      var active, self = roofline;
      if (self.timer) {
        // debounce
        clearTimeout(self.timer);
      }
      active = self.desktopAds.filter('.active').removeClass('active').hide();
      self.showNext(active);
      active = self.mobileAds.filter('.active').removeClass('active').hide();
      self.showNext(active);
      roofline.timer = setTimeout(roofline.flip, roofline.interval);
    },
    stop: function(){
      if (roofline.timer) {
        clearTimeout(roofline.timer);
      }
    }
  };

  roofline.init();
});

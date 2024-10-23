(function($) {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  const body = $("body");
  body.prepend(`<style>
    :root {
      --scroll-width: ${scrollbarWidth}px;
    }
  </style>`);

  var wWidth = $(window).width(), wHeight = $(window).height(), hasFired = false, timeOut, flagLoading = 1;
  const wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       50,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  );

  $(document).ready(function() {
    CheckEmptyField();
    $('.map-network-directory__switch, .switch').keypress(function(e) { // Attach the form handler to the keypress event
      if (e.keyCode == 13) { // If the the enter key was pressed.
        $(this).click(); // Trigger the button(elementId) click event.
        return e.preventDefault(); // Prevent the form submit.
      }
    });
    moveBody();
    wrapTable();
    $(".map-network-directory__results-items-wrap").mCustomScrollbar();
    menuItemJS()
    $('[data-fancybox]').fancybox({
      smallBtn : true,
    })
    setTimeout(function (){
      body.addClass('loaded');
      setTimeout(function (){
        body.addClass('end-loaded');
      }, 1000);
      wow.init();
    }, 300);
    wrapHead($('.head-animated'));
    menuChildItems();
    newsCarousel();
    muteVideo();
    promoBanner();
    initMobileMenu();
    initAccordion();
    initSearchForm();
    resourcesHover ();
    stickyChannelLinks();
    stickyChannelNavigation();
    filterOpenMobile();
    craftPopUp();
    bordersBtn();
    levelTabs();
    logosCarousel();
    quoteCarousel();
    stateLoad();
    searchClear();
    toogleNetwork();
    historyNav();
    historyNavFixed();
    fixedTimelineDesc();
    historyNavLinks();
    playVideo();
    contributingPopUp();
    readMoreMobile();
    horizontalListingPopUp();
    removeExtraSpaceModule();
    loadMoreNews();
    readMore();
    stickyFlexLinks();
    stickyFlexNavigation();
    initContactForms();
    initPostsFeedCarousel();
    initGalleryCarousel();
    initLargeGallery();
    initTestimonialsSlider();
    paginationAjax();
    initHeroCarousel();
    initInsightsFilters();
    userLoadMore();
    bannerHeight();
    document.addEventListener( 'wpcf7mailsent', function() {
      setTimeout(function(){
        $('.fancy-select .trigger').html("");
        $('.fancy-select .options li').removeClass("active");
      }, 500);
    }, false );
  });
  
  $(window).on("load", function() {
    fixedSidebar();
    bannerHeight();
    activateState();
    $('a.gs-title').on('click', function(){
      window.open($(this).attr('href'));
      return false;
    })
  });

  $(window).on("scroll", function() {
    stickyChannelNavigation();
    fixedSidebar();
    fixedHeader();
    historyNavFixed();
    historyNav();
    fixedTimelineDesc();
    loadMoreByScroll();
    stickyFlexNavigation();
  });
  
  $(window).on("resize", function() {
    wWidth = $(window).width();
    wHeight = $(window).height();
    fixedSidebar();
    bannerHeight();
  });

  /* start required functions */
  function readMore() {
    $('.more-content-btn').on( 'click' , function(e) {
      $(this).parent().prev().slideToggle();
      $(this).toggleClass('expanded');
      if($(this).hasClass('expanded')) {
        $(this).text('Read less');
      } else {
        $(this).text('Read more');
      }
      e.preventDefault();
    });
  }

  function initContactForms() {
    let formFields = $('.wpcf7-form input, .wpcf7-form select, .wpcf7-form textarea');
    formFields.focus(function(){
      $(this).addClass('filled');
      $(this).parent().prev().addClass('typed');
    });
    formFields.blur(function(){
      if($(this).val() === '') {
        $(this).removeClass('filled');
        $(this).parent().prev().removeClass('typed');
      }
    });
    var gSelect = $('form select');
    gSelect.fancySelect({});
    var mySelect = $('.search-wrap__left select');

    mySelect.fancySelect().on('change.fs', function() {
      $(this).trigger('change.$');
      $('.search-wrap__top form input[name="order"]').val($(this).val());
      $(this).val();
      $('.search-wrap__top form').trigger('submit');
    });

    gSelect.fancySelect().on('change.fs', function() {
      $(this).trigger('change.$');
      $(this).next('.trigger').html($(this).val());
    });

    $("input[type=file]").on("change", function(){
      var valFile = $(this).val().replace("C:\\fakepath\\",'');
      $(this).parent().siblings('.file-name').html('');
      $(this).parent().siblings('.file-name').html(valFile+"<a href='javascript:;' class='remove-file'>Remove</a>");
      $(this).next('.wpcf7-not-valid-tip').remove();
    });

    body.on('click', '.remove-file', function(){
      $(this).parent().siblings('.wpcf7-form-control-wrap').find('input').val('');
      $(this).parent().siblings('.wpcf7-form-control-wrap').find('.wpcf7-not-valid-tip').remove();  
      $(this).parent().html('');
    });

    $('.qty-wrap__minus').on('click' , function(e){
      if($(this).next().val() !== 1) {
        $(this).next().val($(this).next().val()*1 - 1);
      }
      e.preventDefault();
    });
    $('.qty-wrap__plus').on('click' , function(e){
      $(this).prev().val($(this).prev().val()*1 + 1); 
      e.preventDefault();
    })
  }

  function initGalleryCarousel() {
    if( $('.gallery-slider').length ) {
      $('.gallery-slider-2, .gallery-slider-3, .gallery-slider-4').on('init', function(){
        $('.gallery-slider .slick-arrow').wrapInner('<span class="hidden" />');
      });

      $('.gallery-slider-2, .gallery-slider-3, .gallery-slider-4').on('breakpoint', function(){
        $('.gallery-slider .slick-arrow').wrapInner('<span class="hidden" />');
      });

      $('.gallery-slider-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
      $('.gallery-slider-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
      $('.gallery-slider-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 3,
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
    }
  }

  function newsCarousel() {
    if( $('.home-slider').length ) {
      $('.home-slider').on('init', function(){
        $('.home-slider .slick-arrow').wrapInner('<span class="hidden" />');
      });
      $('.home-slider').on('breakpoint', function(){
        $('.home-slider .slick-arrow').wrapInner('<span class="hidden" />');
      });
      $('.home-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            }
          },
          {
            breakpoint: 500,
            settings: {
              variableWidth: false,
              slidesToScroll: 1,
              slidesToShow: 1.5,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
    }
    if( $('.other-slider').length ) {
      $('.other-slider').on('init', function(){
        $('.other-slider .slick-arrow').wrapInner('<span class="hidden" />');
      });
      $('.other-slider').on('breakpoint', function(){
        $('.other-slider .slick-arrow').wrapInner('<span class="hidden" />');
      });
      $('.other-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        // variableWidth: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            }
          },
          {
            breakpoint: 500,
            settings: {
              variableWidth: false,
              slidesToScroll: 1,
              slidesToShow: 1.5,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
    }
    if( $('.other-slider-small').length ) {
      $('.other-slider-small').on('init', function(){
        $('.other-slider-small .slick-arrow').wrapInner('<span class="hidden" />');
      });
      $('.other-slider-small').on('breakpoint', function(){
        $('.other-slider-small .slick-arrow').wrapInner('<span class="hidden" />');
      });
      $('.other-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        // variableWidth: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            }
          },
          {
            breakpoint: 500,
            settings: {
              variableWidth: false,
              slidesToScroll: 1,
              slidesToShow: 1.5,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
    }
  }

  function quoteCarousel() {
    if( $('.quotes-slider').length ) {
      $('.quotes-slider').on('init', function(){
        let c = $(this).find('.featured__quote').length;
        c = c.toString().padStart(2, "0");
        $(this).find('.slick-dots').wrapAll("<div class='quotes-slider-control'/>");
        $(this).find('.quotes-slider-control').prepend("<div class='quote-slider-number'><span class='current'>01</span> of <span>"+c+"</span></div>");
        if($(this).find('.featured__quote').length < 2){
          $(this).find('.quotes-slider-control').hide();
        }
      });
      $('.quotes-slider').on('breakpoint', function(){
        let c = $(this).find('.featured__quote').length;
        c = c.toString().padStart(2, "0");
        $(this).find('.slick-dots').wrapAll("<div class='quotes-slider-control'/>");
        $(this).find('.quotes-slider-control').prepend("<div class='quote-slider-number'><span class='current'>01</span> of <span>"+c+"</span></div>");
      });
      $('.quotes-slider').on('afterChange', function(event, slick, currentSlide){
        let c = currentSlide+1;
        c = c.toString().padStart(2, "0");
        $(this).find('.quote-slider-number .current').text(c);
      });

      $('.quotes-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        fade: true,
        // variableWidth: true,
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToScroll: 2,
        //       slidesToShow: 1,
        //       arrows: false,
        //       dots: true,
        //       variableWidth: false,
        //     }
        //   },
        //   {
        //     breakpoint: 500,
        //     settings: {
        //       variableWidth: false,
        //       slidesToScroll: 1,
        //       slidesToShow: 1.5,
        //       arrows: false,
        //       dots: true,
        //     }
        //   }
        // ]
      });
    }
  }

  function logosCarousel() {
    if( $('.our-partner-list--slider').length ) {
     let partnerSlider = $('.our-partner-list--slider');
      partnerSlider.on('init', function(){
        $('.our-partner-list--slider .slick-arrow').wrapInner('<span class="hidden" />');
        $(this).prepend('<a href="javascript:;" class="play-carousel active"><i class="icon-pause"></i><span class="hidden">Play</span></a>');
      });
      partnerSlider.on(' reInit', function(){
        $('.our-partner-list--slider .slick-arrow').wrapInner('<span class="hidden" />');
      });

      partnerSlider.on('breakpoint', function(){
        $('.our-partner-list--slider .slick-arrow').wrapInner('<span class="hidden" />');
        $(this).prepend('<a href="javascript:;" class="play-carousel active"><i class="icon-pause"></i><span class="hidden">Play</span></a>');
      });
      partnerSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 501,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 3,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
      body.on('click', '.play-carousel', function(){
        $('.our-partner-list--slider .slick-arrow').wrapInner('<span class="hidden" />');
        if ($(this).hasClass('active')){
          $(this).removeClass('active');
          $(this).find('i').removeClass('icon-pause').addClass('icon-arr-right');
          partnerSlider.slick("slickPause");
        }else{
          $(this).addClass('active');
          $(this).find('i').removeClass('icon-arr-right').addClass('icon-pause');
          partnerSlider.slick("slickPlay");
        }
      });
    }
  }
  function initHeroCarousel() {
    if( $('.flex-module-hero-slider__carousel').length ) {
      $('.flex-module-hero-slider__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide, nextSlide);
        if( $('.flex-module-hero-slider__carousel div[data-slick-index="' + currentSlide + '"] video').length) {
          $('.flex-module-hero-slider__carousel div[data-slick-index="' + currentSlide + '"] video')[0].pause();
        }
        if( $('.flex-module-hero-slider__carousel div[data-slick-index="' + nextSlide + '"] video').length) {
          $('.flex-module-hero-slider__carousel div[data-slick-index="' + nextSlide + '"] video')[0].play();
        }
      });
      $('.flex-module-hero-slider__carousel').slick({
        infinite: true,
        dots: true,
        arrows: true
      });
    }
  }
  function initLargeGallery() {
    if( $('.flex-module-large-gallery__carousel').length ) {
      $('.flex-module-large-gallery__carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,        
        responsive: [        
          {
            breakpoint: 600,
            settings: {
              centerPadding: "10px",
            }
          }       
        ]        
      });
    }
  }
  function initPostsFeedCarousel() {
    if( $('.flex-module-post-feed__list').length ) {
      $('.flex-module-post-feed__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        infinite: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [        
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true
            }
          }        
        ]
      });
    }
  }
  function initAccordion() {
    body.on('click', '.accordion-title-flex',function(e){
      if($(this).hasClass('current')) {
        $(this).removeClass('current');
        $(this).next().slideUp();
      } else {
        $(this).parents(".accordion-wrap-flex").find('.accordion-title-flex.current').next().slideUp();
        $(this).parents(".accordion-wrap-flex").find('.accordion-title-flex.current').removeClass('current');
        $(this).addClass('current');
        $(this).next().slideDown();
      }
      e.preventDefault();
    });

    $('.mob-accordion-title').on('click' , function(e){
      if (wWidth < 768) {
        if ($(this).hasClass('current')) {
          $(this).removeClass('current');
          $(this).next().slideUp();
        } else {
          $(this).parents(".mob-accordion-wrap").parent().parent().find('.mob-accordion-title.current').next().slideUp();
          $(this).parents(".mob-accordion-wrap").parent().parent().find('.mob-accordion-title.current').removeClass('current');
          $(this).addClass('current');
          $(this).next().slideDown();
        }
      }
      e.preventDefault();
    });

    $('.accordion-item__title').on('click' , function(e){
      if(!$(this).parents('.accordion-item').hasClass('opened')) {
        $(this).parents('.accordion').find('.accordion-item__desc').slideUp();
        $(this).parents('.accordion').find('.accordion-item').removeClass('opened');
        $(this).parents('.front-insights__inner').find('.accordion-data').removeClass('opened').hide();
        let sel = $(this).parents('.accordion-item').attr('data-detect');
        $(this).parents('.front-insights__inner').find('.accordion-data[data-detect="'+sel+'"]').fadeIn().addClass('opened');
        $(this).parents(".accordion-item").addClass('opened');
        $(this).next().slideDown();
      }
      e.preventDefault();
    });
  }

  function muteVideo(){
    $('.story-video__mute').click(function(){
      if($(this).parents('.story-video').find('video').prop('muted') ) {
        $(this).parents('.story-video').find('video').prop('muted', false);
        $(this).find('i').removeClass().addClass($(this).find('i').attr('data-change'));
        $(this).find('i').attr('data-change', 'icon-mute');
      } else {
        $(this).parents('.story-video').find('video').prop('muted', true);
        $(this).find('i').removeClass().addClass($(this).find('i').attr('data-change'));
        $(this).find('i').attr('data-change', 'icon-unmute');
      }
    });
  }

  function initSearchForm() {
    $('.search-icon').on('click' , function(e) {
      e.preventDefault();
      let This = $(this);
      $(this).next('.search-overlay').addClass('show');

      body.addClass('expanded-search');
      setTimeout(function(){
        This.next('.search-overlay.show').find('.keyword').focus();
      },400);
    });

    $('.search-overlay-close').on('click' , function(e) {
      e.preventDefault();
      $(this).parents('.filter-search').find('input').val('');
      $(this).parents('.filter-search').toggleClass('active');
      $(this).parents('.search-overlay').removeClass('show');
      body.removeClass('expanded-search');
      $(this).parents('.search-overlay').find('.search-overlay-results').html('');
    });

    body.on("click", function(e) {
      if (!$(e.target).parents(".search-overlay").length && !$(e.target).hasClass('search-overlay') && !$(e.target).hasClass("search-icon") && !$(e.target).parents(".search-icon").length && !$(e.target).parents(".filter-search").length) {
        $('.search-overlay-results').html('');
        $('.search-overlay').removeClass('show');
        $('.filter-search').removeClass('active');
        body.removeClass('expanded-search');
      }
    });

    $('.search-form input[type="text"]').on('keyup' , function(e) {
      if ( hasFired ) {
        return;
      }
      let _this = $(this);
      if(e.keyCode !== 13) {
        clearTimeout( timeOut );
        let sterm = e.target.value;
        timeOut = setTimeout(() => {
          if (_this.parents('.filters-bar').length) {
            if(body.hasClass('page-template-crafts-page')){
               $.ajax({
                type: 'POST',
                url: '/wp-admin/admin-ajax.php',
                data: 'action=smart_search_craft&sterm=' + sterm,
                success: function (html) {
                  _this.parents('.search-overlay').find('.search-overlay-results').html(html);
                  if (_this.val() == '') {
                    _this.parents('.search-overlay').find('.search-overlay-results').html('');
                  }
                  hasFired = false;
                }
              });
            }else if(body.hasClass('page-template-online-page')){
              $.ajax({
                type: 'POST',
                url: '/wp-admin/admin-ajax.php',
                data: 'action=smart_search_online&sterm=' + sterm,
                success: function (html) {
                  _this.parents('.search-overlay').find('.search-overlay-results').html(html);
                  if (_this.val() == '') {
                    _this.parents('.search-overlay').find('.search-overlay-results').html('');
                  }
                  hasFired = false;
                }
              });
            }
          } else {
            $.ajax({
              type: 'POST',
              url: '/wp-admin/admin-ajax.php',
              data: 'action=submit_search&sterm=' + sterm,
              success: function (html) {
                _this.parents('.search-overlay').find('.search-overlay-results').html(html);
                if (_this.val() == '') {
                  _this.parents('.search-overlay').find('.search-overlay-results').html('');
                }
                hasFired = false;
              }
            });
          }
          hasFired = true;
        }, 500);
      }
      e.preventDefault();
    });

    $('.search-form').on('submit' , function(e){
      if(!$(this).parents('.header').length){
        e.preventDefault();
      }
      if($(this).find('input').val() == '' && !$(this).parent('.filters-bar').length) {
        e.stopPropagation();
      }
    });

  }
  function initTestimonialsSlider() {
    if($('.flex-module-testimonials__list').length) {
      $('.flex-module-testimonials__list').slick({
        infinite: true,
        arrows: true,
        dots: false
      });
      
    }
  }
  function equalHeight(el) {
    var _maxHeight = 0;
    $(el).each(function(){
      $(this).removeAttr('style');
      if($(this).innerHeight() > _maxHeight) {
        _maxHeight = $(this).innerHeight();
      }
    });
    $(el).each(function() {      
      $(this).css('height' , _maxHeight + 'px');      
    });
  }
  /* end of required functions */
  function makeExternal(link) {
    if(link.getAttribute('href') != null && link.getAttribute('href') != "javascript:;" && !link.getAttribute('href').indexOf("mailto:") != -1 && !link.getAttribute('href').indexOf("tel:") != -1){
      url = link.getAttribute('href');
      var host = window.location.hostname.toLowerCase(),
      regex = new RegExp('^(?:(?:f|ht)tp(?:s)?\:)?//(?:[^\@]+\@)?([^:/]+)', 'im'),
      match = url.match(regex),
      domain = ((match ? match[1].toString() : ((url.indexOf(':') < 0) ? host : ''))).toLowerCase();
      // Same domain
      if (domain != host) {
        link.setAttribute('target', '_blank');
        link.classList.add("external-link");
        if($(link).find('span').length) {
          $(link).find('span').append('<i class="icon-external" aria-hidden="true"></i>');
        } else if(!$(link).parents(".load-more-wrap").length) {
          $(link).append('<i class="icon-external" aria-hidden="true"></i>');
        }
      }
    }
  }

  function stickyChannelLinks() {
    $('.navigation-page a').on('click' , function(e){
      let _top = $($(this).attr('href')).offset().top - ($('.header').innerHeight() + $(window).height()*0.2);
      $("html, body").stop().animate({scrollTop: _top }, 1000, 'linear' );
      e.preventDefault();
      e.stopPropagation();
    });
  }
  function stickyChannelNavigation() {
    if($(".navigation-page").length){
      let scrollDistance = $(window).scrollTop();
      // Assign active class to nav links while scolling
      let _el = '';
      let flag = 0;
      $('.section-page, .flex-module').each(function() {
        if ($(this).offset().top - ($('.header').innerHeight() + $(window).height()*0.2 +1) <= scrollDistance ) {
          flag = 1;
          _el =  $('.navigation-page a[href="#' + $(this).attr("id")+'"]');
          if(_el.length) {
            $('.navigation-page a.current').removeClass('current');
            _el.addClass('current');
          }
        }
      });
    }
  }

  function stickyFlexLinks() {
    $('.navigation a').on('click' , function(e){
      let _top = $($(this).attr('href')).offset().top - $('.header').innerHeight() - $('.navigation').innerHeight() + 5;
      $("html, body").stop().animate({scrollTop: _top }, 1000, 'linear' );
      e.preventDefault();
      e.stopPropagation();
    });
  }
  function stickyFlexNavigation() {
    if($(".navigation").length){ 
      var scrollDistance = $(window).scrollTop();
    
      // Assign active class to nav links while scolling
      var _el = '';
      var flag = 0;
      $('.flex-module').each(function() {
        if ($(this).offset().top - ($(".navigation").height() + 5 + $('.header').innerHeight()) <= scrollDistance ) {
          flag = 1;
          _el =  $('.navigation a[href="#' + $(this).attr("id")+'"]'); 
          if(_el.length) {
            $('.navigation a.current').removeClass('current');
            _el.addClass('current');
          }
        }
      });
      if(window.pageYOffset   > $(".navigation-fake").offset().top - $('.header').innerHeight()){
        body.addClass("navigation-fixed");

        $(".navigation-fake").height($(".navigation").height());
        $(".navigation").css("top", Math.ceil($('.header').innerHeight()));
      }else{
        body.removeClass("navigation-fixed");
        $(".navigation-fake").height(0);
      }
    }
  }
  
  function promoBanner() {
    $('.promo-banner__close').on( 'click' , function(e) {
      $('.promo-banner, .promo-banner-fake').slideUp();
      Cookies.set('promo_banner', '1', {  path: '/' }); 
      e.preventDefault();
    });
  }

  function initInsightsFilters() {
    removeChips();
    $(".dropdown-list-in").mCustomScrollbar();
    body.on("click", function(e) {
      if (!$(e.target).parents(".select").hasClass("open") && !$(e.target).hasClass("open")) {
        $(".select").removeClass("open");
      }
    });
    body.on('click' , '.select > a' , function(e){
      if(!$(this).parent().hasClass('open')) {
        $('.select.open').removeClass('open');
      }
      $(this).parent().toggleClass('open');
      e.preventDefault();
    });

    body.on("submit", ".filters-bar form", function(e) {
      e.preventDefault(false);
      $(this).parents('.filter-search').removeClass('active');
      $(this).parents('.search-overlay').removeClass('show');
      $(this).parents('.search-overlay').find('.search-overlay-results').html('');
      changeUrl(0, "submited");
      return false; 
    });

    body.on("click", ".clear-results, .filter-buttons-clear", function() {
      $('.search-phrase').hide();
      $(".filters-bar form input").val("");
      $(".filters-bar .search-form__results").html("");
      $(".filter-group .dropdown-col").removeClass("clicked").find('.current').removeClass('current');
      setChips();
      changeUrl(0, "submited");
      $('.filters-bar-wrap').removeClass('active');
      return false;
    });


    body.on("click", ".filters-bar .dropdown-col:not(#filter-sort) .dropdown-list-item a", function(e) {
      $(".dropdown-col").removeClass("clicked");
      $(this).parents(".dropdown-col").addClass("clicked");
      $('.reloaded-filter').removeClass('active');
      $(this).parents('.reloaded-filter').addClass('active');

      if($(this).parents('#filter-date').length){
        if($(this).parent().hasClass('current')){
          $(this).parents('.dropdown-list-in').find('.current').removeClass('current');
        }else{
          $(this).parents('.dropdown-list-in').find('.current').removeClass('current');
          $(this).parent().addClass('current');
        }
      }else{
        $(this).parent().toggleClass('current');
      }

      changeUrl(0);
      $(this).parents(".dropdown-col").find(".select > a span em").remove();
      if($(this).parents(".dropdown-col").find(".current").length > 0 ){
        $(this).parents(".dropdown-col").find(".select > a span").append("<em>("+$(this).parents(".dropdown-col").find(".current").length+")</em>");
        $(this).parents(".dropdown-col").find('.select').addClass('selected');
      }else{
        $(this).parents(".dropdown-col").find('.select').removeClass('selected');
      }
      setChips();
      e.preventDefault();
    });


    body.on("click", "#filter-sort .dropdown-list-item a", function(e) {
      if(!$(this).hasClass('current')){
        $(this).parents('.select').find('b').html($(this).html());
        $(this).parents('.select').find('.dropdown-list-item.current').removeClass('current');
        $(this).parent('.dropdown-list-item').addClass('current');
        $(this).parents('.select').removeClass('open');
        changeUrl(0);
      }
      e.preventDefault();
    });

    body.on("click", ".filter-option", function(e) {
      $(this).toggleClass('active');
      changeUrl(0);
      e.preventDefault();
    });

    body.on("click", ".sort", function(e) {

      $('.sort').find("span > span").toggleClass('active');
      if($('.sort').find('.sort-up').hasClass('active')){
        $('.sort').find('em').text('Sort A to Z');
      }else{
        $('.sort').find('em').text('Sort Z to A');
      }
      $('.reloaded-filter').removeClass("active");
      $(this).parents('.reloaded-filter').addClass("active");
      changeUrl(0);
      e.preventDefault();
    });

    body.on("click", ".filter-search-icon", function(e) {
      $(this).parents('.filter-search').toggleClass('active');
      $(this).next('.search-overlay').toggleClass('show');
      e.preventDefault();
    });
    setChips();
  }

  function setChips() {

    $('.chips-list .chips').remove();
    $('.filters-bar').each(function(){
      let This = $(this);
      $(this).find('.dropdown-col:not(#filter-sort)').find(".current").each(function(){
        This.find('.chips-list').append('<span class="chips" data-id="'+ $(this).attr("data-id")+'">' + $(this).text() + '<button><i class="icon-close-light" aria-hidden="true"></i> <em class="sr-only">Remove</em></button></span>');
      });
    });
  }

  function removeChips(){
    body.on("click", ".chips-list .chips", function(){
      $(this).remove();
      $(".dropdown-col .current[data-id='"+$(this).attr("data-id")+"'] a").trigger("click");
    });
  }

  function optionUrlStories(loadMore, submit){
    let industry = [], url = "",postCount, type = [], order=[], content;
    if ($(".type-filter .current").length) {
      $(".active .type-filter .current").each(function () {
        type.push($(this).attr("data-id"));
      });
      url += '&type=' + type;
    }
    if ($(".industry-filter .current").length) {
      $(".active .industry-filter  .current").each(function () {
        industry.push($(this).attr("data-id"));
      });
      url += '&industry=' + industry;
    }

    if ($("#filter-sort .current").length) {
      $("#filter-sort .current").each(function () {
        order.push($(this).attr("data-id"));
      });
      url += '&order=' + order;
    }

    if(type.length || industry.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    if($('.load-posts.active').length){
      content = $('.load-posts.active').attr('data-content');
    }else{
      content = '';
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".story-grid--"+content+" .story-item").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $(".type-filter .current").length < 2 && $(".industry-filter").hasClass("clicked"))
      || (loadMore == 0 && $(".type-filter .current").length == 0 && $(".type-filter").hasClass("clicked"))){
      filterTypeStory(industry, type, content);
    }
    if((loadMore == 0 && $(".industry-filter .current").length < 2 && $(".type-filter").hasClass("clicked"))
      || (loadMore == 0 && $(".industry-filter .current").length == 0 && $(".industry-filter").hasClass("clicked"))){
      filterIndustryStory(industry, type, content);
    }

    if(loadMore == 0 && submit == "submited"){
      filterTypeStory(industry, type, content);
      filterIndustryStory(industry, type, content);

    }

    ajaxStory(loadMore, postCount, industry, order, type, content);
  }

  function optionUrlWebinar(loadMore, submit){
    let topic = [], url = "", search = "", postCount, craft = [];

    if ($("#filter-topic .current").length) {
      $("#filter-topic .current").each(function () {
        topic.push($(this).attr("data-id"));
      });
      url += '&topic=' + topic;
    }
    if ($("#filter-craft .current").length) {
      $("#filter-craft .current").each(function () {
        craft.push($(this).attr("data-id"));
      });
      url += '&craft=' + craft;
    }

    search = $('.cases-wrap__filters form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || topic.length || craft.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".webinars-grid .upcoming-events__item").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $("#filter-topic .current").length < 2 && $("#filter-craft").hasClass("clicked"))
      || (loadMore == 0 && $("#filter-topic .current").length == 0 && $("#filter-topic").hasClass("clicked"))){
      //topic
      filterTopicWebinar(search, topic, craft);
    }
    if((loadMore == 0 && $("#filter-craft .current").length < 2 && $("#filter-topic").hasClass("clicked"))
      || (loadMore == 0 && $("#filter-craft .current").length == 0 && $("#filter-craft ").hasClass("clicked"))){
      filterCraftWebinar(search, topic, craft);
    }
    if(loadMore == 0 && submit == "submited"){
      filterTopicWebinar(search, topic, craft);
      filterCraftWebinar(search, topic, craft);
    }

    ajaxWebinar(loadMore, postCount, search, topic, craft);
  }

  function optionUrlResearches(loadMore, submit){
    let cat = [], url = "", search = "", postCount, date=[], order=[];

    if ($("#filter-date .current").length) {
      $("#filter-date .current").each(function () {
        date.push($(this).attr("data-id"));
      });
      url += '&date=' + date;
    }
    if ($("#filter-cat .current").length) {
      $("#filter-cat .current").each(function () {
        cat.push($(this).attr("data-id"));
      });
      url += '&category=' + cat;
    }

    if ($("#filter-sort .current").length) {
      $("#filter-sort .current").each(function () {
        order.push($(this).attr("data-id"));
      });
      url += '&order=' + order;
    }

    search = $('.cases-wrap__filters form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || date.length || cat.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".research-count").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $("#filter-cat .current").length < 2 && $("#filter-date").hasClass("clicked"))
      || (loadMore == 0 && $("#filter-cat .current").length == 0 && $("#filter-cat").hasClass("clicked"))){
      filterCatResearch(search, cat, date);
    }
    if((loadMore == 0 && $("#filter-date .current").length < 2 && $("#filter-cat").hasClass("clicked"))
      || (loadMore == 0 && $("#filter-date .current").length == 0 && $("#filter-date ").hasClass("clicked"))){
      filterDateResearch(search, cat, date);
    }
    if(loadMore == 0 && submit == "submited"){
      filterCatResearch(search, cat, date);
      filterDateResearch(search, cat, date);
    }
    ajaxResearch(loadMore, postCount, search, cat, order, date);
  }

  function optionUrlNews(loadMore, submit){
    let cat = [], url = "", search = "", postCount, solution=[], order=[], status = 'publish';
    if(body.hasClass('page-template-archive-page')){
      status = 'archive';
    }

    if ($("#filter-solution .current").length) {
      $("#filter-solution .current").each(function () {
        solution.push($(this).attr("data-id"));
      });
      url += '&type=' + solution;
    }
    if ($("#filter-cat .current").length) {
      $("#filter-cat .current").each(function () {
        cat.push($(this).attr("data-id"));
      });
      url += '&category=' + cat;
    }
    if ($("#filter-sort .current").length) {
      $("#filter-sort .current").each(function () {
        order.push($(this).attr("data-id"));
      });
      url += '&order=' + order;
    }

    search = $('.cases-wrap__filters form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || solution.length || cat.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".blog-post-count").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $("#filter-cat .current").length < 2 && $("#filter-solution").hasClass("clicked"))
      || (loadMore == 0 && $("#filter-cat .current").length == 0 && $("#filter-cat").hasClass("clicked"))){
      filterCatPost(search, cat, solution, status);
    }
    if((loadMore == 0 && $("#filter-solution .current").length < 2 && $("#filter-cat").hasClass("clicked"))
      || (loadMore == 0 && $("#filter-solution .current").length == 0 && $("#filter-solution ").hasClass("clicked"))){
      filterSolutionPost(search, cat, solution, status);
    }
    if(loadMore == 0 && submit == "submited"){
      filterCatPost(search, cat, solution, status);
      filterSolutionPost(search, cat, solution, status);
    }
    ajaxPost(loadMore, postCount, search, cat, order, solution, status);
  }
  function optionUrlOnline(loadMore, submit){
    let category = [], url = "", industry = [], search = "", postCount, assessment = '', translation ='', order;

    if ($("#category-filter .current").length) {
      $("#category-filter .current").each(function () {
        category.push($(this).attr("data-id"));
      });
      url += '&category=' + category;
    }
    if ($("#industry-filter .current").length) {
      $("#industry-filter .current").each(function () {
        industry.push($(this).attr("data-id"));
      });
      url += '&industry=' + industry;
    }

    if ($("#assessment.active").length) {
      url += '&assessment=' + 1;
      assessment = 1;
    }
    if ($("#translation.active").length) {
      url += '&translation=' + 1;
      translation = 1;
    }

    if ($(".sort span.active").length) {
      order = $(".sort span.active").attr("data-id");
      url += '&order=' + order;
    }
    search = $('.filters-bar form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || industry.length || category.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".craft-item-leng").length;
    }else{
      postCount = 0;
    }
    if((loadMore == 0 && $("#category-filter .current").length < 2 && $("#industry-filter").hasClass("clicked"))
      || (loadMore == 0 && $("#category-filter .current").length == 0 && $("#category-filter").hasClass("clicked"))){
      filterCategoryOnline(search, category, industry, assessment, translation);
    }
    if((loadMore == 0 && $("#industry-filter .current").length < 2 && $("#category-filter").hasClass("clicked"))
      || (loadMore == 0 && $("#industry-filter .current").length == 0 && $("#industry-filter").hasClass("clicked"))){
      filterIndustryOnline(search, category, industry, assessment, translation);
    }
    if(loadMore == 0 && submit == "submited"){
      filterCategoryOnline(search, category, industry, assessment, translation);
      filterIndustryOnline(search, category, industry, assessment, translation);
    }
    ajaxOnline(loadMore, postCount, search, category, industry, assessment, translation, order);
  }
  function optionUrlEvent(loadMore, submit){
    let type = [], url = "", audience = [], location = [], search = "", postCount;

    if ($("#filter-type .current").length) {
      $("#filter-type .current").each(function () {
        type.push($(this).attr("data-id"));
      });
      url += '&type=' + type;
    }
    if ($("#filter-audience .current").length) {
      $("#filter-audience .current").each(function () {
        audience.push($(this).attr("data-id"));
      });
      url += '&audience=' + audience;
    }

    if ($("#filter-location .current").length) {
      $("#filter-location .current").each(function () {
        location.push($(this).attr("data-id"));
      });
      url += '&location=' + location;
    }

    search = $('.filters-bar form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || type.length || audience.length || location.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".events-grid .upcoming-events__item").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $("#filter-type .current").length < 2 && ($("#filter-audience").hasClass("clicked") || $("#filter-location").hasClass("clicked") )) || (loadMore == 0 && $("#filter-type .current").length == 0 && $("#filter-type").hasClass("clicked"))){
      filterEventType(search, type, audience, location);
    }
    if((loadMore == 0 && $("#filter-audience .current").length < 2 && ($("#filter-type").hasClass("clicked") || $("#filter-location").hasClass("clicked") ) ) || (loadMore == 0 && $("#filter-audience .current").length == 0 && $("#filter-audience").hasClass("clicked"))){
      filterEventAudience(search, type, audience, location);
    }
    if((loadMore == 0 && $("#filter-location .current").length < 2 && ($("#filter-type").hasClass("clicked") || $("#filter-audience").hasClass("clicked"))) || (loadMore == 0 && $("#filter-location .current").length == 0 && $("#filter-location").hasClass("clicked"))){
      filterEventLocation(search, type, audience, location);
    }
    if(loadMore == 0 && submit == "submited"){
      filterEventType(search, type, audience, location);
      filterEventAudience(search, type, audience, location);
      filterEventLocation(search, type, audience, location);
    }
    ajaxEvent(loadMore, postCount, search, type, audience, location);
  }
  function optionUrlTranslated(loadMore, submit){
    let craft = [], url = "", level = [], language = [], search = "", postCount, order, urlPage;

    if ($("#filter-craft .current").length) {
      $("#filter-craft .current").each(function () {
        craft.push($(this).attr("data-id"));
      });
      url += '&crafts=' + craft;
    }
    if ($("#filter-level .current").length) {
      $("#filter-level .current").each(function () {
        level.push($(this).attr("data-id"));
      });
      url += '&level=' + level;
    }

    if ($("#filter-language .current").length) {
      $("#filter-language .current").each(function () {
        language.push($(this).attr("data-id"));
      });
      url += '&language=' + language;
    }

    if ($(".sort span.active").length) {
      order = $(".sort span.active").attr("data-id");
      url += '&order=' + order;
    }
    search = $('.filters-bar form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || craft.length || level.length || language.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
      urlPage = encodeURIComponent(url.replace($('.header__logo a').attr('href'), ''));
    } else {
      window.history.pushState('', '', urlBase);
      urlPage = encodeURIComponent( urlBase.replace($('.header__logo a').attr('href'), ''));
    }
    if(loadMore == 1){
      postCount = $(".craft-item-leng").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $("#filter-craft .current").length < 2 && ($("#filter-level").hasClass("clicked") || $("#filter-language").hasClass("clicked") )) || (loadMore == 0 && $("#filter-craft .current").length == 0 && $("#filter-craft").hasClass("clicked"))){
      filterCraftTranslated(search, craft, level, language);
    }
    if((loadMore == 0 && $("#filter-level .current").length < 2 && ($("#filter-craft").hasClass("clicked") || $("#filter-language").hasClass("clicked") ) ) || (loadMore == 0 && $("#filter-level .current").length == 0 && $("#filter-level").hasClass("clicked"))){
      filterLevelTranslated(search, craft, level, language);
    }
    if((loadMore == 0 && $("#filter-language .current").length < 2 && ($("#filter-craft").hasClass("clicked") || $("#filter-level").hasClass("clicked"))) || (loadMore == 0 && $("#filter-language .current").length == 0 && $("#filter-language").hasClass("clicked"))){
      filterLanguageTranslated(search, craft, level, language);
    }
    if(loadMore == 0 && submit == "submited"){
      filterCraftTranslated(search, craft, level, language);
      filterLevelTranslated(search, craft, level, language);
      filterLanguageTranslated(search, craft, level, language);
    }
    ajaxTranslated(loadMore, postCount, search, craft, level, language, order, urlPage);
  }
  function optionUrlAssessment(loadMore, submit){
    let craft = [], url = "", level = [], language = [], search = "", postCount, order, urlPage;

    if ($("#filter-craft .current").length) {
      $("#filter-craft .current").each(function () {
        craft.push($(this).attr("data-id"));
      });
      url += '&crafts=' + craft;
    }
    if ($("#filter-level .current").length) {
      $("#filter-level .current").each(function () {
        level.push($(this).attr("data-id"));
      });
      url += '&level=' + level;
    }

    if ($("#filter-language .current").length) {
      $("#filter-language .current").each(function () {
        language.push($(this).attr("data-id"));
      });
      url += '&language=' + language;
    }

    if ($(".sort span.active").length) {
      order = $(".sort span.active").attr("data-id");
      url += '&order=' + order;
    }
    search = $('.filters-bar form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || craft.length || level.length || language.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
      urlPage = encodeURIComponent(url.replace($('.header__logo a').attr('href'), ''));
    } else {
      window.history.pushState('', '', urlBase);
      urlPage = encodeURIComponent( urlBase.replace($('.header__logo a').attr('href'), ''));
    }
    if(loadMore == 1){
      postCount = $(".craft-item-leng").length;
    }else{
      postCount = 0;
    }

    if((loadMore == 0 && $("#filter-craft .current").length < 2 && ($("#filter-level").hasClass("clicked") || $("#filter-language").hasClass("clicked") )) || (loadMore == 0 && $("#filter-craft .current").length == 0 && $("#filter-craft").hasClass("clicked"))){
      filterCraftAssessment(search, craft, level, language);
    }
    if((loadMore == 0 && $("#filter-level .current").length < 2 && ($("#filter-craft").hasClass("clicked") || $("#filter-language").hasClass("clicked") ) ) || (loadMore == 0 && $("#filter-level .current").length == 0 && $("#filter-level").hasClass("clicked"))){
      filterLevelAssessment(search, craft, level, language);
    }
    if((loadMore == 0 && $("#filter-language .current").length < 2 && ($("#filter-craft").hasClass("clicked") || $("#filter-level").hasClass("clicked"))) || (loadMore == 0 && $("#filter-language .current").length == 0 && $("#filter-language").hasClass("clicked"))){
      filterLanguageAssessment(search, craft, level, language);
    }
    if(loadMore == 0 && submit == "submited"){
      filterCraftAssessment(search, craft, level, language);
      filterLevelAssessment(search, craft, level, language);
      filterLanguageAssessment(search, craft, level, language);
    }
    ajaxAssessment(loadMore, postCount, search, craft, level, language, order, urlPage);
  }
  function optionUrlCrafts(loadMore, submit){
    let category = [], url = "", discipline = [], search = "", postCount, assessment = '', translation ='', order;

    if ($("#discipline-filter .current").length) {
      $("#discipline-filter .current").each(function () {
        category.push($(this).attr("data-id"));
      });
      url += '&category=' + category;
    }
    if ($("#industry-filter .current").length) {
      $("#industry-filter .current").each(function () {
        discipline.push($(this).attr("data-id"));
      });
      url += '&discipline=' + discipline;
    }

    if ($("#assessment.active").length) {
      url += '&assessment=' + 1;
      assessment = 1;
    }
    if ($("#translation.active").length) {
      url += '&translation=' + 1;
      translation = 1;
    }

    if ($(".sort span.active").length) {
      order = $(".sort span.active").attr("data-id");
      url += '&order=' + order;
    }
    search = $('.filters-bar form input').val();
    if( search ) {
      url += '&search=' + search;
      $('.search-phrase span').text(search);
      $('.search-phrase').show();
    } else {
      $('.search-phrase').hide();
    }

    if(search || discipline.length || category.length) {
      $('.clear-results').show();
    }else{
      $('.clear-results').hide();
    }

    let urlBase = $(".reloaded-filter").attr("data-url");
    if (url != '') {
      url = urlBase + '?' + url.substr(1);
      window.history.pushState('', '', url);
    } else {
      window.history.pushState('', '', urlBase);
    }
    if(loadMore == 1){
      postCount = $(".craft-item-leng").length;
    }else{
      postCount = 0;
    }
    if((loadMore == 0 && $("#discipline-filter .current").length < 2 && $("#industry-filter").hasClass("clicked"))
      || (loadMore == 0 && $("#discipline-filter .current").length == 0 && $("#discipline-filter").hasClass("clicked"))){
      filterDisciplineCraft(search, category, discipline, assessment, translation);
    }
    if((loadMore == 0 && $("#industry-filter .current").length < 2 && $("#discipline-filter").hasClass("clicked"))
      || (loadMore == 0 && $("#industry-filter .current").length == 0 && $("#industry-filter").hasClass("clicked"))){
      filterIndustryCraft(search, category, discipline, assessment, translation);
    }
    if(loadMore == 0 && submit == "submited"){
      filterDisciplineCraft(search, category, discipline, assessment, translation);
      filterIndustryCraft(search, category, discipline, assessment, translation);
    }
    ajaxCraft(loadMore, postCount, search, category, discipline, assessment, translation, order);
  }
  function changeUrl(loadMore, submit) {

    if(body.hasClass("blog") || body.hasClass("page-template-archive-page")) {
      optionUrlNews(loadMore, submit);
    }else if(body.hasClass("page-template-crafts-page")) {
      optionUrlCrafts(loadMore, submit);
    }else if(body.hasClass("page-template-events-page")){
      optionUrlEvent(loadMore, submit);
    }else if(body.hasClass("page-template-researches-page")){
      optionUrlResearches(loadMore, submit);
    } else if(body.hasClass("page-template-online-page")){
      optionUrlOnline(loadMore, submit);
    }else if(body.hasClass("page-template-stories-page")){
      optionUrlStories(loadMore, submit);
    }else if(body.hasClass("page-template-assessments-page")){
      optionUrlAssessment(loadMore, submit);
    }else if(body.hasClass("page-template-translated-resources-page")){
      optionUrlTranslated(loadMore, submit);
    }else if(body.hasClass("page-template-webinar-page")){
      optionUrlWebinar(loadMore, submit);
    }
  }

  function ajaxTranslated(loadMore, postCount, search, craft, level, language, order, url){
    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: 'action=filter_translated&loadmore=' + loadMore + '&count=' + postCount + '&search=' + search + '&crafts=' + craft + '&level=' + level + '&language=' + language + '&order=' + order+ '&url=' + url,
      success: function (html) {
        if (loadMore === 0) {
          $(".filter-container").html("");
        }
        $(html).hide().appendTo(".filter-container").fadeIn();
        if ($(".filter-container").find(".hide-button").length) {
          $(".load-more-wrap").slideUp();
          flagLoading = 0;
        } else {
          $(".load-more-wrap").fadeIn();
          flagLoading = 1;
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.page-navi-wrap .inner').html($('.pagination-navi').html());
        $('.found-p,.pagination-navi').remove();
        $('.loading').hide();
      }
    });
  }
  function filterCraftTranslated(search, craft, level, language){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_craft_translated&search='+search+'&crafts='+craft+'&level='+level+'&language='+language,
      success: function(html){
        $("#filter-craft").html(html);
        $("#filter-craft .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterLevelTranslated(search, craft, level, language){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_level_translated&search='+search+'&crafts='+craft+'&level='+level+'&language='+language,
      success: function(html){
        $("#filter-level").html(html);
        $("#filter-level .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterLanguageTranslated(search, craft, level, language){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_language_translated&search='+search+'&crafts='+craft+'&level='+level+'&language='+language,
      success: function(html){
        $("#filter-language").html(html);
        $("#filter-language .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function ajaxAssessment(loadMore, postCount, search, craft, level, language, order, url){
    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: 'action=filter_assessment&loadmore=' + loadMore + '&count=' + postCount + '&search=' + search + '&crafts=' + craft + '&level=' + level + '&language=' + language + '&order=' + order+'&url=' + url,
      success: function (html) {
        if (loadMore === 0) {
          $(".filter-container").html("");
        }
        $(html).hide().appendTo(".filter-container").fadeIn();
        if ($(".filter-container").find(".hide-button").length) {
          $(".load-more-wrap").slideUp();
          flagLoading = 0;
        } else {
          $(".load-more-wrap").fadeIn();
          flagLoading = 1
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.page-navi-wrap .inner').html($('.pagination-navi').html());
        $('.found-p,.pagination-navi').remove();
        $('.loading').hide();
      }
    });
  }
  function filterCraftAssessment(search, craft, level, language){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_craft_assessment&search='+search+'&crafts='+craft+'&level='+level+'&language='+language,
      success: function(html){
        $("#filter-craft").html(html);
        $("#filter-craft .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterLevelAssessment(search, craft, level, language){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_level_assessment&search='+search+'&crafts='+craft+'&level='+level+'&language='+language,
      success: function(html){
        $("#filter-level").html(html);
        $("#filter-level .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterLanguageAssessment(search, craft, level, language){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_language_assessment&search='+search+'&crafts='+craft+'&level='+level+'&language='+language,
      success: function(html){
        $("#filter-language").html(html);
        $("#filter-language .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function ajaxOnline(loadMore, postCount, search, category, industry, assessment, translation, order){
    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: 'action=filter_online&loadmore=' + loadMore + '&count=' + postCount + '&search=' + search + '&category=' + category + '&industry=' + industry + '&assessment=' + assessment + '&translation=' + translation + '&order=' + order,
      success: function (html) {
        if (loadMore === 0) {
          $(".filter-container").html("");
        }
        $(html).hide().appendTo(".filter-container").fadeIn();
        if ($(".filter-container").find(".hide-button").length) {
          $(".load-more-wrap").slideUp();
          flagLoading = 0;
        } else {
          $(".load-more-wrap").fadeIn();
          flagLoading = 1;
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.found-p').remove();
        $('.loading').hide();
      }
    });
  }

  function filterCategoryOnline(search, category, industry, assessment, translation){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_category_online&search='+search+'&category='+category+'&industry='+industry+'&assessment='+assessment+'&translation='+translation,
      success: function(html){
        $("#category-filter").html(html);
        $("#category-filter .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterIndustryOnline(search, category, industry, assessment, translation){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_industry_online&search='+search+'&category='+category+'&industry='+industry+'&assessment='+assessment+'&translation='+translation,
      success: function(html){
        $("#industry-filter").html(html);
        $("#industry-filter .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function ajaxCraft(loadMore, postCount, search, category, discipline, assessment, translation, order){
    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: 'action=filter_craft&loadmore=' + loadMore + '&count=' + postCount + '&search=' + search + '&category=' + category + '&discipline=' + discipline + '&assessment=' + assessment + '&translation=' + translation + '&order=' + order,
      success: function (html) {
        if (loadMore === 0) {
          $(".filter-container").html("");
        }
        $(html).hide().appendTo(".filter-container").fadeIn();
        if ($(".filter-container").find(".hide-button").length) {
          $(".load-more-wrap").slideUp();
          flagLoading = 0;
        } else {
          $(".load-more-wrap").fadeIn();
          flagLoading = 1;
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.found-p').remove();
        $('.loading').hide();
      }
    });
  }

  function filterDisciplineCraft(search, category, discipline, assessment, translation){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_discipline_craft&search='+search+'&category='+category+'&discipline='+discipline+'&assessment='+assessment+'&translation='+translation,
      success: function(html){
        $("#discipline-filter").html(html);
        $("#discipline-filter .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterIndustryCraft(search, category, industry, assessment, translation){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_industry_craft&search='+search+'&category='+category+'&industry='+industry+'&assessment='+assessment+'&translation='+translation,
      success: function(html){
        $("#industry-filter").html(html);
        $("#industry-filter .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function ajaxPost(loadMore, postCount, search, cat, order, solution, status='publish') {
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_post&loadmore='+loadMore+'&count='+postCount+'&search='+search+'&category='+cat+'&order='+order+'&type='+solution+'&status='+status,
      success: function(html){
        if(loadMore === 0) {
          $(".insights__items").html("");
        }
        $(html).hide().appendTo(".insights__items").fadeIn();
        if($(".insights__items").find(".hide-button").length){
          $(".load-more-wrap").slideUp();
        }else{
          $(".load-more-wrap").fadeIn();
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.found-p').remove();
        $('.loading').hide();
      }
    });
  }

  function ajaxStory(loadMore, postCount, industry, order, type, content) {
    if(content) {
      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        data: 'action=filter_story&loadmore=' + loadMore + '&count=' + postCount + '&content=' + content + '&industry=' + industry + '&order=' + order + '&type=' + type,
        success: function (html) {
          if (loadMore === 0) {
            $(".story-grid--" + content).html("");
          }
          $(html).hide().appendTo(".story-grid--" + content).fadeIn();

          if ($(".story-grid--" + content).find(".hide-button").length) {
            $(".story-grid--" + content).next(".load-more-wrap").slideUp();
          } else {
            $(".story-grid--" + content).next(".load-more-wrap").fadeIn();
          }
          $('.load-posts').removeClass('active');
          $('.loading').hide();
        }
      });
    }else{
      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        data: 'action=filter_story&loadmore=' + loadMore + '&count=' + postCount + '&content=348&industry=' + industry + '&order=' + order + '&type=' + type,
        success: function (html) {
          if (loadMore === 0) {
            $(".story-grid--348").html("");
          }
          $(html).hide().appendTo(".story-grid--348").fadeIn();
          if ($(".story-grid--348").find(".hide-button").length) {
            $(".story-grid--348").next(".load-more-wrap").slideUp();
          } else {
            $(".story-grid--348").next(".load-more-wrap").fadeIn();
          }
          $('.loading').hide();
        }
      });
      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        data: 'action=filter_story&loadmore=' + loadMore + '&count=' + postCount + '&content=347&industry=' + industry + '&order=' + order + '&type=' + type,
        success: function (html) {
          if (loadMore === 0) {
            $(".story-grid--347").html("");
          }
          $(html).hide().appendTo(".story-grid--347").fadeIn();
          if ($(".story-grid--347").find(".hide-button").length) {
            $(".story-grid--347").next(".load-more-wrap").slideUp();
          } else {
            $(".story-grid--347").next(".load-more-wrap").fadeIn();
          }
          $('.loading').hide();
        }
      });
    }
  }
  function ajaxEvent(loadMore, postCount, search, type, audience, location){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_event&loadmore='+loadMore+'&count='+postCount+'&search='+search+'&type='+type+'&audience='+audience+'&location='+location,
      success: function(html){
        if(loadMore === 0) {
          $(".events-grid").html("");
        }
        $(html).hide().appendTo(".events-grid").fadeIn();

        if($(".events-grid").find(".hide-button").length){
          $(".load-more-wrap").slideUp();
        }else{
          $(".load-more-wrap").fadeIn();
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.found-p').remove();
        $('.loading').hide();
      }
    });
  }

  function filterEventType(search, type, audience, location){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_event_type&search='+search+'&type='+type+'&audience='+audience+'&location='+location,
      success: function(html){
        $("#filter-type").html(html);
        $("#filter-type .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function filterEventAudience(search, type, audience, location){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_event_audience&search='+search+'&type='+type+'&audience='+audience+'&location='+location,
      success: function(html){
        $("#filter-audience").html(html);
        $("#filter-audience .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterEventLocation(search, type, audience, location){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_event_location&search='+search+'&type='+type+'&audience='+audience+'&location='+location,
      success: function(html){
        $("#filter-location").html(html);
        $("#filter-location .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function ajaxWebinarPast() {
    let postCount = $('.webinars-past-grid .upcoming-events__item ').length;
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_webinar_past&count='+postCount,
      success: function(html){
        $(html).hide().appendTo(".webinars-past-grid").fadeIn();
        if($(".webinars-past-grid").find(".hide-button").length){
          $('.webinars-past-grid').next(".load-more-wrap").slideUp();
        }else{
          $('.webinars-past-grid').next(".load-more-wrap").fadeIn();
        }
        $('.loading').hide();
      }
    });
  }
  function ajaxWebinar(loadMore, postCount, search, topic, craft) {
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_webinar&loadmore='+loadMore+'&count='+postCount+'&search='+search+'&topic='+topic+'&craft='+craft,
      success: function(html){
        if(loadMore === 0) {
          $(".webinars-grid").html("");
        }
        $(html).hide().appendTo(".webinars-grid").fadeIn();

        if($(".webinars-grid").find(".hide-button").length){
          $(".webinars-grid").next('.load-more-wrap').slideUp();
        }else{
          $(".webinars-grid").next('.load-more-wrap').fadeIn();
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.found-p').remove();
        $('.loading').hide();
      }
    });
  }
  function filterTopicWebinar(search, topic, craft){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_topic_webinar&search='+search+'&topic='+topic+'&craft='+craft,
      success: function(html){
        $("#filter-topic").html(html);
        $("#filter-topic .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterCraftWebinar(search, topic, craft){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_craft_webinar&search='+search+'&topic='+topic+'&craft='+craft,
      success: function(html){
        $("#filter-craft").html(html);
        $("#filter-craft .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function ajaxResearch(loadMore, postCount, search, cat, order, date) {
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_research&loadmore='+loadMore+'&count='+postCount+'&search='+search+'&category='+cat+'&order='+order+'&date='+date,
      success: function(html){
        if(loadMore === 0) {
          $(".researches-grid").html("");
        }
        $(html).hide().appendTo(".researches-grid").fadeIn();

        if($(".researches-grid").find(".hide-button").length){
          $(".load-more-wrap").slideUp();
        }else{
          $(".load-more-wrap").fadeIn();
        }
        $('.filter-result-count span').html($('.found-p').html());
        $('.found-p').remove();
        $('.loading').hide();
      }
    });
  }
  function filterCatPost(search, cat, solution, status = 'publish'){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_cat_post&search='+search+'&category='+cat+'&type='+solution+'&status='+status,
      success: function(html){
        $("#filter-cat").html(html);
        $("#filter-cat .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterSolutionPost(search, cat, solution, status = 'publish'){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_solution_post&search='+search+'&category='+cat+'&type='+solution+'&status='+status,
      success: function(html){
        $("#filter-solution").html(html);
        $("#filter-solution .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function filterIndustryStory(industry, type, content){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_industry_story&industry='+industry+'&type='+type+'&content='+content,
      success: function(html){
        $(".industry-filter").html(html);
        $(".industry-filter .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterTypeStory(industry, type, content){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_type_story&industry='+industry+'&type='+type+'&content='+content,
      success: function(html){
        $(".type-filter").html(html);
        $(".type-filter .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function filterCatResearch(search, cat, date){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_cat_research&search='+search+'&category='+cat+'&date='+date,
      success: function(html){
        $("#filter-cat").html(html);
        $("#filter-cat .dropdown-list-in").mCustomScrollbar();
      }
    });
  }
  function filterDateResearch(search, cat, date){
    $.ajax({
      type: 'POST',
      url:  '/wp-admin/admin-ajax.php',
      data: 'action=filter_date_research&search='+search+'&category='+cat+'&date='+date,
      success: function(html){
        $("#filter-date").html(html);
        $("#filter-date .dropdown-list-in").mCustomScrollbar();
      }
    });
  }

  function userLoadMore() {
    $('.user__load-more a').on('click' , function(e) {
      let _count = $('.user__post').length;
      let _author_id = $('.user__load-more').attr('data-author');
      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        data: 'action=load_user_posts&count=' + _count + '&author_id=' + _author_id,
        success: function(html) {
          $('.user__grid').append(html);
          
          if($('.user__grid').attr('data-count')*1 == $('.user__post').length) {
            $('.user__load-more').hide();
          }
        }
      }); 
      e.preventDefault();
    })
  }

  function initMobileMenu() {
    $('body #wrapper').append('<div class="mobile-navi"></div>');
    
    let menuHead = `
      <div class='mobile-navi__head'>
        <a href="${$('.header__logo a').attr('href')}">
          <img src="${$('.header__logo a').attr('href')}/wp-content/themes/nccer/assets/images/logo-long.svg" alt="Logo">
        </a>
        <a class="mobile-navi__close" href="javascript:;"><i class="icon-cross"></i></a>
      </div>
      <div class='mobile-navi__in'>
      </div>
    `;
    $('.mobile-navi').append(menuHead)
    
    $('.header__menu nav').clone().appendTo('.mobile-navi__in');
    $('.header__top-nav .header__left > div > ul').clone().appendTo('.mobile-navi__in');
    $('.header__socials').clone().appendTo('.mobile-navi__in');
    $('.mobile-navi .nav-dropdown').prepend('<div class="menu-back"><a href="javascript:;" >Back</a></div>');

    $('#mobile-menu').on('click' , function(e){
      $('.mobile-navi').addClass('open');
      let curposition = $(window).scrollTop();
      $("body, html").addClass("overlayed");
      $("#wrapper").css({"margin-top":-curposition+"px"});
      e.preventDefault();
    });

    $('.mobile-navi__close').on('click' , function(e){
      $('.mobile-navi').removeClass('open');
      let scrolPosition = $("#wrapper").css('margin-top').replace("px", "");
      scrolPosition = -1*scrolPosition;
      $("#wrapper").css({"margin-top":"0px"});
      $("body, html").removeClass("overlayed");
      $("body,html").scrollTop(scrolPosition);
      e.preventDefault();
    });

    $('.mobile-navi .nav-main .has-child > a').on('click' , function(e){
      $(this).next().addClass('open');
      e.preventDefault();
    });

    $('.menu-back a').on('click' , function(e){
      $(this).parents('.nav-dropdown').removeClass('open');
      e.preventDefault();
    });
  }

  function menuChildItems(){
    $(".nav-wrap .nav-dropdown").each(function(){
      $(this).appendTo('.'+$(this).attr("data-id"));
      $('.'+$(this).attr("data-id")).addClass('has-child');
    });
  }

  function fixedHeader(){
    if(window.pageYOffset > 150 ){
      $('.header').addClass('fixed');
    }else{
      if(!body.hasClass('overlayed')) {
        $('.header').removeClass('fixed');
      }
    }
  }

  function resourcesHover (){
    if(!$('.device-version').length) {
      $('.resources__item').mouseenter(function () {
        $(this).addClass('hover').find('.resources__item-desc').slideDown();
      });
      $('.resources__item').mouseleave(function () {
        $(this).removeClass('hover').find('.resources__item-desc').slideUp();
      });
    }else{
      $('.resources__item').on('click', function () {
        if(!$(this).hasClass('hover')){
          $('.resources__item').removeClass('hover');
          $('.resources__item-desc').slideUp();
          $(this).addClass('hover').find('.resources__item-desc').slideDown();
          return false;
        }
      });
    }
  }
  function fixedSidebar(){
    if($('.channel-sidebar').length){
      if(window.pageYOffset > $('.channel-sidebar').offset().top - $('.header').outerHeight()
        && window.pageYOffset < $('.channel-sidebar').offset().top + $('.channel-sidebar').outerHeight() - ( $('.channel-sidebar__in').outerHeight() + $('.header').outerHeight() + 140 )){
        $('.channel-sidebar__in').css({
          top: $('.header').outerHeight() + 70,
          bottom: 'auto',
          left: $('.channel-sidebar').offset().left,
          'position' : 'fixed',

        })
      }else if(window.pageYOffset > $('.channel-sidebar').offset().top + $('.channel-sidebar').outerHeight() - ($('.channel-sidebar__in').outerHeight() + $('.header').outerHeight() + 140 )){
        $('.channel-sidebar__in').css({
          top: 'auto',
          bottom: '70px',
          left: 'auto',
          'position' : 'absolute',
        })
      }else{
        $('.channel-sidebar__in').css({
          top: 'auto',
          left: 'auto',
          bottom: 'auto',
          'position' : 'relative',
        })
      }
    }
  }

  function loadMoreByScroll() {
    if ($('.crafts-list').length && !$('.page-template-assessments-page').length && !$('.page-template-translated-resources-page').length) {
      if (window.pageYOffset > $('.crafts-list').offset().top + $('.crafts-list').height() - wHeight) {
        if (flagLoading && +$('.filter-result-count span').html() > 10) {
          flagLoading = 0;
          $('.loading').show();
          changeUrl(1, "");
        }
      }
    }

  }
  function loadMoreNews(){
    $('#load-posts').on('click', function(){
      if($('.page-template-webinar-page').length){
        $('.upcoming-webinar .loading').show();
      }else{
        $('.loading').show();
      }

      changeUrl(1, "");
      return false;
    });
    $('#load-posts-past').on('click', function(){
      $('.past-webinards .loading').show();
      ajaxWebinarPast();
      return false;
    });

    $('.load-posts').on('click', function(){
      if(!$(".load-posts").hasClass('active')){
        $(this).addClass('active');
        $(this).parents('.flex-module').find('.loading').show();
        changeUrl(1, "");
      }
      return false;
    })
  }

  function filterOpenMobile() {
    $('.filter-open-btn').on('click', function(){
      if(wWidth < 1024){
        $(this).parents('.filters-bar').find('.filters-bar-wrap').addClass('active');
      }
      return false;
    });
    $('.filters-bar-close').on('click', function(){
      if(wWidth < 1024){
        $(this).parents('.filters-bar').find('.filters-bar-wrap').removeClass('active')
      }
      return false;
    });
    $('.filter-buttons-apply').on('click', function(){
      if(wWidth < 1024){
        if($(".filters-bar .search-field").length){
          if($(".filters-bar .search-field").val().length){
            $('.filters-bar .search-field').trigger('submit');
          }
        }else if($(".filters-bar .srch-form").length){
          $('.filters-bar .srch-form').trigger('submit');
        }
        $('.filters-bar-wrap').removeClass('active');
      }
      return false;
    });
  }

  function craftPopUp(){
    body.on('click', '.craft-item:not(.online-item)', function(){
      if(wWidth > 812) {
        let curposition = $(window).scrollTop();
        $("body, html").addClass("overlayed");
        $("#wrapper").css({"margin-top": -curposition + "px"});

        let id = $(this).attr('data-id');
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          data: 'action=craft&id=' + id,
          success: function (html) {
            $(html).appendTo("body");
            setTimeout(function () {
              $('.craft-popup').addClass('show').focus();
            }, 500)
          }
        });
        return false;
      }
    });

    body.on('click', '.close-craft-popup, .craft-overlay', function(){
      let scrolPosition = $("#wrapper").css('margin-top').replace("px", "");
      scrolPosition = -1*scrolPosition;
      $("#wrapper").css({"margin-top":"0px"});
      $("body, html").removeClass("overlayed");
      $("body,html").scrollTop(scrolPosition);
      $('.craft-popup').removeClass('show');
      $('.craft-overlay').fadeOut(800, function(){
        setTimeout(function(){
          $('.craft-overlay, .craft-popup').remove();
        },300);
      });
      return false;
    });
  }

  function contributingPopUp() {
    body.on('click', '.contributing-btn', function () {
      let curposition = $(window).scrollTop();
      $("body, html").addClass("overlayed");
      $("#wrapper").css({"margin-top": -curposition + "px"});
      $('.contributing-overlay').fadeIn();
      $(".contributing-subject-popup").addClass('show').focus();
      return false;
    });

    body.on('click', '.contributing-overlay, .close-contributing-popup', function(){
      let scrolPosition = $("#wrapper").css('margin-top').replace("px", "");
      scrolPosition = -1*scrolPosition;
      $('.contributing-subject-popup').removeClass('show');
      setTimeout(function(){
        $("#wrapper").css({"margin-top":"0px"});
        $("body, html").removeClass("overlayed");
        $(window).scrollTop(scrolPosition);
      },100)
      $('.contributing-overlay').fadeOut();
      return false;
    });
  }

  function horizontalListingPopUp() {
    body.on('click', '.btn-popup', function () {
      let curposition = $(window).scrollTop();
      $("body, html").addClass("overlayed");
      $("#wrapper").css({"margin-top": -curposition + "px"});
      $('.contributing-overlay').fadeIn();
      $(this).next(".contributing-subject-popup").addClass('show');
      return false;
    });

    body.on('click', '.contributing-overlay, .close-contributing-popup', function(){
      let scrolPosition = $("#wrapper").css('margin-top').replace("px", "");
      scrolPosition = -1*scrolPosition;
      $("#wrapper").css({"margin-top":"0px"});
      $("body, html").removeClass("overlayed");
      $("body,html").scrollTop(scrolPosition);
      $('.contributing-subject-popup').removeClass('show');
      $('.contributing-overlay').fadeOut();
      return false;
    });
  }

  function wrapHead(el){
    if(el.length){
      el.each(function() {
        let words = $(this).text().split(' ');
        let newHeading = '';
        for (let i = 0; i < words.length; i++) {
          let del = (0.5/words.length)*i+'s';
          newHeading += '<span><em style="transition-delay: '+ del +'">' + words[i] + '</em></span> ';
        }
        $(this).html(newHeading);
      });
    }
  }

  function bordersBtn(){
    $('.ia-btn').each(function (){
      if(!$(this).find('ia-b').length){
        $(this).append("<em class='ia-b ia-b-1'></em><em class='ia-b ia-b-2'></em><em class='ia-b ia-b-3'></em><em class='ia-b ia-b-4'></em>");
      }

    });
  }

  function levelTabs(){
    $('.level-title').on('click', function(){
      if(!$(this).hasClass('active')){
        let idx = $(this).index();
        $(this).parent().find('.level-title').removeClass('active');
        $(this).parent().next().find('.level-container').hide();

        $(this).addClass('active');
        $(this).parent().next().find('.level-container').eq(idx).fadeIn();
      }
      return false;
    });

    $('.level-item-title').on('click' , function(e){
      if(!$(this).parents('.level-item').hasClass('opened')) {

        $(this).parents('.level-container').find('.level-item-container').slideUp();
        $(this).parents('.level-container').find('.level-item').removeClass('opened');

        $(this).parents(".level-item").addClass('opened');
        $(this).next().slideDown();
      }
      e.preventDefault();
    });
  }
  function stateLoad() {
    body.on('click', '.reciprocity-map path', function () {
      if(!$(this).hasClass('active')){
        let id = $(this).attr('id');
        $newId = id.replace('map-', '');
        ajaxState($newId);
        $(this).parents('.reciprocity-map').find('path').removeClass('active');
        $(this).addClass("active");
        $('.map-select .dropdown-list-item').removeClass('current');
        $('.map-select .dropdown-list-item[data-val="'+$newId+'"]').addClass('current');
        $('.map-select .select > a span').text($('.map-select .dropdown-list-item[data-val="'+$newId+'"] a').text());

      }else{
        $(this).removeClass("active");
        $(".state-wrap").html('');
        $('.map-select .dropdown-list-item').removeClass('current');
        $('.map-select .select > a span').text('Select a State');
      }
      return false;
    });
  }
  body.on('click', '.map-select .dropdown-list-item a', function () {
    let id = $(this).parent().attr('data-val');
    $(".reciprocity-map path[id='map-"+id+"']").trigger('click');
    $('.map-select .select').removeClass('open');
    return false;
  });

  function ajaxState(id){
    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: 'action=state&id=' + id,
      success: function (html) {
        $(".state-wrap").html('');
        $(html).hide().appendTo(".state-wrap").fadeIn();
      }
    });
  }

  async function activateState(){
    if($('.page-template-reciprocity-map').length) {
      let pos = await detectLocation();
      if (pos) {
        let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.lat + ',' + pos.lng + '&sensor=false&key=AIzaSyDO6zDV6Cff5oeJY3vnTkT8NPNIiOkUjKg'
        $.ajax({
          url: url,
          method: "GET",
          success: (data) => {
            let address = getAddressParts(data.results[0]);
            let state = address.administrative_area_level_1.toLowerCase();
            let country = address.country ? address.country : '';
            console.log(address)
            if (state && country === "US") {
              $(".reciprocity-map path[id='map-" + state + "']").trigger('click');
            }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
      }
    }
  }
  function getAddressParts(obj) {
    let address = {};
    obj.address_components.forEach( function(el) {
      address[el.types[0]] = el.short_name;
    });
    return address;
  }
  async function detectLocation(){

    if (navigator.geolocation) {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return {
        lng: pos.coords.longitude,
        lat: pos.coords.latitude,
      };
    }
  }

  function searchClear(){
    $('.clear-field').on('click', function(){
      $(this).parents('form').find('input[name="s"]').val('');
      $(this).parents('form').trigger('submit');
      return false;
    });
  }

  function toogleNetwork(){
    $('.network-directory__form-radio input[type="checkbox"]').on('each', function(){
      $(this).parents('.network-directory__form-radio').find(' > b').removeClass('active');
      $(this).parents('.network-directory__form').find('fieldset input').attr('disabled', '').hide();
      if($(this).is(':checked')){
        $(this).parents('.network-directory__form-radio').find(' > b:last').addClass('active');
        $(this).parents('.network-directory__form').find('input[name="orgname"]').removeAttr('disabled').show();
      }else{
        $(this).parents('.network-directory__form').find('input[name="location"]').removeAttr('disabled').show();
        $(this).parents('.network-directory__form-radio').find('> b:first').addClass('active');
      }
    });

    $('.network-directory__form-radio input[type="checkbox"]').on('change', function(){
      $(this).parents('.network-directory__form-radio').find(' > b').removeClass('active');
      $(this).parents('.network-directory__form').find('fieldset input').hide().attr('disabled', '');
      if($(this).is(':checked')){
        $(this).parents('.network-directory__form-radio').find(' > b:last').addClass('active');
        $(this).parents('.network-directory__form').find('input[name="orgname"]').show().removeAttr('disabled');
      }else{
        $(this).parents('.network-directory__form').find('input[name="location"]').show().removeAttr('disabled');
        $(this).parents('.network-directory__form-radio').find(' > b:first').addClass('active');
      }
    });


  }
  function historyNavFixed() {
    if($(".navigation-history").length) {
      let scrollDistance = $(window).scrollTop();
      let hh = $('.header').outerHeight();
      let navH = $(".navigation-history").outerHeight();
      if (scrollDistance >= $('.navigation-history-fake').offset().top - hh) {
        $(".navigation-history").addClass('fixed').css({top: hh});
        $(".navigation-history-fake").css({'height': navH});
      }else{
        $(".navigation-history").removeClass('fixed');
        $(".navigation-history").css({top: 'auto'});
        $(".navigation-history-fake").css({'height': 0});
      }
    }
  }
  function historyNav() {
    if($(".navigation-history").length){
      let scrollDistance = $(window).scrollTop();
      // Assign active class to nav links while scolling
      let _el = '';
      let flag = 0;
      $('.timeline-history').each(function() {
        if ($(this).offset().top - ($('.header').innerHeight() + $(".navigation-history").outerHeight() + wHeight*0.2 ) <= scrollDistance ) {
          flag = 1;
          _el =  $('.navigation-history a[href="#' + $(this).attr("id")+'"]');
          if(_el.length) {
            $(".navigation-history a.active").removeClass('active');
            _el.addClass('active');

            // let l = _el.offset().left - 20  - $('.navigation-history-in-pos').offset().left;
            // if(wWidth < 768){
            //   $('.navigation-history-in-pos').css({'transform': 'translateX(-'+l+'px)'});
            //   console.log(l)
            // }
          }
        }
      });
    }
  }

  function historyNavLinks() {
    $('.navigation-history a').on('click' , function(e){
      let _top = $($(this).attr('href')).offset().top - ($('.header').innerHeight() + $('.navigation-history').outerHeight() + wHeight*0.2 -2);
      $("html, body").stop().animate({scrollTop: _top }, 1000, 'linear' );
      e.preventDefault();
      e.stopPropagation();
    });
  }

  function fixedTimelineDesc(){
    if($('.timeline-left').length){
      $('.timeline-left').each(function(){

        let s = window.pageYOffset + $('.header').outerHeight() + $('.navigation-history').outerHeight() + wHeight*0.2 - $(this).offset().top;
        let h = $(this).outerHeight() - $('.header').outerHeight() - $('.navigation-history').outerHeight() ;
        let progress = 100 * s / h;
        if(progress > 100){
          progress = 100;
        }
        $(this).parents('.timeline').find('.timeline-line').css({"height" : progress+"%"});

        if(window.pageYOffset > $(this).offset().top - $('.header').outerHeight() - $('.navigation-history').outerHeight()
          && window.pageYOffset < $(this).offset().top + $(this).outerHeight() - ($(this).find('.timeline-positioned').height() + $('.header').outerHeight() + $('.navigation-history').outerHeight() ) ){
          $(this).find('.timeline-positioned').css({
            'position' : 'fixed',
            top: $('.header').outerHeight() + $('.navigation-history').outerHeight(),
            bottom: 'auto',
            left: $(this).offset().left,
            width: $(this).width()
          });

        }else if(window.pageYOffset > $(this).offset().top + $(this).outerHeight() - ( $(this).find('.timeline-positioned').height()+ $('.header').outerHeight() +  $('.navigation-history').outerHeight()) ){
          $(this).find('.timeline-positioned').css({
            'position' : 'absolute',
            top: 'auto',
            bottom: '0',
            left: 0,
            width: $(this).width()
          })
        }else{
          $(this).find('.timeline-positioned').css({
            'position' : 'relative',
            top: 0,
            left: 0,
            bottom: 'auto',
            width: '100%'
          })
        }
      });
    }
  }

  function playVideo(){
    $('.why-study-media-image a').on('click', function(){
      let v = $(this).parent().find('video').get(0);
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        v.pause();
      }else {
        $(this).addClass('active');
        v.play();
      }
      return false;
    });
  }

  function readMoreMobile(){
    $('.read-more-text').on('click', function(){
      if($(this).prev().hasClass('hide')){
        $(this).prev().removeClass('hide').slideDown();
        $(this).find('span').html($(this).attr('data-less'));
      }else{
        $(this).prev().slideUp().addClass('hide');
        $(this).find('span').html($(this).attr('data-more'));
      }
      return false;
    });
  }

  function removeExtraSpaceModule(){
    $('.flex-module.ia-bg-dark').each(function(){
      $(this).prev().addClass("next-bg-module");
    });
    $(".user-grid-small").each(function(){
      if( $(this).hasClass('exclude-line')){
        $(this).prev('.user-grid-small').addClass("flex-reduced-space");
        $(this).addClass("flex-reduced-space");
      }
    });
  }

  function paginationAjax(){
    //AJAX PAGINATION
    body.on('click', '.wp-pagenavi a', function(e){
      e.preventDefault();

      let link = $(this).attr('href');
      window.history.pushState(null, $('title').html(), link);
      $('#assessments-page-info').load(link + ' #assessments-page-info', function() {
        $('#assessments-page-info').fadeIn(500);
      });
    });
  }

  function menuItemJS(){
    $('.header__menu .nav-main > div > ul > li > a').each(function (){
      var attr = $(this).attr('href');
      if (typeof attr !== 'undefined' && attr !== false) {
        // ...
      }else{
        $(this).attr('href', 'javascript:;');
      }
    })
  }

  function wrapTable(){
    $('.content-entry table').each(function(){
      $(this).wrap('<div class="table-wrap"/>');
    });
  }

  function bannerHeight(){
    var hb = $('.promo-banner').outerHeight();
    $('.promo-banner-fake').height(hb);
  }
  function moveBody(){
    $(".header").mousemove(function(){

      $('a').blur();
    });
  }

  function CheckEmptyField(){
    $('.search-wrap__top form').on("submit",function (){
      if($(this).find('input.search-field').val().length == 0){
        return false;
      }
      console.log($(this).find('input.search-field').val().length)

    })
    $('.search-wrap form .search-field input').keyup(function(){
      if($(this).val().length > 0){
        $(this).parents('form').find('.clear-field').show();
      }else{
        $(this).parents('form').find('.clear-field').hide();
      }
    })
    $('.search-wrap form .clear-field').on("click", function(){
      $(this).hide();
      $(this).parents('form').find('.search-field input').val('');
      return false;
    })
  }




})(jQuery);

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

$(document).ready(function() {
  $('a[href="#sobre-nos"]').click(function(e) {
    e.preventDefault();

    $(".title").removeClass("ativo");
    $(".texto-home").addClass("ativo");

    if ($(".title").is(":visible")) {
      $(".title").fadeOut(function() {
        $(".texto-home").fadeIn();
      });
    } else {
      $(".texto-home").fadeOut(function() {
        $(".title").fadeIn();
      });
    }
  });
});


    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    $(document).ready(function() {
        $('#mobile_nav_list .nav-item a').on('click', function () {
            $('#mobile_menu').removeClass('active');
            $('#mobile_btn').find('i').removeClass('fa-x');
        });
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.cartao', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.card', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

$(document).ready(function() {
  $(".cartao").click(function() {
    var $this = $(this);

    $(".cartao").not($this).each(function() {
      $(this).find(".cartao-texto").slideUp(300);
      $(this).removeClass("aberto");
      $(this).find("i.fa-chevron-down").show();
      $(this).find("i.fa-chevron-up").hide();
    });

    if ($this.find(".cartao-texto").is(":visible")) {
      $this.find(".cartao-texto").slideUp(300, function() {
        $this.removeClass("aberto");
      });
      $this.find("i.fa-chevron-down").show();
      $this.find("i.fa-chevron-up").hide();
    } else {
      $this.addClass("aberto");
      $this.find(".cartao-texto").slideDown(300);
      $this.find("i.fa-chevron-down").hide();
      $this.find("i.fa-chevron-up").show();
    }
  });
});
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    $('a[href="#sobre-nos"]').on('click', function(e) {
        e.preventDefault();
        if ($(".title").is(":visible")) {
            $(".title").fadeOut(300, function() {
                $(".texto-home").fadeIn(300).addClass("ativo");
                $('.nav-item a[href="#sobre-nos"]').parent().addClass("active");
                $('.nav-item a[href="#home"]').parent().removeClass("active");
                $('.nav-item a[href="#servicos"]').parent().removeClass("active");
                $('.nav-item a[href="#footer_items"], .nav-item a[href="#copyright-mobile"]').parent().removeClass("active");
                $('html, body').animate({ scrollTop: 0 }, 500); // Rolar para o topo
            });
        } else {
            $('html, body').animate({ scrollTop: 0 }, 500); // Rolar para o topo
            $('.nav-item a[href="#sobre-nos"]').parent().addClass("active");
            $('.nav-item a[href="#home"]').parent().removeClass("active");
            $('.nav-item a[href="#servicos"]').parent().removeClass("active");
            $('.nav-item a[href="#footer_items"], .nav-item a[href="#copyright-mobile"]').parent().removeClass("active");
        }
    });

    $('a[href="#home"]').on('click', function(e) {
        e.preventDefault();
        if ($(".texto-home").is(":visible")) {
            $(".texto-home").fadeOut(300, function() {
                $(".title").fadeIn(300);
                $(".texto-home").removeClass("ativo");
                $('.nav-item a[href="#home"]').parent().addClass("active");
                $('.nav-item a[href="#sobre-nos"]').parent().removeClass("active");
                $('.nav-item a[href="#servicos"]').parent().removeClass("active");
                $('.nav-item a[href="#footer_items"], .nav-item a[href="#copyright-mobile"]').parent().removeClass("active");
                $('html, body').animate({ scrollTop: 0 }, 500); // Rolar para o topo
            });
        } else {
            $('html, body').animate({ scrollTop: 0 }, 500); // Rolar para o topo
            $('.nav-item a[href="#home"]').parent().addClass("active");
            $('.nav-item a[href="#sobre-nos"]').parent().removeClass("active");
            $('.nav-item a[href="#servicos"]').parent().removeClass("active");
            $('.nav-item a[href="#footer_items"], .nav-item a[href="#copyright-mobile"]').parent().removeClass("active");
        }
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        // Não alterar a classe active se .texto-home ou .title estiver ativo
        if ($(".texto-home").hasClass("ativo") || $('.nav-item a[href="#home"]').parent().hasClass("active")) {
            return;
        }

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        let activeSectionIndex = 0;
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    $('#mobile_nav_list .nav-item a').on('click', function () {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn').find('i').removeClass('fa-x');
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
    });

    ScrollReveal().reveal('.card', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

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
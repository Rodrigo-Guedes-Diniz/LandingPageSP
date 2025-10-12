$(document).ready(function () {

    /* === MENU MOBILE === */
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    $('#mobile_nav_list .nav-item a').on('click', function () {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn').find('i').removeClass('fa-x');
    });

    /* === TRANSIÇÃO ENTRE HOME E SOBRE NÓS === */
    $('a[href="#sobre-nos"]').on('click', function (e) {
        e.preventDefault(); // impede rolagem
        $('html, body').stop(); // cancela animações pendentes de scroll

        if ($(".title").is(":visible")) {
            $(".title").fadeOut(300, function () {
                $(".texto-home").fadeIn(300).addClass("ativo");
                updateActiveMenuLink('#sobre-nos');
                $(window).scrollTop(0); // garante que fique no topo
            });
        } else {
            $(window).scrollTop(0);
            updateActiveMenuLink('#sobre-nos');
        }
    });

    $('a[href="#home"]').on('click', function (e) {
        e.preventDefault(); // impede rolagem
        $('html, body').stop();

        if ($(".texto-home").is(":visible")) {
            $(".texto-home").fadeOut(300, function () {
                $(".title").fadeIn(300);
                $(".texto-home").removeClass("ativo");
                updateActiveMenuLink('#home');
                $(window).scrollTop(0);
            });
        } else {
            $(window).scrollTop(0);
            updateActiveMenuLink('#home');
        }
    });

    /* === FUNÇÃO GERAL PARA ATUALIZAR MENU ATIVO POR HREF === */
    function updateActiveMenuLink(target) {
        $('.nav-item').removeClass('active');
        $(`.nav-item a[href="${target}"]`).parent().addClass('active');
    }

    /* === SCROLL: marca o item ativo por área visível === */
    const navItems = $('#nav_list .nav-item');
    const navTargets = navItems.map(function () {
        const href = $(this).find('a').attr('href');
        return href ? href : null;
    }).get();

    function updateActiveMenuOnScroll() {
        const scrollPos = $(window).scrollTop();
        const docHeight = $(document).height();
        const winHeight = $(window).height();
        const headerHeight = $('header').outerHeight() || 0;
        let found = false;

        // percorre cada target do menu (ex: #home, #sobre-nos, #servicos, #footer_items)
        for (let i = 0; i < navTargets.length; i++) {
            const target = navTargets[i];
            if (!target || !target.startsWith('#')) continue;

            const $targetEl = $(target);
            if ($targetEl.length === 0) continue;

            const top = $targetEl.offset().top - headerHeight - 120;
            const bottom = top + $targetEl.outerHeight();

            if (scrollPos >= top && scrollPos < bottom) {
                navItems.removeClass('active');
                $(navItems[i]).addClass('active');
                found = true;
                break;
            }
        }

        // Se o usuário estiver no fim da página → ativa “Contato”
        const nearBottom = (scrollPos + winHeight) >= (docHeight - 50);
        if (nearBottom) {
            updateActiveMenuLink('#footer_items');
            found = true;
        }

        // Se nada foi encontrado e está no topo → ativa Home
        if (!found && scrollPos < ($(window).height() * 0.2)) {
            updateActiveMenuLink('#home');
        }

        // sombra no header
        if (scrollPos <= 0) {
            $('header').css('box-shadow', 'none');
        } else {
            $('header').css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
    }

    $(window).on('scroll', updateActiveMenuOnScroll);
    updateActiveMenuOnScroll();

    /* === ROLAGEM SUAVE AO CLICAR NOS LINKS (desktop + mobile) === */
    $('#nav_list a, #mobile_nav_list a').on('click', function (e) {
        const target = $(this).attr('href');

        // ignora o comportamento padrão para #home e #sobre-nos (já tratados)
        if (target === '#home' || target === '#sobre-nos') {
            return;
        }

        if (target && target.startsWith('#')) {
            e.preventDefault();
            const $targetEl = $(target);
            if ($targetEl.length) {
                $('html, body').animate({
                    scrollTop: $targetEl.offset().top - ($('header').outerHeight() || 0) - 90
                }, 550, function () {
                    updateActiveMenuLink(target);
                });
            }
        }
    });

    /* === SCROLLREVEAL (ANIMAÇÕES) === */
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

    /* === EXPANSÃO DOS CARTÕES === */
    $(".cartao").click(function () {
        var $this = $(this);
        $(".cartao").not($this).each(function () {
            $(this).find(".cartao-texto").slideUp(300);
            $(this).removeClass("aberto");
            $(this).find("i.fa-chevron-down").show();
            $(this).find("i.fa-chevron-up").hide();
        });

        if ($this.find(".cartao-texto").is(":visible")) {
            $this.find(".cartao-texto").slideUp(300, function () {
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

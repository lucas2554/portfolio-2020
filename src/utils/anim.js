export const anim = {

    methods: {

        hoverNav() {


            this.navTitle = "Accueil"
            $('.nav_title').html(this.navTitle.toUpperCase())

            $('.link p').each(function (i) {
                $(this).mouseover(() => {
                    $(this).addClass('no_hover hovered')
                    this.navTitle = $(this).text().toUpperCase()
                    $('.nav_title').html(this.navTitle)

                    // let route = this.$route;

                    switch (i) {
                        case 0 :
                            TweenLite.fromTo($('.nav_title'), .5, {
                                css: {
                                    top: '-500px',
                                },
                                ease: Power3.easeOut,
                            }, {
                                css: {
                                    top: '8vw',
                                },
                                ease: Power3.easeOut,
                            });
                            $('.link p:nth-child(2)').removeClass('no_hover hovered')
                            $('.link p:nth-child(3)').removeClass('no_hover hovered')
                            break;
                        case 1 :
                            TweenLite.fromTo($('.nav_title'), .5, {
                                css: {top: '-500px',},
                                ease: Power3.easeOut,
                            }, {
                                css: {top: '18vw',},
                                ease: Power3.easeOut,
                            });
                            $('.link p:nth-child(1)').removeClass('no_hover hovered')
                            $('.link p:nth-child(3)').removeClass('no_hover hovered')
                            break;
                        case 2 :
                            TweenLite.fromTo($('.nav_title'), .5, {
                                css: {top: '-500px',},
                                ease: Power3.easeOut,
                            }, {
                                css: {
                                    top: '12vw',
                                },
                                ease: Power3.easeOut,
                            });
                            $('.link p:nth-child(1)').removeClass('no_hover hovered')
                            $('.link p:nth-child(2)').removeClass('no_hover hovered')
                            break;

                    }
                })

                // $(this).mouseout(function () {
                //
                //     $(this).removeClass('hovered')
                //     console.log('leave')
                //
                // })


            })

        },

        aboutScroll() {
            $('.about').scroll(function (event) {

                let scroll = $(this).scrollTop() / 1000
                let scale = 1;
                let size = scale - scroll;
                let opacity = 0.5 - scroll


                if (scroll >= 0.080 && scroll <= 0.300) {
                    $('.img_circle').css({
                        'transform': 'scale(' + size + ')',
                        'opacity': opacity
                    })

                } else if (scroll <= 0.200) {
                    $('.img_circle').css({
                        'transform': 'scale(1)',
                        'opacity': 1
                    })
                }


            });
        },

        loadVue() {
            setTimeout(function () {
                var mainTimeline = new TimelineMax();

                $('.anim').each(function (index) {

                    let tl = new TimelineMax();

                    tl.to($(this), .5, {

                        css: {
                            top: '0',
                        },
                        ease: Power3.easeOut,
                    });

                    mainTimeline.add(tl, '-=0.05');


                })
            }, 500)

        },

        scrollAnim() {
            let ctrl = new ScrollMagic.Controller();

            $('.scrollanim').each(function (index) {

                var tl = new TimelineMax();
                tl.from(this, 1, {opacity: 0, y: 75});


                new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: "70%",
                    triggerHook: 1
                })
                    .setTween(tl)
                    .addTo(ctrl)


            })

        }
    }


}

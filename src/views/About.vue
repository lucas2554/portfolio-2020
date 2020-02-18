<template>
    <div class="about">

        <div class="top">
            <h1><span class="anim">Qui suis-je ?</span></h1>

            <div class="img_circle">
                <img src="../assets/moi.jpg" alt="">
            </div>
            <h3> <span class="anim">Lucas Gurgey <span class="text"> - Développeur Front-end junior    </span><span
                    class="emoji">👨‍💻</span></span></h3>


        </div>
        <div class="scrollable">


            <p class="scrollanim">Actuellement diplomé du DUT MMI de Montbéliard, je suis à présent étudiant en
                licence professionelle CIASIE à Nancy</p>
            <p class="scrollanim">Je me suis interessé au développement web dès ma première année de DUT. C'est un
                domaine qui me passionne
                énormément. J'adore créer pour le web. C'est quelque chose que j'aimerais faire dans un cadre
                professionnel dans les années à venir.</p>
            <p class="scrollanim"> J'estime être assez polyvalent dans les domaines du web, autant en développement
                qu'en
                design. </p>
            <p class="scrollanim">Également passionné de musique, je fait de la batterie depuis une dizaine d'année
                maintenant. 🥁 Je suis aussi percussioniste et batteur dans l'orchestre d'harmonie de Doubs.</p>
            <p class="scrollanim">Je recherche un stage dans le développement web pour la période du 13 Avril au 3
                Juillet
                2020. Si mon profil vous intéresse n'hésitez pas à me contacter 🤙!

            </p>
            <ul class="flex scrollanim">
                <li><a href=""><i class="far fa-envelope"></i></a></li>
                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                <li><a href=""><i class="far fa-file"></i></a></li>
            </ul>

            <h3 class="scrollanim">Compétences<span class="text"> - Développement web</span></h3>
            <div class="competences">

                <ul class="flex">
                    <li class="scrollanim"><img src="../assets/logo.png" alt="">
                        <p>VueJS</p></li>
                    <li class="scrollanim"><img src="../assets/jquery.png" alt="">
                        <p>Jquery</p></li>
                    <li class="scrollanim"><img src="../assets/js.png" alt="">
                        <p>Javascript</p></li>
                    <li class="php scrollanim"><img src="../assets/php.png" alt="">
                        <p>Php</p></li>
                    <li class="scrollanim"><img src="../assets/sass.png" alt="">
                        <p>Sass</p></li>
                    <li class="scrollanim"><img src="../assets/wordpress.png" alt="">
                        <p>Wordpress</p></li>

                </ul>

            </div>

            <h3 class="anim">Compétences<span class="text"> - Design</span></h3>
            <div class="competences">

                <ul class="flex">
                    <li class="scrollanim"><img src="../assets/adobe/indesign.png" alt="">
                        <p>Adobe InDesign</p></li>
                    <li class="scrollanim"><img src="../assets/adobe/adobe.png" alt="">
                        <p>Adobe Xd</p></li>
                    <li class="scrollanim"><img src="../assets/adobe/illustrator.png" alt="">
                        <p>Adobe Illustrator</p></li>
                    <li class="scrollanim"><img src="../assets/adobe/photoshop.png" alt="">
                        <p>Adobe Photoshop</p></li>
                    <li class="scrollanim"><img src="../assets/adobe/after-effects.png" alt="">
                        <p>Adobe AfterEffect</p></li>

                </ul>

            </div>


        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        methods: {},
        mounted() {


            this.aboutScroll()
            this.loadVue()
            this.scrollAnim()

            setTimeout(function () {

                TweenMax.to($('.img_circle'), 1, {
                    css: {
                        opacity: 1,
                    }
                }, 1.5)

                setTimeout(function () {

                    TweenMax.to($('.scrollanim'), 1, {
                        css: {
                            opacity: 1,
                        }
                    }, 1.5)

                }, 1500)

            }, 1500)


        }
    }
</script>


<style lang="scss">
    .about {
        $color1: #B8D2E6;
        $color2: #EB706F;

        &::-webkit-scrollbar {
            display: none;
        }

        .scrollanim {
            z-index: -1;
        }

        .anim {
            position: relative;
            top: -120px;
        }

        p {
            overflow: hidden;
        }

        height: 90vh;
        overflow: auto;
        margin-top: 10px;


        .top {
            height: 100vh;
            h1 {
                overflow: hidden;
                font-family: 'Roboto', sans-serif, light300;
                font-size: 5em;
                overflow: hidden;
                text-align: center;

                p {
                    font-size: .5em;
                    display: inline-block;
                    overflow: initial;
                    /*position: relative;*/


                }


                span {
                    font-size: .9em;
                }

            }

            .img_circle {

                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 250px;
                height: 250px;
                border: 3px solid $color2;
                border-radius: 50%;
                overflow: hidden;
                position: sticky;
                top: 5vh;
                opacity: 0;
                z-index: -1;

                -webkit-box-shadow: 0px 0px 94px -33px rgba(0, 0, 0, 0.64);
                -moz-box-shadow: 0px 0px 94px -33px rgba(0, 0, 0, 0.64);
                box-shadow: 0px 0px 94px -33px rgba(0, 0, 0, 0.64);

                img {

                    width: 100%;
                    height: auto;

                }


            }

            h3 {
                font-family: 'Roboto', sans-serif, light300;
                font-size: 3em;
                overflow: hidden;

                span {


                    &.text {
                        color: $color2;
                        font-size: .7em;
                        font-style: italic;
                    }

                    &.emoji {
                        margin-left: 15px;
                    }
                }

            }



        }


        .scrollable {
            overflow: hidden;
            height: auto;

            &::-webkit-scrollbar {
                display: none;
            }


            p {
                overflow: hidden;

                &.contact {
                    font-size: 2em;

                    span.color {
                        cursor: pointer;
                    }
                }

                font-family: 'Roboto', sans-serif, light300;
                font-size: 2em;
                line-height: 1.3em;

                .color {
                    color: $color1;
                }


            }

            h3 {
                font-family: 'Roboto', sans-serif, light300;
                font-size: 3em;
                overflow: hidden;

                span {


                    &.text {
                        color: $color2;
                        font-size: .7em;
                        font-style: italic;
                    }

                    &.emoji {
                        margin-left: 15px;
                    }
                }

            }

            ul.flex {
                display: flex;
                padding: 0;
                align-content: space-around;
                list-style: none;
                margin-bottom: 80px;
                margin-top: 50px;
                height: auto;

                li {
                    width: 33.333%;
                    text-align: center;
                    vertical-align: center;

                    a {
                        text-decoration: none;
                        color: $color2;
                        font-size: 3em;
                    }
                }
            }

            .competences {
                width: 100%;
                height: auto;
                border-top: 2px solid $color2;
                background-color: rgba(235, 112, 111, 0.1);

                .flex {
                    align-content: space-around;
                    flex-wrap: wrap;
                    height: auto;

                    li {

                        z-index: -1;
                        margin-top: 25px;

                        &.php {
                            padding-top: 50px;
                        }

                        img {
                            width: 30%;
                            height: auto;

                            -webkit-filter: grayscale(100%); /* Pour les navigateurs Chrome, Safari, Opera */
                            filter: grayscale(100%); /* Firefox */
                        }

                        p {
                            font-size: 1.2em;
                            color: $color2;
                        }
                    }
                }
            }


        }

        .scrollanim {
            position: relative;
        }


        .scroll {
            width: 0;
            height: 25px;
            background-color: #42b983;
        }


    }


</style>


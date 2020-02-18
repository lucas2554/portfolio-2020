<template>
    <div class="navigation">
        <div class="nav_inside">
            <!--            <div class="burger">-->
            <!--                <svg width="44" height="44" stroke="blue" viewBox="0 0 16 16">-->
            <!--                    <line class="line1" x1="1" x2="15" y1="4" y2="4"/>-->
            <!--                    <line class="line2" x1="1" x2="15" y1="8" y2="8"/>-->
            <!--                    <line class="line3" x1="1" x2="15" y1="12" y2="12"/>-->
            <!--                </svg>-->
            <!--            </div>-->
            <div class="link">
                <p @mouseover="changeRoute('/')">
                    Accueil
                </p>
                <p @mouseover="changeRoute('/projets')">
                    Mes Projets
                </p>
                <p @mouseover="changeRoute('/about')">
                    A propos
                </p>
            </div>
            <div class="title">
                <div class="bar"></div>
                <h3 class="nav_title">{{navTitle}}</h3>
            </div>
        </div>

    </div>


</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'navigation',
        components: {},

        data() {
            return {
                navTitle: '',

            }
        },
        methods: {
            changeRoute(route) {
                this.$router.push(route)
            }
        },
        mounted() {
            this.hoverNav()
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');

    $color2: #EB706F;
    $color1: #B8D2E6;

    .navigation {
        width: 100%;
        position: fixed;

        .nav_inside {
            /*<!--position: absolute;-->*/
            /*<!--width: 90%;-->*/
            /*<!--height: 15vh;-->*/
            /*<!--right: 0;-->*/
            /*<!--top: 80vh;-->*/
            /*<!--background-color: #FFFAF9;-->*/
            /*z-index: 1;*/

            .link {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                /*width: 150px;*/
                /*height: 100vh;*/
                width: 80%;
                height: 9vh;
                position: fixed;
                top: 88vh;
                left: 15%;
                background-color: #FFFAF9;

                border-top: 2px solid $color2;


                p {
                    padding: 15px 0 15px 0;
                    margin: 0;
                    text-align: center;
                    text-decoration: none;
                    color: $color2;
                    font-family: 'Roboto', sans-serif, light300;
                    font-size: 1.5em;

                    &.hovered {
                        &:before {
                            content: '';
                            width: 50px;
                            height: .5vh;
                            background-color: $color2;
                            display: block;
                            animation-name: line;
                            animation-duration: 1s;
                            animation-iteration-count: infinite;
                            position: relative;
                            top: 40px;
                            left: 150px;


                        }

                        @keyframes line {

                            0% {
                                left: 30%;
                                width: 0;
                            }

                            15% {
                                width: 10%;
                            }

                            100% {
                                left: 70%;
                                width: 0;
                            }

                        }

                    }

                    a {


                    }


                }
            }

        }

        div.title {

            div.bar {
                width: 75px;
                height: 100vh;
                background-color: $color1;
                position: fixed;
                top: 0;
                left: 6vw;


            }

            .nav_title {
                color: $color2;
                transform: rotate(-90deg);
                width: 100vh;
                position: fixed;
                top: 10vw;
                left: -20vw;
                font-family: 'Roboto', sans-serif;
                font-size: 6.5vw;
                text-align: left;
                margin: 0;
                font-weight: bold;
                font-style: italic;
                background-clip: text;
            }


        }

        .no_hover {
            pointer-events: none;
        }
    }

</style>

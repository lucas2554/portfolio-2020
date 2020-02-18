<template>
    <div class="home">
        <!--        <h1>C'est la home</h1>-->
        <!--        <img alt="Vue logo" src="../assets/logo.png">-->
        <h1>
            <span class="anim">
            Bonjour ! <span>&#128075;</span>
            <p>Bienvenue sur mon site ! <span>&#128421;</span></p>
            </span>
        </h1>

        <p><span class="anim">Je m'appelle <span class='color'>Lucas Gurgey</span>, j'ai 20 ans.</span></p>

        <p>
        <span class="anim">

            Je suis actuellement étudiant en <span class='color'>développement web</span>.<span>👨‍💻</span>

        <span/><br/>

        <span class="anim">
            Je recherche un <span class='color'>stage</span> dans les domaines du <span class='color'>développement web </span> </span>
        </span>

            <span class="anim">
                pour la période du 13 Avril au 3 Juillet 2020.
            </span></p>

        <p class='contact'><span class="anim">N'hésitez pas à <span class="color">me contacter !</span> 🤙</span></p>


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

            // alert('ok')

            this.loadVue()



            // $('.anim:nth-of-type(1)').fadeOut()


        }
    }
</script>

<style lang="scss">
    .home {
        $color1: #B8D2E6;

        /*<!--margin-top: -50vh;-->*/
        /*<!--transform: translateY(165%);-->*/

        .anim {
            position: relative;
            top: -120px;
        }

        h1 {
            font-family: 'Roboto', sans-serif, light300;
            font-size: 5em;
            overflow: hidden;

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
    }


</style>

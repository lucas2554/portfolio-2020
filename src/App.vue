<template>
    <div id="app">
        <!--        <div class="circle"></div>-->
        <Nav/>
        <router-view/>
        <div class="border"></div>

    </div>
</template>

<script>
    import Nav from "./views/Nav";

    export default {
        components: {Nav},
        mounted() {
            function followMouse(e) {
                TweenLite.to($('.circle'), {
                    css: {
                        left: e.pageX,
                        top: e.pageY
                    }
                });
            }

            $(window).on('mousemove', followMouse);

            this.$router.push('/')


        }
    }

</script>

<style lang="scss">
    $color1: #B8D2E6;

    body {
        margin: 0;
        padding: 0;
        background-color:#FFFAF9;

        &::-webkit-scrollbar{
            display: none;
        }



        .border{

            width:calc(100% - 20px);
            height:calc(100vh - 20px);
            border:10px solid $color1;
            top:0;
            right:0;
            position: fixed;
            z-index:-1;
        }

        .home, .projets, .about {
            width: 80%;
            margin-left: 15%;
            margin-right: auto;
            display: block;
        }

        .circle {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 0;
            left: 0;
            border: 4px $color1;
            border-style: solid;
            border-radius: 80%;
            margin-left: -20px;
            margin-top: -20px;
            z-index: 2;
        }

    }
</style>

<template>
  <div id="app">
    

    <div class="alert hidden">
      
      <div class="alert-message">
        <h2>Cпасибо за заказ!</h2>
        <p>Обработка данных может занять 15-30 минут. Мы обязательно с вами свяжемся.</p>
        <div class="close-cross" @click="hideAlert"><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
      <div class="alert-bg"></div>

    </div>

    <div class="wrapper">
  


      <div class="header">
        <div class="banner">
          <p class="main-line">AG Kravas</p>
          <p class="secondaty-tagline">
            <i class="fa fa-phone" aria-hidden="true"></i> +371 200 74 862 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-clock-o" aria-hidden="true"></i> 24/7
            <i class="fa fa-globe" aria-hidden="true"></i> Riga, Latvia
          </p>
        </div>
        <div class="content">
          <div class="menu" id="menu-handle" @click="navigateTo">
            <a class="home"><i class="fa fa-home fa-fw" aria-hidden="true"></i>Начало</a>
            <a class="prices"><i class="fa fa-money" aria-hidden="true"></i> Цены</a>
            <a class="form"><i class="fa fa-address-book-o fa-fw" aria-hidden="true"></i>Оформить заказ</a>
            <a></a>
            <a></a>
            <a class="gallery"><i class="fa fa-address-book-o fa-fw" aria-hidden="true"></i>Галерея</a>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="content">
          
          <div class="row columns-2">

            <DataRow :data-pos="'left'"></DataRow>

          </div>

          <div class="row columns-2">

            <DataRow :data-pos="'right'"></DataRow>

          </div>

          <div class="row columns-2" id="price-handle">
            
            <PriceTable></PriceTable>

            <DistanceMap></DistanceMap>

          </div>


          <div class="row columns-2" style="margin-bottom: 100px;" id="form-handle">

            <div class="form-wrapper">

              <form action="backend/mail.php" method="post" target="mail_into_the_void">

                <h2>Заказ Транспорта</h2>
                <div class="input-fields">

                  <input type="text" name="first_name" placeholder="Имя">
                  <input type="text" name="phone" placeholder="Телефон">
                  <p>Маршрут:</p><br>
                  <input id="address-input-3" class="address-input" type="text" name="where-from" placeholder="Из">
                  <input id="address-input-4" class="address-input" type="text" name="where-to" placeholder="До">
                  <textarea rows="5" name="message" cols="30" placeholder="Коротко о типе груза" maxlength="80"></textarea>

                  <div class="additional-fields checkboxes">

                    <div class="checkbox">
                      <input type="checkbox" name="additional-checkbox-1">
                      <label for="additional-checkbox-1">Грузчики</label>
                    </div>

                    <div class="checkbox">
                      <input type="checkbox" name="additional-checkbox-2">
                      <label for="additional-checkbox-2">Сборка/Разборка мебели</label>
                    </div>

                  </div>

                </div>

                <input @click="afterSubmit" id="submit-form" type="submit" name="submit" value="Отправить">

              </form>

            </div>

            <PicSlider></PicSlider>

            <iframe height="0" width="0" border="0" name="mail_into_the_void" id="mail_into_the_void"></iframe>

          </div>

        </div>
      </div>
      <div class="line line-dark"></div>
      <div class="line line-light"></div>
    </div>


  </div>
</template>

<script>

import PriceTable  from './components/PriceTable.vue';
import DataRow     from './components/DataRow.vue';
import SignUp      from './components/SignUp.vue';
import DistanceMap from './components/DistanceMap.vue';
import PicSlider   from './components/PicSlider.vue';

require('smoothscroll-polyfill').polyfill();

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    PriceTable,
    DataRow,
    SignUp,
    DistanceMap,
    PicSlider
  },
  methods: {
    hideAlert() {
      this.$el.querySelector('.alert').classList.add('hidden');
    },
    afterSubmit(e) {
      e.target.classList.add('disabled');
      e.target.value = "Отправлено";
      this.$el.querySelector('.alert').classList.remove('hidden');
    },
    navigateTo(e) {
      if ( e.target.tagName !== 'A' && e.target.parentElement.tagName !== 'A' ) return
      let classes = e.target.tagName == 'A' ? e.target.classList : e.target.parentElement.classList;
      if ( classes.contains('home') ) {
        document.querySelector('.menu').scrollIntoView({ 
          behavior: 'smooth' 
        });
      } else if ( classes.contains('prices') ) {
        document.querySelector('#price-handle').scrollIntoView({ 
          behavior: 'smooth' 
        });
      } else {
        document.querySelector('.slider-block-wrapper').scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    }
  }
}
</script>

<style lang="stylus">

@import 'assets/css/font-awesome.min.css'
@import url('https://fonts.googleapis.com/css?family=Russo+One')

// #D7CEC7
// #565656
// #76323F
// #C09F80


// archBlue       = #489fdf
// archGreen      = #1fa67a
// archDarkGreen  = #1b926c
// archLightGreen = #34a782
// archGrey       = #f5f5f5
// archDarkGrey   = #333

// archBlue          = #bcd5d1
// archGreen         = #565656
// archGrey          = #bcd5d1
// archDarkGrey      = #76323F


archYellow        = #f2b632
archDarkBlue      = #2c3e50
archGrey          = #5a5c51
archDarkGrey      = #1d2120



fontSerif      = 'PT Serif', Georgia, 'Times New Roman', serif
fontSansSerif  = 'Open Sans', Arial, sans-serif


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video
  margin 0
  padding 0
  border 0
  font-size 100%
  vertical-align baseline
  
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, main
  display block
body
  line-height 1
ol, ul
  list-style none
blockquote, q
  quotes none
blockquote:before, blockquote:after,
q:before, q:after
  content ''
  content none
table
  border-collapse collapse
  border-spacing 0
*,
*::after,
*::before
  -webkit-box-sizing border-box
  -moz-box-sizing border-box
  box-sizing border-box

html
  font-size 62.5%

html *
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

body
  font-size 1.6rem
  font-family "Open Sans", sans-serif
  color #2d3d4f
  background-color archDarkGrey

a
  text-decoration none
  
// div
//   box-shadow 0 0 5px 2px indianred
  

#app
  font-family fontSansSerif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  .alert
    position fixed
    height 100%
    width 100%
    z-index 999
    &.hidden
      display none
    .alert-message
      position absolute
      height 230px
      width 500px
      background-color #fff
      top 0px
      right 0px
      bottom 0px
      left 0px
      margin auto
      z-index 1
      text-align center
      padding 20px
      h2
        font-size 28px
        margin 20px 0px 40px
      p
        font-size 18px
        line-height 21px
      .close-cross
        position absolute
        top 8px
        right 10px
        font-size 21px
        cursor pointer
        &:hover
        &:active
        &:focus
          text-shadow 0px 0px 2px archDarkGrey
      &:after
        position absolute
        content ''
        width 100%
        height 6px
        background-color archYellow
        bottom 0px
        left 0px
        
        
    .alert-bg
      position absolute
      display block
      height 100%
      width 100%
      background-color archDarkGrey
      opacity 0.6
      z-index 0
        
      
      
  
/* positioning */

.m-l-50
  margin-left 50px

.wrapper
  .columns-2
    white-space normal
    .column
      display inline-block
      width 50%
      min-height 400px
      vertical-align top
    &:nth-child(1)
      margin-top 50px

.wrapper
  width 100%
  height 100%
  white-space nowrap
  
  
  .form-wrapper
    display inline-block
    width 35%
    background #fff
    h2
      font-size 28px
      text-align center
      margin 0px 0px 20px
    .input-fields
      p
        font-size 21px
        text-align center
        margin-top 20px
      input
        display block
        height 35px
        padding 0px 25px
        margin 5px auto
        width 70%
    form
      padding 20px
      position relative
      white-space nowrap
      text-align center
      textarea
        display block
        width 225px
        resize none
        margin auto
        margin-top 15px
      .additional-fields
        vertical-align top
        white-space nowrap
        margin-top 15px
        .checkbox
          display inline-block
          width 50%
          &:nth-of-type(1)
            width 30%
        input[type="checkbox"]
          display inline-block
          -webkit-appearance none
          position relative
          background #fff
          border 1px solid #aaa
          height 20px
          width 20px
          vertical-align middle
          margin 5px
          padding 0px !important
          &:checked
            &:after
              content '✔'
              left 0px
              right 0px
              position absolute
              text-align center
              color #2c3e50
        label
          vertical-align middle
      input[type="submit"]
        position relative
        height 50px
        border none
        box-shadow 0px 0px 3px 0px #000
        cursor pointer
        font-weight bold
        font-family 'PT Serif', Georgia, 'Times New Roman', serif
        font-size 32px
        color #2c3e50
        margin-top 20px
        &:active
        &:focus
        &:hover
          outline none
          box-shadow 0px 0px 5px 0px #000
        &.disabled
          opacity 0.7
          pointer-events none
  
  .content
    position relative
    max-width 1280px
    height 100%
    width 100%
    left 0px
    right 0px
    margin auto
    
    .item-list
      padding-left 50px
      h3
        font-size 32px
        margin 32px 0px
      p
        margin 16px 0px
      ul
        li
          margin 15px 20px
          i
            margin-right 10px
            
    .item-list-pic
      text-align center
      margin-top 40px
    
  .header
    height 100px
    background-color archYellow
    
    .banner
      .main-line
        position absolute
        font-family 'Russo One'
        font-size 44px
        left 12.3%
        top 10px
        
      .secondaty-tagline
        position absolute
        left 12.3%
        top 65px
        font-size 21px
    
    .menu
      position absolute
      display flex
      width 100%
      height 50px
      bottom -50px
      left 0px
      text-align center
      z-index 99
      border-bottom 1px solid archDarkGrey
      border-top 1px solid archDarkGrey
      
      a
        flex 1 0 15%
        background archGrey
        color #FFF
        border-radius inherit
        line-height 47px
        border 1px solid archDarkGrey
        cursor pointer
        &:nth-child(4),
        &:nth-child(5)
          background archDarkGrey
          cursor default
          pointer-events none
        &:hover
          background archDarkGrey
          color #FFF

  .main
    height 650px
    background-color archGrey
  .line
    width 100%
    height 625px
    &.line-dark
      background-color archDarkGrey
      height 520px
    &.line-light
      background-color archGrey
     


h1, h2, h3
  font-weight bold
  font-family fontSerif
  
</style>

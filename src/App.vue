<template>
  <div id="app">
    

    
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
          <div class="menu">
            <a href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>Начало</a>
            <a href="#"><i class="fa fa-money" aria-hidden="true"></i> Цены</a>
            <a href="#"><i class="fa fa-address-book-o fa-fw" aria-hidden="true"></i>Оформить заказ</a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"><i class="fa fa-address-book-o fa-fw" aria-hidden="true"></i>Галерея</a>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="content">
          
          <div class="row columns-2">

            <DataRow :data-pos="'left'"></DataRow>

<!--             <div class="column">
              <div class="item-list-pic">
                <img src="https://unsplash.it/500/300/?random">
              </div>
            </div>

            <div class="column">
              <div class="item-list item-list-1">
                <h3>Something here</h3>
                <p>Paragraph here:</p>
                <ul>
                  <li><i class="fa fa-bed" aria-hidden="true"></i>&nbsp; Furniture</li>
                  <li><i class="fa fa-industry" aria-hidden="true"></i>&nbsp; Industry</li>
                  <li><i class="fa fa-tv" aria-hidden="true"></i>&nbsp; TVs n stuff</li>
                  <li><i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Office stuff</li>
                  <li><i class="fa fa-truck" aria-hidden="true"></i>&nbsp; just stuff</li>
                </ul>
              </div>
            </div> -->


          </div>

          <div class="row columns-2">


            <DataRow :data-pos="'right'"></DataRow>
<!--             <div class="column">
              <div class="item-list-pic">
                <img src="https://unsplash.it/500/300/?random">
              </div>
            </div>

            <div class="column">
              <div class="item-list item-list-2">
                <h3>Something here</h3>
                <p>Paragraph here:</p>
                <ul>
                  <li><i class="fa fa-bed" aria-hidden="true"></i>&nbsp; Furniture</li>
                  <li><i class="fa fa-industry" aria-hidden="true"></i>&nbsp; What</li>
                  <li><i class="fa fa-tv" aria-hidden="true"></i>&nbsp; What</li>
                  <li><i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; What</li>
                  <li><i class="fa fa-truck" aria-hidden="true"></i>&nbsp; What</li>
                </ul>
              </div>
            </div> -->


          </div>

          <div class="row">
            
            <PriceTable></PriceTable>

          </div>


          <div class="row columns-2">

            <SignUp></SignUp>

          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>

import PriceTable from './components/PriceTable.vue';
import DataRow    from './components/DataRow.vue';
import SignUp     from './components/SignUp.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    PriceTable,
    DataRow,
    SignUp
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
  
/* positioning */

.wrapper
  .columns-2
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
        line-height 50px
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
    height 800px
    background-color archGrey
     


h1, h2, h3
  font-weight bold
  font-family fontSerif
  
</style>

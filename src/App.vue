<template>
  <div id="app">
    
    
    <div class="wrapper">
      <div class="header">
        <div class="content">
          <div class="menu">
            <a href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
            <a href="#"><i class="fa fa-question fa-fw" aria-hidden="true"></i>&nbsp; About us</a>
            <a href="#"><i class="fa fa-address-book-o fa-fw" aria-hidden="true"></i>&nbsp; Contacts</a>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="content">
          
          <div class="row columns-2">
            <div class="column">
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
            </div>
          </div>

          <div class="row columns-2">
            <div class="column">
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
            </div>
          </div>

          <div class="row">
            
            <PriceTable></PriceTable>

          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>

import PriceTable from './components/PriceTable.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    PriceTable
  }
}
</script>

<style lang="stylus">

@import 'assets/css/font-awesome.min.css'


archBlue       = #489fdf
archGreen      = #1fa67a
archDarkGreen  = #1b926c
archLightGreen = #34a782
archGrey       = #f5f5f5
archDarkGrey   = #333

fontSerif      = 'PT Serif', Georgia, 'Times New Roman', serif
fontSansSerif  = 'Open Sans', Arial, sans-serif

html
body
  margin 0px
  padding 0px
  
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
      ul
        li
          i
            margin-right 10px
    .item-list-pic
      text-align center
      margin-top 40px
    
  .header
    background-color archBlue
    height 200px
    
    .menu
      position absolute
      display flex
      width 500px
      height 50px
      bottom -50px
      right 0px
      box-shadow 0 0 3px 0px archDarkGrey
      border-radius 0px 0px 2px 2px
      text-align center
      z-index 99
      a
        flex 1 0 33%
        background archGrey
        color archDarkGrey
        border-radius inherit
        line-height 50px
        cursor pointer
        &:hover
          background archDarkGrey
          color #FFF

  .main
    height 800px
    background-color archGrey
     


h1, h2, h3
  font-weight bold
  font-family fontSerif

ul
  list-style-type none
  padding 0

li
  margin 15px 20px

a
  // color #42b983
  text-decoration none
  
</style>

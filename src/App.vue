<template>
  <div id="app">
    
    
    <div class="wrapper">
      <div class="header">
        <div class="content">
          <div class="menu">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contacts</a>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="content">
          
          <div class="item-list-1"></div>
          <div class="item-list-2"></div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">

archBlue       = #489fdf
archGreen      = #1fa67a
archDarkGreen  = #1b926c
archLightGreen = #34a782
archGrey       = #f5f5f5
archDarkGrey   = #333


html
body
  margin 0px
  padding 0px

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  // margin-top 60px
  

.wrapper
  width 100%
  height 100%
  
  .content
    position relative
    max-width 1280px
    height 100%
    width 100%
    left 0px
    right 0px
    margin auto
    

    box-shadow 0 0 5px 2px indianred
    
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
     


h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  // color #42b983
  text-decoration none
  
</style>

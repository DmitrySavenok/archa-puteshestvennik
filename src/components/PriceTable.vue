<template>
  <div class="pricing-container">
    <h2>Цены на перевозки по Риге</h2>
    <ul class="pricing-list bounce-invert">

      <li data-type="column">
        <header class="pricing-header">
          <div class="price">
            <span>Услуги:</span>
          </div>
        </header>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li>Транспорт <br><em> + водитель</em></li>
            <li>Транспорт <b>*</b><br><em> + 2 грузчика</em></li>
            <li>Квартирный / Офисный / Дачный переезд <b>**</b><br><em> + 2 грузчика + транспорт </em></li>
            <li></li>
          </ul>
        </div>
      </li>

      <li data-type="column">
        <header class="pricing-header">
          <div class="price">
            <span>Цены (22:00 - 9:00):</span>
          </div>
        </header>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li>18€ <em>/ ч.</em><br>7€ &nbsp;&nbsp;<em>/ доп. ч.</em></li>
            <li><em>от</em> 30€ <em>/ ед.</em><br><br></li>
            <li><em>от</em> 25€ <em>/ ч.</em></li>
          </ul>
        </div>
      </li>

      <li data-type="column">
        <header class="pricing-header">
          <div class="price">
            <span>Цены (09:00 - 22:00):</span>
          </div>
        </header>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li>30€ <em>/ ч.</em><br>10€ &nbsp;<em>/ доп. ч.</em></li>
            <li><em>от</em> 50€ <em>/ ед.</em><br><br></li>
            <li><em>от</em> 50€ <em>/ ч.</em></li>
          </ul>
        </div>
      </li>

      <div class="footnote">
        <b>*</b> - <em> одна единица груза</em><br>
        <b>**</b> - <em> погрузка, разборка, упаковка</em>
      </div>

    </ul>
    <div class="result-wrapper result">
      <h2>Калькулятор цен на перевозки из Риги</h2>
      <div class="address-input-wrapper">
        <div class="line-1">
          <label for="address-input-1">Из: </label>
          <input id="address-input-1" class="address-input" type="text" placeholder="Адрес">
        </div>
        <div class="line-2">
          <label for="address-input-2">До: </label>
          <input id="address-input-2" class="address-input" type="text" placeholder="Адрес">
        </div>
          
      </div>
      <div class="result-text">
        <p class="distance">Расстояние: <span></span></p>
        <p class="price">Цена: <span></span></p>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'PriceTable',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      table: 1
    }
  },
  methods: {
    setTable(num) {
      this.table = num;
    }
  }
}
</script>

<style lang="stylus">

.pricing-container
  display inline-block
  height 320px
  width 49%
  margin-bottom 200px
  box-shadow 0px 0px 3px 0px #000
  background #FFF
  white-space nowrap
  h2
    font-size 28px
    text-align center
    margin 15px 0px
  .result
    width 100%
    height 150px
    background #FFF
    box-shadow 0px 0px 3px 0px #000
    
    h2
      padding-top 5px
    
    .address-input-wrapper
      display inline-block
      width 60%
      height 60%
      padding 0px 25px
      
      .address-input
        height 35px
        padding 0px 25px
        margin 5px 0px
      
      label
        display inline-block
        width 45px
      
    .result-text
      display inline-block
      height 100%
      vertical-align top
      padding 18px 0px
      font-size 29px
      
      p
        font-family "Roboto"
        line-height 1em
        margin 0 0 10px 0
        font-size 21px
      

      
  .pricing-list
    height 262px
    margin-bottom 30px
    font-size 0px
    
    header
      background #5a5c51
      color #fff
      padding 5px 8px
      font-size 18px
    
    &>li
      display inline-block
      width 30%
      height 80%
      vertical-align top
      text-shadow 1px 1px 1px rgba(0, 0, 0, 0.1)
      border-right 1px solid #C1C3D1
      background #EBEBEB
      
      &:nth-child(1)
        width 40%
        
      &:nth-child(3)
        border-right none
      
    .pricing-features
      li
        font-size 18px
        padding 10px 15px
        white-space normal
        &:nth-child(2)
          background #FFF
        em
          font-size 14px
    
    .footnote
      font-size 16px
      margin-top 10px
      padding-left 8px 
  // .pricing-list
  //   height 250px
  //   marg
  // .pricing-list
  //   width 60%
  //   left 0px
  //   right 0px
  //   margin auto
  //   background transparent url('../assets/img/riga-skyline.jpg');
    
  //   &:before
  //     top 0
  //     left 0
  //     right 0
  //     bottom 0
  //     content ''
  //     position absolute
  //     background rgba(90, 93, 165, .8)
  //     background linear-gradient(to bottom, rgba(90, 93, 165, 1), rgba(0, 0, 0, .7))

</style>

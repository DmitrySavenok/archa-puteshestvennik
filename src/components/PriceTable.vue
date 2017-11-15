<template>
  <div class="pricing-container">
    <h2> {{ $t('prices.heading') }} </h2>
    <ul class="pricing-list bounce-invert">

      <li data-type="column">
        <header class="pricing-header">
          <div class="price">
            <span>{{ $t('prices.list') }}</span>
          </div>
        </header>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li v-html="$t('prices.transport')"></li>
            <li v-html="$t('prices.transportWithLoaders')"></li>
            <li v-html="$t('prices.move')"></li>
            <li></li>
          </ul>
        </div>
      </li>

      <li data-type="column">
        <header class="pricing-header">
          <div class="price">
            <span>{{ $t('prices.pricesDay') }}</span>
          </div>
        </header>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li v-html="$t('prices.prices[0]')"></li>
            <li v-html="$t('prices.prices[1]')"></li>
            <li v-html="$t('prices.prices[2]')"></li>
          </ul>
        </div>
      </li>

      <li data-type="column">
        <header class="pricing-header">
          <div class="price">
            <span>{{ $t('prices.pricesNight') }}</span>
          </div>
        </header>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li v-html="$t('prices.prices[3]')"></li>
            <li v-html="$t('prices.prices[4]')"></li>
            <li v-html="$t('prices.prices[5]')"></li>
          </ul>
        </div>
      </li>

      <div class="footnote">
        <span v-html="$t('prices.footnotes[0]')"></span>
        <span v-html="$t('prices.footnotes[1]')"></span>
      </div>

    </ul>
    <div class="result-wrapper result">
      <h2>{{$t('prices.calcHeading')}}</h2>
      <div class="address-input-wrapper">
        <div class="line-1">
          <label for="address-input-1">{{ $t('prices.from') }}</label>
          <input id="address-input-1" class="address-input" type="text" :placeholder="$t('prices.address')">
        </div>
        <div class="line-2">
          <label for="address-input-2">{{ $t('prices.to') }}</label>
          <input id="address-input-2" class="address-input" type="text" :placeholder="$t('prices.address')">
        </div>
          
      </div>
      <div class="result-text">
        <p class="distance"><span>{{ $t('prices.distance') }}</span></p>
        <p class="price"><span>{{ $t('prices.price') }}</span></p>
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
  height 325px
  width 49%
  margin-bottom 233px
  box-shadow 0px 0px 3px 0px #000
  background #FFF
  white-space nowrap
  h2
    font-size 24px
    text-align center
    margin 15px 0px
  .result
    width 100%
    height 184px
    background #FFF
    box-shadow 0px 0px 3px 0px #000
    
    h2
      padding-top 5px
      white-space normal
      padding 5px 45px
    
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

</style>

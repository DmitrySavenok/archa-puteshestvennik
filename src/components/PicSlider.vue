<template>

	<div class="slider-block-wrapper">

	  <slider :pages="pages" :sliderinit="sliderinit">
	    <!-- slot  -->
	  </slider>
		
	</div>

</template>

<script>

import slider from 'vue-concise-slider';

export default {
	name: 'PicSlider',
	data () {
	  return {
	    pages:[
	      {
	        title: '',
	        style:{
	         background:'url(dist/assets/img/3.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/4.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/5.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/6.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/7.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/8.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/9.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/10.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/11.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/12.jpg)'
	        }
	      },
	      {
	       title: '',
	       style:{
	        background:'url(dist/assets/img/13.jpg)'
	        }
	      }
	    ],
	    sliderinit: {
	      currentPage: 0,
	      thresholdDistance: 200,
	      thresholdTime: 1000,
	      autoplay: 4000,
	      loop: true,
	      direction: 'horizontal'
	    }
	  }
	},
	components: {
	    slider
	}
}

</script>

<style lang="stylus">

.slider-block-wrapper
	display inline-block
	width 63%
	float right
	.slider-container
		height 511px
		width 100%
		margin 0px
</style>

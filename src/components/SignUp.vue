<template>

	<div>

		<form>
			<div class="group">
				<input v-on:blur="checkData" type="text"><span class="highlight"></span><span class="bar"></span>
				<label>Name</label>
			</div>
			<div class="group">
				<input v-on:blur="checkData" type="email"><span class="highlight"></span><span class="bar"></span>
				<label>Email</label>
			</div>
			<button type="button" class="button buttonBlue">Subscribe
				<div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
			</button>
		</form>

		<h2>Your Address {{address}}</h2>

		<div class="container">
			<div class="control-group">
				<h1>Checkboxes</h1>
				<label class="control control--checkbox">First checkbox
					<input type="checkbox" checked="checked"/>
					<div class="control__indicator"></div>
				</label>
				<label class="control control--checkbox">Second checkbox
					<input type="checkbox"/>
					<div class="control__indicator"></div>
				</label>
				<label class="control control--checkbox">Disabled
					<input type="checkbox" disabled="disabled"/>
					<div class="control__indicator"></div>
				</label>
				<label class="control control--checkbox">Disabled & checked
					<input type="checkbox" disabled="disabled" checked="checked"/>
					<div class="control__indicator"></div>
				</label>
			</div>
		</div>

		<form>
			<div class="group">
				<vue-google-autocomplete
						id="map"
						classname="form-control"
						placeholder="Start typing"
						v-on:placechanged="getAddressData"
						v-on:blur="checkData"
				>
				</vue-google-autocomplete>
				<label>Address 1</label>
			</div>

			<div class="group">

				<vue-google-autocomplete
						id="map2"
						classname="form-control"
						placeholder="Start typing"
						v-on:placechanged="getAddressData"
						v-on:blur="checkData"
				>
				</vue-google-autocomplete>
				<label>Address 2</label>
			</div>
		</form>
		
	</div>

</template>

<script>

import VueGoogleAutocomplete from 'vue-google-autocomplete';

export default {
	name: 'SignUp',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			address: ''
		}
	},
	components: {
		VueGoogleAutocomplete
	},
	methods: {
		checkData: function(e) {
			console.log(e);
			if ( e.target ) {
				if ( e.target.value ) {
					e.target.classList.add('used');
				} else {
					e.target.classList.remove('used');
				}
			}
		},
		/**
		* When the location found
		* @param {Object} addressData Data of the found location
		* @param {Object} placeResultData PlaceResult object
		*/
		getAddressData: function (addressData, placeResultData) {
				this.address = addressData;
		}
	}
}

</script>

<style scoped>

* { box-sizing:border-box; }

h1, h3 { font-weight: 300; }

h1 { color: #636363; }

h3 { color: #4a89dc; }

form {
	width: 380px;
	margin: 4em auto;
	padding: 3em 2em 2em 2em;
	background: #fafafa;
	border: 1px solid #ebebeb;
	box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}

.group { 
	position: relative; 
	margin-bottom: 45px; 
}

input {
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: #fafafa;
	color: #636363;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid #757575;
}

input:focus { outline: none; }


/* Label */

label {
	color: #999; 
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: all 0.2s ease;
}


/* active */

input:focus ~ label, input.used ~ label {
	top: -20px;
  transform: scale(.75); left: -2px;
	/* font-size: 14px; */
	color: #4a89dc;
}


/* Underline */

.bar {
	position: relative;
	display: block;
	width: 100%;
}

.bar:before, .bar:after {
	content: '';
	height: 2px; 
	width: 0;
	bottom: 1px; 
	position: absolute;
	background: #4a89dc; 
	transition: all 0.2s ease;
}

.bar:before { left: 50%; }

.bar:after { right: 50%; }


/* active */

input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }


/* Highlight */

.highlight {
	position: absolute;
	height: 60%; 
	width: 100px; 
	top: 25%; 
	left: 0;
	pointer-events: none;
	opacity: 0.5;
}


/* active */

input:focus ~ .highlight {
	animation: inputHighlighter 0.3s ease;
}


/* Animations */

@keyframes inputHighlighter {
	from { background: #4a89dc; }
	to 	{ width: 0; background: transparent; }
}


/* Button */

.button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  margin: .3em 0 1em 0;
  width: 100%;
  vertical-align: middle;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  letter-spacing: 1px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #3160B6;
  cursor: pointer;
  transition: all 0.15s ease;
}
.button:focus { outline: 0; }


/* Button modifiers */

.buttonBlue {
  background: #4a89dc;
  text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
}

.buttonBlue:hover { background: #357bd8; }


/* Ripples container */

.ripples {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
}


/* Ripples circle */

.ripplesCircle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

.ripples.is-active .ripplesCircle {
  animation: ripples .4s ease-in;
}


/* Ripples animation */

@keyframes ripples {
  0% { opacity: 0; }

  25% { opacity: 1; }

  100% {
    width: 200%;
    padding-bottom: 200%;
    opacity: 0;
  }
}

</style>

<style lang="stylus">

</style>

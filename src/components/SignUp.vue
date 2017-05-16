<template>

	<div>

		<h2>Your Address {{address}}</h2>

		<vue-google-autocomplete
		    id="map"
		    classname="form-control"
		    placeholder="Start typing"
		    v-on:placechanged="getAddressData"
		>
		</vue-google-autocomplete>
		
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

<style lang="sass">

</style>

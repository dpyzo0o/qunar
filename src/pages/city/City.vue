<template>
  <div>
    <city-header @backtop="handleBackTop"></city-header>
    <city-tab></city-tab>
    <city-list
      :hotCityList="hotCities"
      :cities="cities"
      ref="cityList"
    >
    </city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityTab from './components/Tab'
import CityList from './components/List'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    CityList
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      listBackTop: ''
    }
  },
  methods: {
    fetchCityData () {
      axios.get('/api/city.json')
        .then(this.handleCityData)
    },
    handleCityData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    handleBackTop () {
      this.$refs.cityList.listBackTop()
    }
  },
  mounted () {
    this.fetchCityData()
  }
}
</script>

<style scoped></style>

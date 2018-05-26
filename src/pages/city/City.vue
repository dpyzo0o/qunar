<template>
  <div>
    <CityHeader @backtop="handleBackTop"/>
    <CityTab/>
    <CityList
      :hotCityList="hotCities"
      :cities="cities"
      ref="cityList"
    />
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
  mounted () {
    this.fetchCityData()
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
  }
}
</script>

<style scoped></style>

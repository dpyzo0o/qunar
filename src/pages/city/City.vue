<template>
  <div>
    <city-header></city-header>
    <city-tab></city-tab>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityTab from './components/Tab'
import CityList from './components/List'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    CityList
  }
}
</script>

<style scoped></style>

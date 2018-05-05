<template>
  <div>
    <city-header></city-header>
    <city-tab></city-tab>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityTab from './components/Tab'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <HomeHeader/>
    <HomeSwiper :itemList="swiperList"/>
    <HomeIcons :itemList="iconList"/>
    <HomeLike :itemList="likeList"/>
    <HomeWeekend :itemList="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeLike from './components/Like'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLike,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      likeList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.fetchHomeData()
    }
  },
  methods: {
    fetchHomeData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.handleHomeData)
    },
    handleHomeData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.likeList = res.data.likeList
        this.weekendList = res.data.weekendList
      }
    }
  }
}
</script>

<style scoped></style>

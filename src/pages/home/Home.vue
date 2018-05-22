<template>
  <div>
    <home-header :city="city"></home-header>
    <div class="scroll-wrapper" ref="wrapper">
      <div class="content">
        <home-swiper :itemList="swiperList"></home-swiper>
        <home-icons :itemList="iconList"></home-icons>
        <home-like :itemList="likeList"></home-like>
        <home-weekend :itemList="weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeLike from './components/Like'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import BScroll from 'better-scroll'

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
      city: '',
      swiperList: [],
      iconList: [],
      likeList: [],
      weekendList: []
    }
  },
  methods: {
    fetchHomeData () {
      axios.get('/api/index.json')
        .then(this.handleHomeData)
    },
    handleHomeData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.likeList = res.data.likeList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.fetchHomeData()
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style>
.scroll-wrapper {
  overflow: hidden;
  position: absolute;
  top: .86rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

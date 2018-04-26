<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in itemList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    itemList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
}

.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-img {
  width: 100%;
}
</style>

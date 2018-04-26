<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
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
      },
      swiperList: [{
        id: '0001',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/14/21f410d1016c8702.jpg_640x200_84d0effe.jpg'
      }, {
        id: '0002',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_640x200_e1b76963.jpg'
      }, {
        id: '0003',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/2c/4a64ed2e384e0b02.jpg_640x200_da6dfd87.jpg'
      }, {
        id: '0004',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/45/0ac34e31b4a1fb02.jpg_640x200_7b7e09c7.jpg'
      }, {
        id: '0005',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg'
      }]
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

<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="(item, index) in images"
          :key="index"
        >
          <img class="gallery-img" :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.container >>> .swiper-container {
  overflow: inherit;
  position: static;
}

.container >>> .swiper-wrapper {
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
}

.gallery-img {
  width: 100%;
}

.swiper-pagination {
  color: #fff;
  bottom: .4rem;
  line-height: .8rem;
}
</style>

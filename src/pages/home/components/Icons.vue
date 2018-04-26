<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    itemList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.itemList.forEach((item, index) => {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 56%;
}

.swiper-container {
  padding-bottom: .54rem;
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .44rem;
  box-sizing: border-box;
  padding: .2rem .1rem 0 .1rem;
}

.icon-img-content {
  height: 100%;
  display: block;
  margin: 0 auto;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: var(--dark-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

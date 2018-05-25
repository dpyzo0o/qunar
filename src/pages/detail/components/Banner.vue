<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span><em>10</em>
        </div>
      </div>
    </div>
    <common-gallery
      :images="images"
      v-show="showGallery"
      @close="handleGalleryClick"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      images: ['http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_r_800x800_7329a802.jpg', 'http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_r_800x800_5a57e1fe.jpg', 'http://img1.qunarzz.com/sight/p0/1410/be/d44bb81ae3218a627a65ded451326b2c.water.jpg_r_800x800_389b4c2c.jpg', 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png', 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClick () {
      this.showGallery = false
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .6rem;
  background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
}

.banner-img {
  width: 100%;
}

.banner-info {
  position: relative;
  color: #fff;
  z-index: 1;
}

.banner-title {
  position: absolute;
  bottom: .36rem;
  right: .2rem;
  left: .2rem;
  height: .4rem;
  font-size: .36rem;
}

.banner-number {
  position: absolute;
  width: 1.2rem;
  height: .4rem;
  line-height: .4rem;
  left: .2rem;
  bottom: .86rem;
  border-radius: .2rem;
  text-align: center;
  font-size: var(--small-font-size);
  background: rgba(0, 0, 0, .5);
}

.banner-icon {
  font-size: var(--small-font-size);
}

.banner-number em {
  margin-left: .1rem;
}
</style>

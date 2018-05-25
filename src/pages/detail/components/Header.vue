<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      故宫
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      let opacity = top / 160
      opacity = opacity > 1 ? 1 : opacity
      this.opacityStyle.opacity = opacity
      this.showAbs = !(top > 5)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.header-abs {
  position: absolute;
  left: .1rem;
  top: .1rem;
  width: .72rem;
  height: .72rem;
  line-height: .72rem;
  border-radius: .36rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, .5);
}

.header-abs-back {
  margin-left: -.02rem;
  font-weight: bold;
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: var(--header-height);
  text-align: center;
  color: #fff;
  background: var(--bg-color);
  font-size: var(--large-font-size);
}

.header-fixed-back {
  position: absolute;
  top: 0;
  left: 0;
  width: .64rem;
  text-align: center;
  font-size: .4rem;
  color: #fff;
}
</style>

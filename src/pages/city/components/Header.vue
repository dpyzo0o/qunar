<template>
  <div class="header" @click="handleClick">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    handleClick (evt) {
      if (evt.target.className === 'header') {
        this.$emit('backtop')
      }
    }
  }
}
</script>

<style scoped>
.header {
  line-height: var(--header-height);
  text-align: center;
  color: #fff;
  background: var(--bg-color);
  font-size: var(--large-font-size);
}

.back-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: .64rem;
  text-align: center;
  font-size: .4rem;
  color: #fff;
}
</style>

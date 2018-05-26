<template>
  <div class="tab">
    <ul>
      <li
        :class="{ active: isDomestic}"
        @click="setRegion('domestic')"
      >
        境内
      </li>
      <li
        :class="{ active: !isDomestic}"
        @click="setRegion('foreign')"
      >
        境外·港澳台
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityTab',
  data () {
    return {
      isDomestic: true
    }
  },
  methods: {
    setRegion (region) {
      this.isDomestic = region === 'domestic'
    }
  }
}
</script>

<style scoped>
.tab {
  height: .4rem;
  line-height: .4rem;
  padding: 0 1rem .2rem;
  background: var(--bg-color);
  color: #fff;
}

ul {
  border: 1px solid #fff;
  border-radius: .03rem;
  overflow: hidden;
}

li {
  float: left;
  width: 50%;
  text-align: center;
  font-size: var(--medium-font-size);
}

li.active {
  background-color: #fff;
  color: var(--bg-color);
}
</style>

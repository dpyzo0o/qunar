<template>
  <div class="tab">
    <ul>
      <li :class="{ active: isDomestic}" @click="handleDomestic">境内</li>
      <li :class="{ active: !isDomestic}" @click="handleForeign">境外·港澳台</li>
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
    handleDomestic () {
      if (!this.isDomestic) {
        this.isDomestic = !this.isDomestic
      }
    },
    handleForeign () {
      if (this.isDomestic) {
        this.isDomestic = !this.isDomestic
      }
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

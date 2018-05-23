<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="section">
        <div class="title">热门城市</div>
        <ul class="item-list col-3">
          <li
            v-for="item in hotCityList"
            :key="item.id"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="section">
        <div class="title">字母排序</div>
        <ul class="item-list col-6">
          <li
            v-for="(item, letter, index) in cities"
            :key="index"
            @click="handleLetterClick"
          >
            {{letter}}
          </li>
        </ul>
      </div>
      <div
        class="section"
        v-for="(item, letter) in cities"
        :key="letter"
        :ref="letter"
      >
        <div class="title">{{letter}}</div>
        <ul class="item-list col-4">
          <li
            v-for="innerItem in item"
            :key="innerItem.id"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCityList: Array,
    cities: Object
  },
  methods: {
    handleLetterClick (evt) {
      let el = this.$refs[evt.target.innerText][0]
      this.scroll.scrollToElement(el)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.46rem;
  bottom: 0;
  width: 100%;
}

.title {
  padding: .24rem .3rem;
  font-size: var(--small-font-size);
  background-color: var(--bg-light-color);
}

.item-list {
  position: relative;
  overflow: hidden;
}

.item-list li {
  float: left;
  height: .9rem;
  border-bottom: .02rem solid #ddd;
  margin-bottom: -1px;
  line-height: .9rem;
  text-align: center;
}

.col-3 li {
  width: 33.33%;
}

.col-4 li {
  width: 25%;
}

.col-6 li {
  width: 16.66%;
  border: none;
}

.col-3::before {
  content: "";
  position: absolute;
  width: 33.33%;
  height: 100%;
  left: 33.33%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

.col-4::before {
  content: "";
  position: absolute;
  width: 25%;
  height: 100%;
  left: 25%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

.col-4::after {
  content: "";
  position: absolute;
  width: 25%;
  height: 100%;
  left: 75%;
  border-left: .02rem solid #ddd;
}
</style>

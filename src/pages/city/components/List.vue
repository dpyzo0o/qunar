<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="section">
        <div class="title">热门城市</div>
        <ul class="item-list col-3">
          <li>北京</li>
          <li>上海</li>
          <li>三亚</li>
          <li>香港</li>
          <li>杭州</li>
          <li>广州</li>
          <li>成都</li>
          <li>深圳</li>
          <li>武汉</li>
          <li>桂林</li>
          <li>西安</li>
          <li>厦门</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">字母排序</div>
        <ul class="item-list col-6">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">A</div>
        <ul class="item-list col-4">
          <li>北京</li>
          <li>上海</li>
          <li>三亚</li>
          <li>香港</li>
          <li>杭州</li>
          <li>广州</li>
          <li>成都</li>
          <li>深圳</li>
          <li>武汉</li>
          <li>桂林</li>
          <li>西安</li>
          <li>厦门</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">B</div>
        <ul class="item-list col-4">
          <li>北京</li>
          <li>上海</li>
          <li>三亚</li>
          <li>香港</li>
          <li>杭州</li>
          <li>广州</li>
          <li>成都</li>
          <li>深圳</li>
          <li>武汉</li>
          <li>桂林</li>
          <li>西安</li>
          <li>厦门</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">C</div>
        <ul class="item-list col-4">
          <li>北京</li>
          <li>上海</li>
          <li>三亚</li>
          <li>香港</li>
          <li>杭州</li>
          <li>广州</li>
          <li>成都</li>
          <li>深圳</li>
          <li>武汉</li>
          <li>桂林</li>
          <li>西安</li>
          <li>厦门</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
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

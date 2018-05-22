<template>
  <div>
    <div class="gap"></div>
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span class="title-desc">猜你喜欢</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in itemList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
      <li class="item-more">查看所有商品</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  props: {
    itemList: Array
  }
}
</script>

<style scoped>
.gap {
  height: .2rem;
  background: var(--bg-light-color);
}

.title {
  font-size: var(--large-font-size);
  line-height: .36rem;
  color: var(--dark-text-color);
  text-indent: .2rem;
  padding: .24rem 0;
}

.title-img {
  display: inline-block;
  width: .3rem;
  height: .3rem;
  vertical-align: top;
}

.item {
  display: flex;
  height: 2.4rem;
  overflow: hidden;
}

.item-info {
  flex: 1;
  padding-left: .22rem;
  min-width: 0;
}

.item-img-wrapper {
  width: 2rem;
  height: 2rem;
  padding: .2rem;
}

.item-img {
  width: 100%;
}

.item-title {
  padding-top: .28rem;
  height: .44rem;
  line-height: .44rem;
  font-size: var(--large-font-size);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-desc {
  height: .4rem;
  line-height: .4rem;
  margin-top: .26rem;
  color: var(--light-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-button {
  line-height: .44rem;
  margin-top: .26rem;
  background: #ff9300;
  padding: 0 .2rem;
  border-radius: .06rem;
  color: #fff;
}

.item-more {
  line-height: .4rem;
  padding: .2rem 0;
  text-align: center;
  color: var(--bg-color);
}
</style>

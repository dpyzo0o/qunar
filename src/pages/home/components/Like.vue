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
  data () {
    return {
      itemList: [
        {
          id: '0001',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '东城区'
        },
        {
          id: '0002',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title: '八达岭长城',
          desc: '延庆县'
        },
        {
          id: '0003',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '北京野生动物园',
          desc: '大兴区'
        },
        {
          id: '0004',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
          title: '北京欢乐谷',
          desc: '朝阳区'
        },
        {
          id: '0005',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg',
          title: '颐和园',
          desc: '海淀区'
        }
      ]
    }
  }
}
</script>

<style scoped>
.gap {
  height: .2rem;
  background: #eee;
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

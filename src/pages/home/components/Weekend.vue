<template>
  <div>
    <div class="title">
      <span class="title-desc">周末去哪儿</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in itemList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      itemList: [
        {
          id: '0001',
          imgURL: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '北京赏花好地方',
          desc: '乱花渐欲迷人眼，京城赏花大搜索'
        },
        {
          id: '0002',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '北京必游TOP10',
          desc: '来北京必去的景点非这些地方莫属'
        },
        {
          id: '0003',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '寻找北京的皇城范',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          id: '0004',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          title: '学生最爱的博物馆',
          desc: '周末干嘛？北京很多博物馆已经免费开放啦'
        },
        {
          id: '0005',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
          title: '儿童剧场，孩子的乐园',
          desc: '带宝贝观看演出，近距离体验艺术的无穷魅力'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  font-size: var(--large-font-size);
  line-height: .8rem;
  color: var(--dark-text-color);
  text-indent: .26rem;
  background: #eee;
}

.item-info {
  padding: .14rem .2rem .2rem .2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}

.item-img {
  width: 100%;
}

.item-title {
  line-height: .48rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1.4rem;
}

.item-desc {
  line-height: .42rem;
  color: var(--light-text-color);
  font-size: var(--small-font-size);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1.4rem;
}
</style>

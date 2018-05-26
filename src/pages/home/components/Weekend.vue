<template>
  <div>
    <div class="title">
      <span class="title-desc">周末去哪儿</span>
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in itemList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgURL"
          >
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
  props: {
    itemList: Array
  }
}
</script>

<style scoped>
.title {
  line-height: .8rem;
  color: var(--dark-text-color);
  text-indent: .26rem;
  background: var(--bg-light-color);
}

.item-info {
  padding: .14rem .2rem .2rem .2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 38.8%;
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

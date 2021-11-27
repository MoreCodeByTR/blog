<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="我的收藏"
      sub-title="morecode的推荐网站"
    />
    <div class="card-container">
      <a-card title="Vue" style="width: 300px">
        <p v-for="item in linkList.vue" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="React" style="width: 300px">
        <p v-for="item in linkList.react" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="UI组件" style="width: 300px">
        <p v-for="item in linkList.uilib" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="微信小程序" style="width: 300px">
        <p v-for="item in linkList.wechat" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="工具" style="width: 300px">
        <p v-for="item in linkList.tool" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="HTML" style="width: 300px">
        <p v-for="item in linkList.html" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="JavaScript" style="width: 300px">
        <p v-for="item in linkList.javascript" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
      <a-card title="大佬博客" style="width: 300px">
        <p v-for="item in linkList.dalao" :key="item.name">
          <a :href="item.herf" target="_blank">{{ item.name }}</a>
        </p>
      </a-card>
    </div>
  </div>
</template>

<script>
import linkList from "./link"
export default {
  components: {},
  data() {
    return {
      linkList: linkList,
    }
  },
  methods: {},
}
</script>
<style>
.large-font {
  font-size: 25px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
</style>

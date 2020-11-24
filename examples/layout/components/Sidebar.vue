<template>
  <div class="sidebar">
    <div v-for="item in routes" :key="item.path" class="sidebar__link">
      <router-link :to="item.path" tag="span">{{
        item.meta.title
      }}</router-link>
    </div>
  </div>
</template>
<script>
import { constantRoutes } from "../../router";
export default {
  computed: {
    routes() {
      return constantRoutes[0].children;
    },
    activeMenu() {
      const route = this.$route;
      // const { meta, path } = route;
      // const pathArr = path.split("/");
      return route;
    }
  }
};
</script>
<style lang="scss">
.sidebar {
  padding: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__link {
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
    &:hover,
    &:active {
      color: #277da1;
    }
  }
}
</style>

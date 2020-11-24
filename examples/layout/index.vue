<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <navbar />
    </div>
    <div class="main-container">
      <sidebar class="sidebar-container" />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
  }
  .main-container {
    display: flex;
    padding-top: 50px;
  }
}
</style>

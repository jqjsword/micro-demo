<template>
  <el-menu mode="horizontal" default-active="home" :router="true">
    <template v-for="menu in menus" :key="menu.key">
      <el-menu-item :index="menu.path" :route="menu.path">{{
        menu.title
      }}</el-menu-item>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
const menus = [
  {
    key: "home",
    title: "主页",
    path: "/",
  },
  {
    key: "vue",
    title: "app-vue",
    path: "/my-page",
  },
  {
    key: "focus",
    title: "foucus项目",
    path: "/my-focus",
  },
];
</script>

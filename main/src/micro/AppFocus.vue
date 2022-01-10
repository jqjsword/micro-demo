<template>
  <!-- 
      name(必传)：应用名称，每个`name`都对应一个应用，必须以字母开头，且不可以带有 `.`、`#` 等特殊符号
      url(必传)：页面html的地址
      baseroute(可选)：基座应用分配给子应用的路由前缀，就是上面的my-page
     -->
  <micro-app
    name="app-focus"
    url="http://localhost:1888/"
    baseroute="/my-focus"
  ></micro-app>
</template>

<style>
micor-app-body {
  height: 100%;
}
micro-app-body {
  height: 100%;
}
</style>

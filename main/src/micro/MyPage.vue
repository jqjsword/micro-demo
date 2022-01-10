<template>
  <div>
    <h1>子应用</h1>
    <!-- 
      name(必传)：应用名称，每个`name`都对应一个应用，必须以字母开头，且不可以带有 `.`、`#` 等特殊符号
      url(必传)：页面html的地址
      baseroute(可选)：基座应用分配给子应用的路由前缀，就是上面的my-page
     -->
    <micro-app
      name="vue2"
      url="http://localhost:8080/"
      baseroute="/my-page"
    ></micro-app>
  </div>
</template>

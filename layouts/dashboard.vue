<template>
<sideBar />
<div class="float-left">
  <NavBar class="float-left nav-w"/>
  <slot/>
</div>
</template>
<style scoped>
.nav-w{
  width: calc(100vw - 316px);
}
</style>
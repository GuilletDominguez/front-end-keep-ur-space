<template>
  <div>
  <router-view/>
  </div>
  
</template>

export default {
    new Vue({
      el : '#app',
      data: {
        checked : false
      }
  });
}


<template>
   <div>
      <v_header />
      <router-view></router-view>
   </div>
</template>

<script>
import v_header from './components/v_header.vue';
import router from './router/index';
export default {
   components: { v_header },
   name: 'app',
};
</script>

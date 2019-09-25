<template>
  <div class="container">
    <h1>Users information</h1>
    <div id="nav">
      <!-- <router-link v-for="(item, index) in userArray" :key="index" :to="item"> -->
      <router-link v-for="(item, index) in userArray" :key="index" :to="{ name:'Users', params: {id: item} }">
        {{ item }} |
      </router-link>
    </div>
    <user/>
  </div>
</template>

<script>
  import user from '@/components/User';
  export default {
    name: 'Users',
    components: {
      user,
    },
    data() {
      return {
        userArray: ['Yesid', 'Isabella', 'Catalina', 'Juan'],
      }
    }
  }
</script>

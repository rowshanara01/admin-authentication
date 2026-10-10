<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {Layout, GuestLayout} from '@/views/common';
import { useAuth } from './stores';
const auth = useAuth();
console.log(auth.getAuthStatus);
</script>

<template>
  <div>
      <Layout v-if="auth.getAuthStatus">
          <section class="content">
              <router-view />
          </section>
      </Layout>

      <GuestLayout v-if="!auth.getAuthStatus">
         <router-view />
      </GuestLayout>
  </div>
</template>

<style scoped>

</style>

<script setup>
import FooterView from './components/FooterView.vue';
import NavbarView from './components/NavbarView.vue';
</script>

<template>
  <NavbarView />
  <router-view />
  <FooterView />
</template>

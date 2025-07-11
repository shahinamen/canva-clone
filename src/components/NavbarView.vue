<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path) => route.path === path ? 'text-indigo-600' : 'text-gray-700';
const mobileOpen = ref(false);
const templateOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 bg-white shadow z-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img
            class="h-8 w-auto"
            src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
            alt="Canva"
          />
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          <div class="relative group">
            <div class="inline-flex items-center gap-x-1 cursor-pointer font-medium text-gray-700 hover:text-black">
  <span>Templates</span>
  <i class="pi pi-chevron-down mt-1"></i>
</div>
            <!-- Dropdown -->
            <div
              class="absolute left-0 top-full mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all"
            >
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Business</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Education</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Social Media</a>
            </div>
          </div>
          <RouterLink to="/help-center" :class="['font-medium hover:text-black', isActive('/help-center')]">Help</RouterLink>
          <RouterLink to="/pricing" :class="['font-medium hover:text-black', isActive('/pricing')]">Pricing</RouterLink>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-black text-sm font-medium hidden md:block">Log in</a>
          <button class="bg-[#8C30F5] hover:bg-[#6c1dcc] text-white px-4 py-1.5 rounded-full text-sm font-semibold hidden md:block">
            Sign up
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 cursor-pointer hover:text-black"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden px-4 pb-4 space-y-2">
      <div class="border-t pt-2">
        <div @click="templateOpen = !templateOpen" class="flex justify-between items-center cursor-pointer">
          <span class="text-gray-700 font-medium">Templates</span>
          <svg
            :class="{ 'rotate-90': templateOpen }"
            class="w-4 h-4 transition-transform"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div v-if="templateOpen" class="pl-4 mt-1 space-y-1">
          <a href="#" class="block py-1 text-sm text-gray-600">Business</a>
          <a href="#" class="block py-1 text-sm text-gray-600">Education</a>
          <a href="#" class="block py-1 text-sm text-gray-600">Social Media</a>
        </div>
        <a href="#" class="block py-1 text-gray-700 font-medium">Features</a>
        <a href="#" class="block py-1 text-gray-700 font-medium">Learn</a>
        <a href="#" class="block py-1 text-gray-700 font-medium">Pricing</a>
        <a href="#" class="block py-2 text-sm text-gray-600">Log in</a>
        <button class="w-full bg-[#8C30F5] hover:bg-[#6c1dcc] text-white px-4 py-2 rounded-full text-sm font-semibold mt-2">
          Sign up
        </button>
      </div>
    </div>
  </header>
</template>

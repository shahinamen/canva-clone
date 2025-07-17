<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-bl from-[#fedacb] to-[#e8ddf6] px-4 py-10 text-black">
    <div class="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl md:text-4xl font-semibold text-center mb-8">Login Information</h2>
      
      <div class="grid grid-cols-1 gap-6">
        <!-- First Name -->
        <div>
          <label for="first-name" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="firstName"
            type="text"
            id="first-name"
            name="first-name"
            autocomplete="given-name"
            placeholder="Enter your Email"
            class="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Last Name -->
        <div>
          <label for="last-name" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="lastName"
            type="password"
            id="last-name"
            name="last-name"
            autocomplete="family-name"
            placeholder="Enter your Password"
            class="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <!-- First Name -->
        <div>
          <label for="first-name" class="block text-sm font-medium text-gray-700"></label>
          <button
            type="submit"
            class="w-full flex justify-center items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >Submit</button>
        </div>

      </div>
    </div>
  </div>
</template>

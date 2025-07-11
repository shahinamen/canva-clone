<script setup>
import { ref } from 'vue';
const card = [
    {
        title: 'Free Plan',
        description: 'Basic features for individuals.',
        price: '$0/month',
        buttonText: 'Choose Plan',
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    },
    {
        title: 'Pro Plan',
        description: 'Advanced features for professionals.',
        price: '$15/month',
        buttonText: 'Choose Plan',
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    },
    {
        title: 'Enterprise Plan',
        description: 'Custom solutions for businesses.',
        price: 'Contact Us',
        buttonText: 'Contact Sales',
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    }
]
</script>
<template>
    <div class="flex flex-col items-center justify-center bg-gradient-to-bl from-[#8C30F5] to-[#6c1dcc] text-white">
        <h1 class="text-2xl py-8 md:text-3xl fw-bold">Design any thing with the right plan</h1>
    </div>
    <div>
        <h2 class="text-3xl text-center py-8">Pricing Plans</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            <div v-for="item in card" :key="item.title" class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">{{ item.description }}</h3>
                <p class="text-gray-700 mb-4">{{ item.title }}</p>
                <p class="text-2xl font-bold mb-4">{{ item.price }}</p>
                <button class="bg-[#8C30F5] hover:bg-[#6c1dcc] text-white px-4 py-2 rounded-full">{{ item.buttonText }}</button>
            </div>
        </div>
    </div>
</template>
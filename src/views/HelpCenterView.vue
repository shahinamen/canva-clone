<script setup>
import { defineComponent, ref } from 'vue'

const topics = [
    {
        title: "Account settings",
        description: "Change your email or password, delete your account, and set up SSO"
    },
    {
        title: "Payments, pricing, and billing",
        description: "Manage plans or payments, and fix card errors"
    },
    {
        title: "Teams and groups",
        description: "Create, manage, and delete teams and groups"
    },
    {
        title: "Downloading, saving, and sharing",
        description: "Download or save to your device, and share with others"
    },
    {
        title: "Canva plans",
        description: "Learn about Canva Pro, Canva Teams, Education, and Nonprofits"
    },
    {
        title: "Print and delivery",
        description: "Order prints, track order status and delivery times"
    },
    {
        title: "Editing and designing",
        description: "Design with templates, photos, text, videos, and more"
    },
    {
        title: "Fix a problem",
        description: "Find quick solutions to common problems"
    }
]
</script>
<template>
    <div class="max-w-full mx-auto py-8 bg-gradient-to-bl from-[#fedacb] to-[#e8ddf6] text-black px-4">
        <h1 class="text-3xl md:text-5xl font-bold text-center mb-6">Help <div class="text-center bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">Center</div></h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
            <div v-for="topic in topics" :key="topic.title" class="">
                <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col h-full">
                    <h2 class="text-lg font-semibold mb-2">{{ topic.title }}</h2>
                    <p class="text-gray-600 flex-grow">{{ topic.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

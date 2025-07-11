<script setup>
const services = [
    {
        title: 'Design',
        description: 'Create stunning graphics, presentations, and more with our easy-to-use design tools.',
        icon: '<i class="pi pi-palette border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Generate',
        description: 'Use AI to generate unique content and designs tailored to your needs.',
        icon: '<i class="pi pi-mars border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Collaborate',
        description: 'Work together with your team in real-time on any project.',
        icon: '<i class="pi pi-briefcase border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Share',
        description: 'Easily share your designs and projects with anyone, anywhere.',
        icon: '<i class="pi pi-share-alt border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Learn',
        description: 'Access tutorials and resources to improve your design skills.',
        icon: '<i class="pi pi-book border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Inspire',
        description: 'Get inspired by a community of creators and their amazing work.',
        icon: '<i class="pi pi-crown border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Create',
        description: 'Bring your ideas to life with our powerful creation tools.',
        icon: '<i class="pi pi-pencil border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    },
    {
        title: 'Explore',
        description: 'Discover new trends and ideas in the world of design.',
        icon: '<i class="pi pi-arrow-right-arrow-left border-2 border-indigo-600 p-6 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"></i>'
    }
];
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-gradient-to-r from-red-100 to-indigo-100 p-8">
        <h1 class="mt-8 mb-8 text-4xl md:text-8xl">
            What will you 
            <div class="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">design today?</div>
        </h1>
        <div class="text-md text-center text-gray-600 md:text-xl">With Canva you can design, generate, and work on anything.</div>
        <button class="border-2 border-indigo-600 rounded-full px-3 py-2 mt-3 cursor-pointer hover:text-white hover:bg-indigo-600">Browse Templates</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <div v-for="service in services" :key="service.title" class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-2 border-indigo-600 cursor-pointer hover:bg-gray-100">
            <div v-html="service.icon" class="text-4xl mb-4"></div>
            <h2 class="text-xl font-semibold mb-2">{{ service.title }}</h2>
            <p class="text-gray-600 text-center">{{ service.description }}</p>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-red-600 p-8">
        <h1 class="mt-8 mb-8 text-4xl text-white md:text-8xl">Design and code with AI</h1>
        <div class="text-md text-center text-gray-300 md:text-xl">With Canva you can design, generate, and work on anything.</div>
        <button class="border-2 border-white text-white rounded-lg px-3 py-2 mt-3 cursor-pointer hover:text-black hover:bg-white">Design with AI</button>
    </div>
</template>
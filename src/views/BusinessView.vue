<script setup>
const services = [
    {
        title: 'Design',
        description: 'Create stunning graphics, presentations, and more with our easy-to-use design tools.',
        icon: 'pi-palette'
    },
    {
        title: 'Generate',
        description: 'Use AI to generate unique content and designs tailored to your needs.',
        icon: 'pi-mars'
    },
    {
        title: 'Collaborate',
        description: 'Work together with your team in real-time on any project.',
        icon: 'pi-briefcase'
    },
    {
        title: 'Share',
        description: 'Easily share your designs and projects with anyone, anywhere.',
        icon: 'pi-share-alt'
    },
    {
        title: 'Learn',
        description: 'Access tutorials and resources to improve your design skills.',
        icon: 'pi-book'
    },
    {
        title: 'Inspire',
        description: 'Get inspired by a community of creators and their amazing work.',
        icon: 'pi-crown'
    },
    {
        title: 'Create',
        description: 'Bring your ideas to life with our powerful creation tools.',
        icon: 'pi-pencil'
    },
    {
        title: 'Explore',
        description: 'Discover new trends and ideas in the world of design.',
        icon: 'pi-arrow-right-arrow-left'
    }
];
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-gradient-to-r from-red-100 to-indigo-100 p-8">
        <h1 class="mt-8 mb-8 text-4xl md:text-8xl">
            What will you 
            <div class="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">design today?</div>
        </h1>
        <div class="text-md text-center text-gray-600 md:text-xl mb-8">With Canva you can design, generate, and work on anything.</div>
        <button class="border-2 border-indigo-600 rounded-full px-3 py-2 mt-3 cursor-pointer hover:text-white hover:bg-indigo-600">Browse Templates</button>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-5xl">
            <div v-for="service in services" :key="service.title" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <i :class="`pi ${service.icon} text-4xl text-indigo-600 mb-4`"></i>
                <h2 class="text-xl font-semibold mb-2">{{ service.title }}</h2>
                <p class="text-gray-500">{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>
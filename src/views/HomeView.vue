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
        <h1 class="mt-8 mb-8 text-3xl md:text-5xl">
            What will you 
            <div class="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">design today?</div>
        </h1>
        <div class="text-md text-center text-gray-600 md:text-xl">With Canva you can design, generate, and work on anything.</div>
        <button class="border-2 border-indigo-600 rounded-full px-3 py-2 mt-3 cursor-pointer hover:text-white hover:bg-indigo-600">Browse Templates</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <div
        v-for="service in services"
        :key="service.title"
        class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-2 border-indigo-600 cursor-pointer group hover:bg-gray-100"
        >
        <div class="text-4xl mb-4">
            <i
            :class="[
                'pi',
                service.icon,
                'border-2 border-indigo-600 p-6 rounded-full text-indigo-600',
                'group-hover:bg-indigo-600 group-hover:text-white',
                'transition-colors duration-300'
            ]"
            ></i>
        </div>
        <h2 class="text-xl font-semibold mb-2">{{ service.title }}</h2>
        <p class="text-gray-600 text-center">{{ service.description }}</p>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-red-600 p-8">
        <h1 class="mt-8 mb-8 text-2xl text-white md:text-4xl">Design and code with AI</h1>
        <div class="text-md text-center text-gray-300 md:text-xl">With Canva you can design, generate, and work on anything.</div>
        <button class="border-2 border-white text-white rounded-lg px-3 py-2 mt-3 cursor-pointer hover:text-black hover:bg-white">Design with AI</button>
    </div>
    <div class="flex flex-col items-center justify-center bg-gradient-to-r from-red-100 to-indigo-100 p-8">
        <h1 class="mt-8 mb-8 text-3xl md:text-5xl">What will you create?</h1>
        <div class="text-md text-center text-gray-600 md:text-xl">With Canva you can design, generate, and work on anything.</div>
        <button class="border-2 border-indigo-600 rounded-full px-3 py-2 mt-3 cursor-pointer hover:text-white hover:bg-indigo-600">Get Started</button>
    </div>
    <div class="bg-slate-950 p-8 text-center text-white">
        <h2 class="text-2xl md:text-4xl text-green-500 pt-8">Creativity Delivery Platform</h2>
        <h2 class="text-2xl md:text-4xl text-white">built for products that send big</h2>
        <p class="mb-4 mt-8">Connect with millions of creators, share your work, and get inspired.</p>
        <button class="border-2 border-green-500 text-white rounded-full px-3 py-2 mt-3 cursor-pointer hover:bg-green-500 mb-8">Join Now</button>
    </div>
    <div class="bg-white p-8 text-center">
         <h2 class="text-2xl md:text-4xl text-slate-950 mb-4">Industry best analytics</h2>
        <p class="mb-4">Complex and user-friendly dashboards with key deliverability metrics for every mailbox provider.</p>
        <button class="border-2 border-indigo-600 text-black rounded-full px-3 py-2 mt-3 cursor-pointer hover:bg-indigo-600 hover:text-white mb-8">Create Now</button>
    </div>
</template>
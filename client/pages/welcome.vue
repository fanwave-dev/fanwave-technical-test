<template>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Fanwave</h1>
            <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Message from backend api: <span class="text-gray-900">{{ data.message }}</span></p>
        </div>
    </main>
</template>
<script setup>

const showError = ref(false)

const { status, data, error } = await useFetch('http://backend.localhost/api/welcome', {
    async onResponseError({ request, response, options }) {
        showError.value = response._data.error
    },
})

</script>

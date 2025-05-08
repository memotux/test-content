<script lang="ts" setup>
const skip = ref(0)
const { data, status, error } = await useAsyncData(
  'home',
  () => queryCollection('content').skip(skip.value).first(),
  {
    watch: [skip],
  }
)

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Fallo al iniciar contenido.',
    fatal: true,
  })
}
</script>

<template>
  <h1>Test Content</h1>
  <article v-if="status === 'success' && data">
    <header>
      <h1>{{ data.title }}</h1>
    </header>
    <ContentRenderer :value="data" />
  </article>
  <div v-else>
    <h2>Status: {{ status }}</h2>
    <pre>{{ error }}</pre>
  </div>
  <footer>
    <button @click="skip--">About</button><button @click="skip++">Post</button>
  </footer>
</template>

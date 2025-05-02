<script lang="ts" setup>
const skip = ref(0)
const { data, pending, error } = await useAsyncData(
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
  <article v-if="!pending && data">
    <header>
      <h1>{{ data.title }}</h1>
    </header>
    <ContentRenderer :value="data" />
  </article>
  <footer>
    <button @click="skip--">Anterior</button><button @click="skip++">Siguiente</button>
  </footer>
</template>

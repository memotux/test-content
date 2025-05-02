<script lang="ts" setup>
const route = useRoute()
const { data, pending, error } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)

if (error.value) {
  if (import.meta.dev) {
    console.error(error.value)
  }
  throw createError({
    statusCode: 404,
    statusMessage: 'No se encontro el contenido.',
    fatal: true,
  })
}
</script>

<template>
  <article v-if="!pending && data">
    <header>
      <h1>{{ data.title }}</h1>
    </header>
    <ContentRenderer :value="data" />
    <footer>
      <NuxtLink to="/">Regresar a Inicio</NuxtLink>
    </footer>
  </article>
</template>

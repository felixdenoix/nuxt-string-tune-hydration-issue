<script lang="ts" setup>
  const logSomeError = (e: unknown) => {
    console.error(e);
  }
</script>

<template>
  <NuxtErrorBoundary @error="logSomeError">
  <main>
    <div class="test" v-for="i in 10" :key="i" string string-repeat>
      <p>Block {{ i }}</p>
      <img :src="`https://placeholdit.com/600x400/dddddd/999999?text_${i}`"></img>
    </div>
  </main>
  </NuxtErrorBoundary>
</template>

<style lang="postcss">
.test {
  /*// Default static styles*/
  border: 1px solid transparent;

  /*// Animation styles only when plugin is ready*/
  html.-string & {
    transition: border 1s ease;

    &.-inview {
      border: 1px solid red;
    }
  }
}
</style>

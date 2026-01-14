<template>
  <main>
    <div class="test" v-for="i in 10" :key="i" string string-repeat>
      <p>Block {{ i }}</p>
      <img :src="`https://placeholdit.com/600x400/dddddd/999999?text_${i}`"></img>
    </div>
  </main>
</template>

<style>
.test {
  border: 1px solid transparent;
  transition: border 1s ease;
}
.test.-inview {
  border: 1px solid red;
}
</style>

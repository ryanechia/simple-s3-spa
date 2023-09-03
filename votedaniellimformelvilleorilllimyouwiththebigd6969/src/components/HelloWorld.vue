<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <img class="banner" src="~@/assets/daniel head shot.jpg">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">for Melville Council</h1>
    <h3>
       I love the community I live in and want to help make Melville a better place.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.banner {
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 2rem;
  align-self: center;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

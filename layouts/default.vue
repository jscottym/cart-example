<script lang="ts" setup>
const { total } = storeToRefs(useCartStore())
const route = useRoute();
</script>

<template>
<!--create a default nuxt layout with a header, left menu and body-->

  <div class="flex flex-col w-full h-dvh">
    <header class="flex justify-between items-center p-4 bg-gray-200 justify-between">
      <div class="">
        Cart example
      </div>

      <div v-if="total > 0">Cart total: ${{ total }}.00</div>
    </header>
    <div class="grid grid-cols-12 divide-x h-full">
      <div class="col-span-3">
        <NuxtLink to="/" active-class="active" class="block p-2" >1. All on one page</NuxtLink>

        <NuxtLink to="/components" active-class="active" class="block p-2">2. With child components</NuxtLink>

        <NuxtLink to="/composable" active-class="active" class="block p-2">3. Child components and composable</NuxtLink>

        <NuxtLink to="/pinia" active-class="active" class="block p-2">4. With Pinia Store</NuxtLink>
      </div>

      <div class="col-span-9 p-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  font-weight: bold;
}
</style>

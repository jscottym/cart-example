<script lang="ts" setup></script>

<template>
<!--create a default nuxt layout with a header, left menu and body-->

  <div class="flex flex-col w-full h-dvh">
    <header class="flex justify-between items-center p-4 bg-gray-200">
      <div class="">
        Header
      </div>
    </header>
    <div class="grid grid-cols-12 divide-x h-full">
      <div class="col-span-3">
        <nuxt-link to="/" class="block p-2">All on one page</nuxt-link>

        <nuxt-link to="/components" class="block p-2">With child components</nuxt-link>

        <nuxt-link to="/pinia" class="block p-2">With Pinia Store</nuxt-link>

        <nuxt-link to="/another" class="block p-2">Another unrelated route</nuxt-link>
      </div>

      <div class="col-span-9 p-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

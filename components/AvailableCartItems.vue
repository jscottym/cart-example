<script lang="ts" setup>
import type {CartItem} from "~/types/cart";

const props = defineProps<{
  availableItems: CartItem[]
}>();

const emit = defineEmits<{ (e: 'addItem', item: CartItem): void }>();

function addItemToCart(item: CartItem) {
  emit('addItem', item);
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="text-xl bold">Here are the available cart items</div>
    <div class="flex flex-col gap-2">
      <div class="ring-1 ring-gray-200 rounded flex items-center gap-2 p-4" v-for="item in availableItems" :key="item.name">
        <div>{{ item.name }}</div>
        <div>${{ item.price }}.00</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addItemToCart(item)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

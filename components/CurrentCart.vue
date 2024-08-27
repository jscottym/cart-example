<script lang="ts" setup>
import type {CartItem} from "~/types/cart";

const props = defineProps<{
  cartItems: CartItem[];
  total: number;
  cartItemsGrouped: (CartItem & { quantity: number })[];
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="pt-12 text-xl bold">Here is your cart</div>
    <div class="flex flex-col gap-2">
      <div v-if="cartItems.length === 0">Your cart is empty</div>
      <template v-else>
        <div>Your cart total: ${{ total }}.00</div>
        <div
            class="ring-1 ring-gray-200 rounded flex items-center gap-2 p-4"
            v-for="item in cartItemsGrouped"
            :key="item.name"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.quantity }}</div>
          <div>${{ item.price }}.00</div>
        </div>

        <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-start"
            @click="$emit('emptyCart')"
        >
          Empty cart
        </button>
      </template>

    </div>
  </div>
</template>

<style scoped></style>

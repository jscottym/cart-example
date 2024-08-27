<script lang="ts" setup>
  import type {CartItem} from "~/types/cart";

  definePageMeta({
    title: '1. All on one page',
  });

  const availableItems = [
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 3 },
    { name: 'Orange', price: 4 },
    { name: 'Grape', price: 5 },
    { name: 'Kiwi', price: 6 },
  ];
  const cartItems = ref([] as CartItem[]);
  const total = computed(() => cartItems.value.reduce((acc, item) => acc + item.price, 0));
  const cartItemsGrouped = computed(() => {
    const grouped = {} as Record<string, CartItem & {quantity: number}>;
    cartItems.value.forEach((item) => {
      if (!grouped[item.name]) {
        grouped[item.name] = { ...item, price: 0, quantity: 0 };
      }
      grouped[item.name].price += item.price;
      grouped[item.name].quantity += 1;
    });
    return Object.values(grouped);
  });

  function addItemToCart(item: CartItem) {
    cartItems.value.push(item);
  }

  function emptyCart() {
    cartItems.value = [];
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

    <div class="pt-12 text-xl bold">Here is your cart</div>
    <div class="flex flex-col gap-2">
      <div v-if="cartItems.length === 0">Your cart is empty</div>
      <template v-else>
        <div>Your cart total: ${{ total }}.00</div>
        <div
            class="ring-1 ring-gray-200 rounded flex items-center gap-2 p-4"
            v-for="item in cartItemsGrouped" :key="item.name">
          <div>{{ item.name }}</div>
          <div>{{ item.quantity }}</div>
          <div>${{ item.price }}.00</div>
        </div>

        <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-start"
            @click="emptyCart()"
        >
          Empty cart
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import type {CartItem} from "~/types/cart";

const availableItems = [
  { name: 'Apple', price: 2 },
  { name: 'Banana', price: 3 },
  { name: 'Orange', price: 4 },
  { name: 'Grape', price: 5 },
  { name: 'Kiwi', price: 6 },
];

const cartItems = ref([] as CartItem[]);

function addItemToCart(item: CartItem) {
  cartItems.value.push(item);
}

function emptyCart() {
  cartItems.value = [];
}

const total = computed(() => cartItems.value.reduce((acc, item) => acc + item.price, 0));

const cartItemsGrouped = computed(() => {
  const grouped = {} as Record<string, CartItem & { quantity: number }>;
  cartItems.value.forEach((item) => {
    if (!grouped[item.name]) {
      grouped[item.name] = { ...item, price: 0, quantity: 0 };
    }
    grouped[item.name].price += item.price;
    grouped[item.name].quantity += 1;
  });
  return Object.values(grouped);
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <AvailableCartItems
        :availableItems="availableItems"
        @addItem="addItemToCart"
    />

    <CurrentCart
        :cartItems="cartItems"
        :total="total"
        :cartItemsGrouped="cartItemsGrouped"
        @empty-cart="emptyCart"
    />
  </div>
</template>

<style scoped></style>

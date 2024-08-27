<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '~/store/useCartStore';

const { addItemToCart, emptyCart } = useCartStore();
const { cartItems, total, cartItemsGrouped, availableItems } = storeToRefs(useCartStore());
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

<script lang="ts" setup>

const {
  availableItems,
  cartItems,
  addItemToCart,
  emptyCart,
  total,
  cartItemsGrouped,
} = useCartComposable();

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

import type {CartItem} from "~/types/cart";

export const useCartStore = defineStore('cart', ()=> {
  const availableItems = ref<CartItem[]>([
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 3 },
    { name: 'Orange', price: 4 },
    { name: 'Grape', price: 5 },
    { name: 'Kiwi', price: 6 },
  ]);
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

  return {
    availableItems,
    cartItems,
    cartItemsGrouped,
    total,
    addItemToCart,
    emptyCart,
  };

});

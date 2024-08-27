# Nuxt / Vue / Pinia tutorial

## To Use
Install the project dependencies (eg, what's in package.json):

```bash
npm install
```

Go to http://localhost:3000
1. Click on 'All on one page' nav item and familiarize yourself with the way the cart works. Open /pages/index.vue and look at how it's built. This example puts everything on one page. Easy, but not very re-usable
2. Click nav item 'With Child components' and notice it works the same way. Open /pages/components.vue, /components/AvailableCartItems.vue, /components/CurrentCart.vue and notice how in this example we use components. Notice that props are passed into the components, and the component emits events.
3. Click nav item 'Child components and composable' and open /pages/composable.vue and /composables/useCartComposable.ts. Notice here that the logic is extracted into a composable and imported. Now the core state (data) and logic of the cart can be re-used anywhere, easily. 

But we still have a problem. Notice with options 1, 2 and 3, that if you ever leave the page (eg, click on another nav item), you completely lose all of your state. This is because the state all dies when the component is unmounted, which happens when you go to a different page. Enter "stores", and Pinia.
4. Click nav item "With Pinia Store", and open /pages/pinia.vue along with /store/useCartStore.ts. Notice it predominantly looks exactly like the code in the component and the composable. Now interact with the cart, then click around to other pages. Come back, and whammo - the state is still there. That's what stores do - they keep global state available. It's all reactive, meaning whatever pages use it will update automatically if the store state ever changes. To prove it to you, go to /layouts/default.vue and notice how the cart total is displayed in the header. It's using the same store state as the cart page.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```
or

```bash
nuxi dev
```

## To recreate this project:

#### 1) run the following commands in terminal:

```bash
npm i nuxi # install the nuxi cli
nuxi init # initiate a new nuxi project
npm i pinia @pinia/nuxt # install pinia
npx module add tailwindcss #install tailwindcss
````
#### 2) add or append this toto nuxt.config.ts
    
```typescript
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt', // adds pinia as a nuxt module
    '@nuxtjs/tailwindcss' // adds tailwind as a nuxt module
  ],
  pinia: {
    storesDirs: ['./store/**'], // sets up auto-import for pinia stores
  },
})
```

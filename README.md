# Nuxt / Vue / Pinia tutorial

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


## To Use
Install the project dependencies (eg, what's in package.json):

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```
or

```bash
nuxi dev
```

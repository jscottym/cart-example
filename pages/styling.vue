<script setup lang="ts">
definePageMeta({
    layout: 'blank',
});
</script>

<template>
    <div class="scroll-container">
        <div class="header">Header</div>
        
        <div class="wrapper">
            <div 
                v-for="i in 10" :key="i" class="box" 
                :class="`box-${i}`"
            >
                box-{{ i }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.scroll-container {
    max-height: 100dvh; /* Full viewport height */
    display: flex;
    flex-direction: column;
}

.header {
    background-color: bisque;
    padding: 1rem;
    position: sticky; /* Ensure header stays at the top while scrolling */
    top: 0;
    z-index: 10;
}

.wrapper {
    overflow-y: auto; /* Enable vertical scrolling */
    border: 1px solid aquamarine;
    margin: 1rem;
    padding: 1rem;
}

.box {
    padding: 1rem;
    border: 3px solid black;
    box-sizing: border-box;
    width: 50%;
    min-height: 80px;
    margin: 1rem auto;
    position: relative;
}

.box-1 {
    background-color: darkmagenta;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1;
}

.box-2 {
    background-color: burlywood;
    width: 80%;
}

.box-3 {
    background-color: darkolivegreen;
    width: 60%;
}
</style>

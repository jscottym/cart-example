<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
    <div class="header">

    </div>
    <div class="wrapper">
      <div class="box box-1">Box 1</div>
      <div class="box box-2">Box 2</div>
      <div class="box box-3">Box 3</div>
      <div class="box box-4">Box 4</div>

    </div>
  </template>

<style scoped>

.header {
    position: sticky 20px;
    width: 100px;
    height: 100px;
    border: 2px solid red;

}

.wrapper {
  display: flex;
  justify-content: flex-start ;
  align-items: flex-start;
  padding: 20px;
  gap: .5rem;
  min-height: 25rem;
  border: 2px solid red;

}

.box {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.box-1 {
    background-color: blue;
    color: white;
    height: 15rem;
}


.box-2 {
    background-color: pink;
    height: 10rem;
}


.box-3 {
    background-color: teal;
}

.numbered-box {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}

</style>

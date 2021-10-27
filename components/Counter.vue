<template>
  <div class="my-3">
    <button class="rounded border border-gray-400 px-2 mx-2 hover:bg-gray-400" @click="dec">
      dec
    </button>
    <span>{{ count }}</span>
    <button class="rounded border border-gray-400 px-2 mx-2 hover:bg-gray-400" @click="inc">
      inc
    </button>
  </div>
</template>

<script setup lang='ts'>
const count = ref(Math.round(Math.random() * 20))

function inc() {
  this.count += 1
}
function dec() {
  this.count -= 1
}
</script>

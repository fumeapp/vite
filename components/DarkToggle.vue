<script setup lang='ts'>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <span v-if="isDark">Dark</span>
    <span v-else>Light</span>
  </button>
</template>

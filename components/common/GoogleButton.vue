<template>
  <button
    class="center-directive border border-grayBorder rounded-lg font-yekanBakhBold text-textLightBlack dark:text-textWhite w-[400px] h-[42px] hover-shadow"
  >
    <img
      class="w-6 pl-2"
      src="@/assets/images/icons/google.svg"
      alt="google"
    />{{ text }}
  </button>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  text:String
})
</script>
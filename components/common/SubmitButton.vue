<template>
  <button
    :class="[
      textColor,
      bgColor,
      font,
      'text-base font-yekanBakhBold w-[400px] h-[42px] rounded-lg hover-shadow',
    ]"
  >
    {{ text ? text : "ثبت" }}
  </button>
</template>

<script setup>
const props = defineProps(["textColor", "bgColor", "textColor", "font","text"]);
</script>

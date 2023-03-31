<template>
  <button
    :class="[
      color ? 'text-' + color : '',
      bgColor ? 'bg-' + bgColor : '',
      font ? 'font-' + font : '',
      'text-base font-bold w-[400px] h-[42px] rounded-lg hover-shadow',
    ]"
  >
    {{ text ? text : "ثبت" }}
  </button>
</template>

<script setup>
const props = defineProps(["text", "color", "bgColor", "font"]);

console.log(props.text);
</script>

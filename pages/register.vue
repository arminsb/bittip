<template>
  <div class="flex w-full">
    <!-- <AuthIllustration /> -->

    <div class=" center-directive flex-col">
      <input class="my-input" type="text"  placeholder="وارد کردن نام"/>
      <input class="my-input" type="text"  placeholder="وارد کردن نام خانوادگی "/>
      <input class="my-input" type="email"  placeholder="وارد کردن ایمیل"/>
      <input class="my-input" type="password"  placeholder="**********"/>
      <input class="my-input" type="password"  placeholder="**********"/>

      <button class="bg-primaryBlue yekan-bakh">ثبت نام</button>
      <CommonSubmitButton class="hover-shadow font-yekanBakh" :text="'ثبت نام'" :color="'textWhite'" :bgColor="'primaryBlue'" :font="'yekanBakh'"/>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div
    class="center-directive w-full min-h-screen md:w-6/12 items-center dark:bg-darkBg"
  >
    <div class="center-directive flex-col py-10">
      <div class="text-right w-full font-yekanBakhBold mb-6">
        <h1 class="text-[32px] text-textLightBlack dark:text-textWhite">
          رمز ورود رو فراموش کردی؟
        </h1>
        <p class="text-sm text-textMuted dark:text-grayBorder">
          اشکالی نداره فقط کافیه نام کاربری یا ایمیل یا شماره موبایلت رو وارد
          کنی
        </p>
      </div>
      <div class="mb-5">
        <label
          for="username"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite dark:text-textWhite"
          >نام کاربری یا ایمیل یا شماره موبایل</label
        >

        <input
          v-model="formData.username"
          @change="v$.username.$touch"
          type="text"
          id="username"
          placeholder="وارد کردن"
          class="my-input rounded-lg border outline-none border-grayBorder text-textLightBlack placeholder:text-grayBorder block w-full p-2.5 focus:border-inputFocus"
          :class="{
            'border-inputDanger focus:border-inputDanger': v$.username.$error,
            'border-inputSuccess ': !v$.username.$invalid,
          }"
        />
        <div
          class="text-red-500"
          v-for="error of v$.username.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <CommonSubmitButton
        class="mt-5"
        text="تایید کردن"
        textColor="text-textWhite"
        bgColor="bg-primaryBlue"
        font="font-yekanBakh"
      />

      <div class="font-yekanBakhBold text-xs mt-8 flex">
        <p class="text-textMuted pl-1">بازگشت به</p>
        <NuxtLink
          to="/auth/register"
          class="text-textLightBlack dark:text-textWhite underline"
          >صفحه ورود</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
  
  <script>
import { computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
});
export default {
  setup() {
    const formData = reactive({
      username: "",
    });

    const rules = computed(() => {
      return {
        username: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
          ),
        },
      };
    });

    const v$ = useVuelidate(rules, formData);

    return { formData, v$ };
  },
};
</script>
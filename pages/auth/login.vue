<template>
    <div
      class="center-directive w-full min-h-screen md:w-6/12 items-center dark:bg-darkBg"
    >
      <div class="center-directive flex-col py-10">
        <div class="text-right w-full font-yekanBakhBold mb-6">
          <h1 class="text-[32px] text-textLightBlack dark:text-textWhite">
            ورود به <span class="text-primaryBlue">کندو</span>
          </h1>
          <p class="text-sm text-textMuted dark:text-grayBorder">
            به خونه خوش اومدی! اگر عضو کندو هستی کافیه فقط ورود کنی
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
        
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite"
            >رمزعبور</label
          >
          <div class="my-input flex items-center">
            <input
              v-model="formData.password"
              @change="v$.password.$touch"
              :type="!passwordIsShown ? 'password' : ''"
              id="password"
              class="my-input rounded-lg outline-none border-grayBorder border focus:border-inputFocus text-textLightBlack block w-full p-2.5"
              :class="{
                'border-inputDanger focus:border-inputDanger': v$.password.$error,
                'border-inputSuccess ': !v$.password.$invalid,
              }"
            />
            <img
              class="absolute mr-[360px] center-direcive"
              @click="passwordIsShown = !passwordIsShown"
              src="@/assets/images/icons/eye-slash.svg"
              alt="eye-slash"
            />
          </div>
          <span class="absolute w-[400px]">
            <NuxtLink
              class="float-left font-yekanBakhBold text-sm text-textLightBlack dark:text-textWhite underline"
              to="/forget-password"
              >رمز خود را فراموش کرده اید؟</NuxtLink
            >
          </span>
          <div
            class="text-red-500 pt-5"
            v-for="error of v$.password.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <CommonSubmitButton
          class="mt-5"
          text="ثبت نام"
          textColor="text-textWhite"
          bgColor="bg-primaryBlue"
          font="font-yekanBakh"
        />
  
        <CommonOrDivider class="pt-5" />
  
        <CommonGoogleButton class="mt-5" text="ورود با گوگل"/>
  
        <div class="font-yekanBakhBold text-xs mt-8 flex">
        <p class="text-textMuted pl-1">ثبت نام نکرده اید؟</p>
          <NuxtLink
            to="/auth/register"
            class="text-textLightBlack dark:text-textWhite underline"
            >صفحه ثبت نام</NuxtLink
          >
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import {
    required,
    minLength,
    helpers,
  } from "@vuelidate/validators";
  
  definePageMeta({
    layout: "auth",
  });
  export default{
    setup() {
      const formData = reactive({
        username: "",
        password: "",
      });
  
      const rules = computed(() => {
        return {
            username: {
            required: helpers.withMessage(
              "لورم ایپسوم متن ساختگی با تولید سادگی",
              required
            ),
          },
          password: {
            required: helpers.withMessage(
              "لورم ایپسوم متن ساختگی با تولید سادگی",
              required
            ),
            minLength: helpers.withMessage(
              "لورم ایپسوم متن ساختگی با تولید سادگی",
              minLength(6)
            ),
          },
        };
      });
  
      const v$ = useVuelidate(rules, formData);
      const passwordIsShown = ref(false);
  
      return { formData, v$, passwordIsShown };
    },
  };
  </script>
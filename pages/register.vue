<template>
  <div class="center-directive w-full md:w-6/12 items-center">
    <div class="center-directive flex-col py-10">
      <div class="text-right w-full font-yekanBakhBold mb-6">
        <h1 class="text-[32px] text-textLightBlack">
          ثبت نام در <span class="text-primaryBlue">کندو</span>
        </h1>
        <p class="text-sm text-textMuted">
          به کندو خوش اومدی! اگر عضو کندو نشدی اول ثبت نام کن
        </p>
      </div>
      <div class="mb-5">
        <label for="base-input" class="block mb-2 font-yekanBakhBold"
          >نام</label
        >
        <input
          type="text"
          id="base-input"
          class="my-input rounded-lg border border-grayBorder text-grayBorder block w-full p-2.5 focus:outline-inputFocus"
          placeholder="وارد کردن نام"
        />
      </div>
      <div class="mb-5">
        <label for="base-input" class="block mb-2 font-yekanBakhBold"
          >نام خانوادگی</label
        >
        <input
          type="text"
          id="base-input"
          class="my-input rounded-lg border border-grayBorder text-grayBorder block w-full p-2.5 focus:outline-inputFocus"
          placeholder="وارد کردن نام خانوادگی "
        />
      </div>
      <div class="mb-5">
        <label for="base-input" class="block mb-2 font-yekanBakhBold"
          >ایمیل</label
        >
        <input
          type="text"
          id="base-input"
          class="my-input rounded-lg border border-grayBorder text-grayBorder block w-full p-2.5 focus:outline-inputFocus"
          placeholder="وارد کردن ایمیل"
        />
      </div>
      <div class="mb-5">
        <label for="base-input" class="block mb-2 font-yekanBakhBold"
          >رمزعبور</label
        >
        <div class="my-input flex items-center">
          <input
            :type="!passwordIsShown ? 'password' : ''"
            id="base-input"
            class="my-input rounded-lg border-grayBorder border focus:outline-inputFocus text-grayBorder block w-full p-2.5"
          />
            <img class="absolute mr-[360px] center-direcive" @click="passwordIsShown = !passwordIsShown"
              src="@/assets/images/icons/eye-slash.svg"
              alt="eye-slash"
            />
            <!-- <img v-else src="@/assets/images/icons/eye.svg" alt="eye" /> -->
        </div>
        <span class="absolute w-[400px]">
          <NuxtLink
            class="float-left font-yekanBakhBold text-sm text-textLightBlack underline"
            to="/forget-password"
            >رمز خود را فراموش کرده اید؟</NuxtLink
          >
        </span>
      </div>
      <div class="mb-5">
        <label for="base-input" class="block mb-2 font-yekanBakhBold"
          >تکرار رمزعبور</label
        >

        <div class="my-input flex items-center">
          <input
            :type="!repeatPasswordIsShown ? 'password' : ''"
            id="base-input"
            class="my-input rounded-lg border-grayBorder border focus:outline-inputFocus text-grayBorder block w-full p-2.5"
          />
            <img class="absolute mr-[360px] center-direcive" @click="repeatPasswordIsShown = !repeatPasswordIsShown"
              src="@/assets/images/icons/eye-slash.svg"
              alt="eye-slash"
            />
            <!-- <img v-else src="@/assets/images/icons/eye.svg" alt="eye" /> -->
        </div>
      </div>
      <!-- success , danger input start-->
      <!-- <div class="mb-6">
        <label
          for="success"
          class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >Your name</label
        >
        <input
          type="text"
          id="success"
          class="my-input bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Success input"
        />
        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
          <span class="font-medium">Well done!</span> Some success message.
        </p>
      </div> -->
      <!-- <div>
        <label
          for="error"
          class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >Your name</label
        >
        <input
          type="text"
          id="error"
          class="my-input bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          placeholder="Error input"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          <span class="font-medium">Oh, snapp!</span> Some error message.
        </p>
      </div> -->
      <!-- success , danger input end-->
      <CommonSubmitButton
        class="mt-5"
        text="ثبت نام"
        textColor="text-textWhite"
        bgColor="bg-primaryBlue"
        font="font-yekanBakh"
      />

      <CommonOrDivider class="pt-5" />

      <CommonGoogleButton class="mt-5" />

      <div class="font-yekanBakhBold text-xs mt-8 flex">
        <p class="text-textMuted">قبلا عضو شده اید؟</p>
        <NuxtLink to="/login" class="text-textLightBlack underline"
          >صفحه ورود</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
definePageMeta({
  layout: "auth",
});
export default {
  setup() {
    const passwordIsShown = ref(false);
    const repeatPasswordIsShown = ref(false);

    return { passwordIsShown,repeatPasswordIsShown };
  },
};
</script>
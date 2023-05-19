<template>
  <div
    class="center-directive w-full min-h-screen lg:w-6/12 items-center dark:bg-darkBg"
  >
    <div class="center-directive flex-col py-10">
      <div class="text-right w-full font-yekanBakhBold mb-6">
        <h1 class="text-[32px] text-textLightBlack dark:text-textWhite">
          بازگردانی رمز عبور
        </h1>
        <p class="text-sm text-textMuted dark:text-grayBorder">
          رمز جدیدت رو وارد کن!
        </p>
      </div>

      <div class="mb-6 flex items-center gap-x-2 w-full ltr">
        <img
          class="w-8 h-8 rounded-full"
          src="@/assets/images/avatar.svg"
          alt="avatar"
        />
        <p class="text-base font-bold text-textLightBlack dark:text-textWhite">
          pardisnazari@gmail.com
        </p>
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
            id="password" placeholder="وارد کردن "
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
        <div
          class="text-red-500 pt-5"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-5">
        <label
          for="confirmPassword"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite"
          >تکرار رمزعبور</label
        >

        <div class="my-input flex items-center">
          <input
            v-model="formData.confirmPassword"
            @change="v$.confirmPassword.$touch"
            :type="!confirmPasswordIsShown ? 'password' : ''"
            id="confirmPassword" placeholder="وارد کردن "
            class="my-input rounded-lg outline-none border-grayBorder border text-textLightBlack focus:border-inputFocus block w-full p-2.5"
            :class="{
              'border-inputDanger focus:border-inputDanger':
                v$.confirmPassword.$error,
              'border-inputSuccess ': !v$.confirmPassword.$invalid,
            }"
          />
          <img
            class="absolute mr-[360px] center-direcive"
            @click="confirmPasswordIsShown = !confirmPasswordIsShown"
            src="@/assets/images/icons/eye-slash.svg"
            alt="eye-slash"
          />
        </div>
        <div
          class="input-errors text-red-500"
          v-for="error of v$.confirmPassword.$errors"
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
          to="/auth/login"
          class="text-textLightBlack dark:text-textWhite underline"
          >صفحه ورود</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, sameAs, helpers } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
});
export default {
  setup() {
    const formData = reactive({
      password: "",
      confirmPassword: null,
    });

    const rules = computed(() => {
      return {
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
        confirmPassword: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
          ),
          sameAs: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            sameAs(formData.password)
          ),
        },
      };
    });

    const v$ = useVuelidate(rules, formData);
    const passwordIsShown = ref(false);
    const confirmPasswordIsShown = ref(false);

    return { formData, v$, passwordIsShown, confirmPasswordIsShown };
  },
};
</script>
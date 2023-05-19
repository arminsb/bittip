<template>
  <div
    class="center-directive w-full min-h-screen lg:w-6/12 items-center dark:bg-darkBg"
  >
    <div class="center-directive flex-col py-10">
      <div class="text-right w-full font-yekanBakhBold mb-6">
        <h1 class="text-[32px] text-textLightBlack dark:text-textWhite">
          ثبت نام در <span class="text-primaryBlue">کندو</span>
        </h1>
        <p class="text-sm text-textMuted dark:text-grayBorder">
          به کندو خوش اومدی! اگر عضو کندو نشدی اول ثبت نام کن
        </p>
      </div>

      <div class="mb-5">
        <label
          for="name"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite dark:text-textWhite"
          >نام</label
        >

        <input
          v-model="formData.name"
          @change="v$.name.$touch"
          type="text"
          id="name"
          placeholder="وارد کردن نام"
          class="my-input rounded-lg border outline-none border-grayBorder text-textLightBlack placeholder:text-grayBorder block w-full p-2.5 focus:border-inputFocus"
          :class="{
            'border-inputDanger focus:border-inputDanger': v$.name.$error,
            'border-inputSuccess ': !v$.name.$invalid,
          }"
        />
        <div
          class="text-red-500"
          v-for="error of v$.name.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="mb-5">
        <label
          for="family"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite"
          >نام خانوادگی</label
        >
        <input
          v-model="formData.family"
          @change="v$.family.$touch"
          type="text"
          id="family"
          placeholder="وارد کردن نام خانوادگی "
          class="my-input rounded-lg outline-none border border-grayBorder text-textLightBlack placeholder:text-grayBorder block w-full p-2.5 focus:border-inputFocus"
          :class="{
            'border-inputDanger focus:border-inputDanger': v$.family.$error,
            'border-inputSuccess ': !v$.family.$invalid,
          }"
        />
        <div
          class="text-red-500"
          v-for="error of v$.family.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite"
          >ایمیل</label
        >
        <input
          v-model="formData.email"
          @change="v$.email.$touch"
          type="email"
          id="email"
          placeholder="وارد کردن ایمیل"
          class="my-input rounded-lg outline-none border border-grayBorder text-textLightBlack placeholder:text-grayBorder block w-full p-2.5 focus:boder-inputFocus"
          :class="{
            'border-inputDanger focus:border-inputDanger': v$.email.$error,
            'border-inputSuccess ': !v$.email.$invalid,
          }"
        />
        <div
          class="text-red-500"
          v-for="error of v$.email.$errors"
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
            to="/auth/forgetPassword"
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
            id="confirmPassword"
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

      <div class="mb-5">
        <label
          for="gender"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite dark:text-textWhite"
          >جنسیت</label
        >
        <select
          v-model="formData.gender"
          @change="v$.gender.$touch"
          id="gender"
          class="my-input rounded-lg border outline-none border-grayBorder text-textLightBlack placeholder:text-grayBorder block w-full p-2.5 focus:border-inputFocus"
          :class="{
            'border-inputDanger focus:border-inputDanger': v$.gender.$error,
            'border-inputSuccess ': !v$.gender.$invalid,
          }"
        >
          <option selected disabled value="">وارد کردن جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
        <div
          class="text-red-500"
          v-for="error of v$.gender.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

       <div class="mb-5">
        <label
          for="category"
          class="block mb-2 font-yekanBakhBold text-textLightBlack dark:text-textWhite dark:text-textWhite"
          >دسته بندی حرفه</label
        >
        <select
          v-model="formData.category"
          @change="v$.category.$touch"
          id="category"
          class="my-input rounded-lg border outline-none border-grayBorder text-textLightBlack placeholder:text-grayBorder block w-full p-2.5 focus:border-inputFocus"
          :class="{
            'border-inputDanger focus:border-inputDanger': v$.category.$error,
            'border-inputSuccess ': !v$.category.$invalid,
          }"
        >
          <option selected disabled value="">دسته بندی حرفه</option>
          <option value="male">فرانت اند</option>
          <option value="female">بک اند</option>
          <option value="female">ui/ux</option>
        </select>
        <div
          class="text-red-500"
          v-for="error of v$.category.$errors"
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

      <CommonGoogleButton class="mt-5" text="ثبت نام با گوگل" />

      <div class="font-yekanBakhBold text-xs mt-8 flex">
        <p class="text-textMuted pl-1">قبلا عضو شده اید؟</p>
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
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
});
export default {
  setup() {
    const formData = reactive({
      name: "",
      family: "",
      email: "",
      password: "",
      confirmPassword: null,
      gender: "",
      category: "",
    });

    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
          ),
        },
        family: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
          ),
        },
        email: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
          ),
          email: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            email
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
        gender: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
          ),
        },
        category: {
          required: helpers.withMessage(
            "لورم ایپسوم متن ساختگی با تولید سادگی",
            required
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
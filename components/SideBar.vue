<template>
  <aside class="w-[286px] min-h-screen bg-darkbgLight fixed pt-[25px] pb-6 px-[18px] flex flex-col">
    <div>
      <div>
        <img class="mx-auto" src="@/assets/images/icons/logo.svg" alt="logo" />
      </div>

      <div class="w-[250px] h-[38px] bg-darkBg flex items-center py-2 px-4 rounded-lg mt-[33px]">
        <img
          class="w-5 h-5 cursor-pointer"
          src="@/assets/images/icons/search-normal.svg"
          alt="search-normal"
        />
        <input
          class="mr-2 w-full h-full bg-transparent text-grayBorder outline-none focus:outline-none border-none"
          type="text"
          placeholder="جستجو..."
        />
      </div>

      <div class="pt-4">
        <p class="text-textMuted pr-3 font-yekanBakhBold">منو</p>
        <ul class="flex flex-col gap-y-8 pt-4">
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/home-2.svg" alt="dashboard">
          <p class="my-auto leading-none">داشبورد</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/profile-circle.svg" alt="profile"><p class="my-auto leading-none">پروفایل</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/message-text.svg" alt="message"><p class="my-auto leading-none">پیام ها</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/frame.svg" alt="frame"><p class="my-auto leading-none">کاربران</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/messages-3.svg" alt="messages"><p class="my-auto leading-none">گفتگو</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/notification.svg" alt="notification"><p class="my-auto leading-none">هشدار ها</p></li>
          <li class="border-t border-textMuted"></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/setting-3.svg" alt="setting"><p class="my-auto leading-none">تنظیمات</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/info-circle.svg" alt="info"><p class="my-auto leading-none">کمک</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/flag.svg" alt="flag"><p class="my-auto leading-none">گزارش</p></li>
          <li
            class=" cursor-pointer px-3 py-2 hover:bg-darkHover transition-directive rounded-lg text-inputDanger font-yekanBakhBold flex items-center justify-start gap-x-4"
          ><img class="w-6 h-6" src="@/assets/images/icons/logout.svg" alt="logout"><p class="my-auto leading-none">خروج از حساب کاربری</p></li>
        </ul>
      </div>
    </div>

    <!-- dark/light theme toggle -->
    <div class="bg-darkBg rounded-lg p-1 flex justify-between mt-auto">
      <div class="w-[116px] h-10 text-muted rounded-lg bg-darkHover center-directive gap-2 cursor-pointer">
        <img src="@/assets/images/icons/moon.svg" alt="moon">
        <input type="radio" class="appearance-none" name="theme" id="dark" />
        <label for="dark" class="transition-directive text-textWhite rounded-lg my-auto leading-none">تم دارک</label>
      </div>
      <div class="w-[116px] h-10 text-muted rounded-lg center-directive gap-2 cursor-pointer">
        <img src="@/assets/images/icons/sun.svg" alt="sun">
        <input type="radio" class="appearance-none" name="theme" id="light" />
        <label for="light" class="transition-directive text-textMuted text-muted rounded-lg my-auto leading-none">تم روشن</label>
      </div>
    </div>
  </aside>
</template>
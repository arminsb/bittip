<template>
  <aside class="w-[286px] h-[100vh] bg-darkbgLight fixed pt-[25px] pb-6 px-[18px]">
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

    <div>
      <p class="text-textMuted">منو</p>
      <ul class="flex flex-col gap-y-8">
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">داشبورد</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">پروفایل</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">پروفایل</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">کاربران</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">گفتگو</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">هشدار ها</li>
        <li>
          <hr />
        </li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">تنظیمات</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">کمک</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-textWhite font-yekanBakhBold">گزارش</li>
        <li class="py-2 px-3 hover:bg-darkHover transition-directive rounded-lg text-inputDanger font-yekanBakhBold">خروج از حساب کاربری</li>
      </ul>
    </div>

    <!-- dark/light theme toggle -->
    <div class="bg-darkBg rounded-lg p-1 flex justify-between">
      <button class="bg-darkHover text-textWhite w-[116px] h-10 rounded-lg">تم دارک</button>
      <button class="text-muted w-[116px] h-10 rounded-lg text-textMuted">تم روشن</button>
    </div>
  </aside>
</template>
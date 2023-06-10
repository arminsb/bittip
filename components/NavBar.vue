<template>
  <div class="w-screen h-[100px] bg-textWhite dark:bg-darkbgLight flex items-center justify-between px-8">
    <!-- region -->
    <div class="flex items-center gap-x-3 text-textDark dark:text-textWhite font-bold">
      <p>PER(IRN)</p>
      <img class="w-7 h-7 rounded-full" src="@/assets/images/icons/iran-flag.svg" alt="flag" />
    </div>

    <div class="w-[400px] h-10 bg-darkBg flex items-center py-2 px-4 rounded-lg">
      <img
        class="w-6 h-6 cursor-pointer"
        src="@/assets/images/icons/search-normal.svg"
        alt="search-normal"
      />
      <input
        class="mr-4 w-full h-full bg-transparent text-grayBorder outline-none focus:outline-none border-none"
        type="text"
        placeholder="جستجو در بیت تیپ..."
      />
    </div>

    <div class="flex gap-8">
      <div class="w-9 h-9 rounded-full bg-darkBg center-directive relative cursor-pointer">
        <div
          class="absolute text-sm w-4 h-4 text-center -top-1 -right-2 bg-inputDanger rounded-full text-white"
        >5</div>
        <img class="w-6 h-6" src="@/assets/images/icons/notification.svg" alt="notification" />
      </div>

      <div class="flex gap-4">
        <div class="center-directive flex-col gap-y-1">
          <h4 class="font-yekanBakhBold text-lg text-white">پردیس نظری</h4>
          <p class="font-yekanBakh text-xs text-grayBorder ltr">front_End dev...</p>
        </div>

        <div class="flex items-start gap-1">
          <img
            class="rounded-full border w-[50px] h-[50px]"
            src="@/assets/images/avatar.jpg"
            alt="avatar"
          />

          <img class="cursor-pointer" src="@/assets/images/icons/arrow-down.svg" alt="arrow-down" />
        </div>
      </div>
    </div>
  </div>
</template>
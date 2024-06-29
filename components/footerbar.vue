<template>
    <footer class="flex w-full mb-4 justify-center">
      <div class="flex space-x-4 text-2xl text-slate-200">
        <div aria-label="shadow" class="flex transition duration-300 bg-slate-800 glow-effect justify-center place-items-center h-10 w-10 rounded-full">
          <Icon name="mdi:github"></Icon>
        </div>
        <div aria-label="shadow" class="flex transition duration-300 bg-slate-800 glow-effect justify-center place-items-center h-10 w-10 rounded-full">
          <icon name="mdi:linkedin"></icon>
        </div>
    </div>
    </footer>
</template>

<style scoped>
    .glow-effect:hover {
    box-shadow:
      0px 0px 50px 0px #fbbf24;
    }
    .glow-effect:active {
    box-shadow:
        0px 0px 40px 1px #52fb24;
    }
</style>
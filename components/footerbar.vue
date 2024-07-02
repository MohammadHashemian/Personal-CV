<script setup>
const showPhoneNumber = ref(false)
const removePhoneNumber = ref(false)
const myNumber = ref("")

watch(showPhoneNumber, () => {
  let i = 0
  const number = '09134144427'
  setInterval(() => {
    myNumber.value = number.substring(0, i++)
  }, 75)
})

</script>
<template>
  <footer class="flex w-full mb-4 justify-center">
    <div class="flex space-x-4 text-slate-200">
      <div aria-label="shadow"
        class="flex transition duration-300 bg-slate-800 glow-effect justify-center place-items-center h-10 w-10 rounded-full">
        <a class="flex text-2xl" href="https://github.com/MohammadHashemian" target="_blank">
          <Icon name="mdi:github"></Icon>
        </a>
      </div>
      <div aria-label="shadow"
        class="flex transition duration-300 bg-slate-800 glow-effect justify-center place-items-center h-10 w-10 rounded-full">
        <a class="flex text-2xl" href="https://www.linkedin.com/in/muhammadhashemian/" target="_blank">
          <icon name="mdi:linkedin"></icon>
        </a>
      </div>
      <div
        class="flex justify-center place-items-center bg-slate-800 rounded-full h-10 min-w-10 hover:cursor-pointer glow-effect-sm"
        @mouseover="showPhoneNumber = true">
        <Icon v-if="!showPhoneNumber" class="text-xl" name="mdi:phone"></Icon>
        <Icon v-if="showPhoneNumber" class="ml-4 mr-2 text-xl" name="mdi:phone"></Icon>
        <a v-if="showPhoneNumber" href="tel:09134144427" class="text-sm text-slate-200 Nunito mr-4">
          {{ myNumber }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.glow-effect-sm:hover {
  box-shadow:
    0px 0px 50px -10px #fbbf24;
}

.glow-effect:hover {
  box-shadow:
    0px 0px 50px 0px #fbbf24;
}

.glow-effect:active {
  box-shadow:
    0px 0px 40px 1px #52fb24;
}
</style>
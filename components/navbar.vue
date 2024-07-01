<template>
  <nav class="flex nav-bg items-center p-4 w-full h-12 bg-opacity-5 shadow-md" aria-label="header">
    <a class="glow"></a>
    <a class="text-slate-200 text-sm font-bold Nunito">OPEN TO WORK</a>
  </nav>
</template>
<style scoped>
.nav-bg {
  background-color: #22272e;
}

.glow {
  float: left;
  width: 0.8em;
  height: 0.8em;
  margin-right: 1.2em;
  margin-left: 0.5em;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
    0px 0px 10px 2px rgba(0, 255, 135, 0.3);
  animation: pulse 1s alternate infinite;
}

@keyframes pulse {
  0% {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
      0px 0px 5px 2px rgba(0, 255, 135, 0.3);
  }

  100% {
    background: rgba(255, 255, 255, 1);
    box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
      0px 0px 15px 2px rgba(0, 255, 135, 1);
  }

}
</style>
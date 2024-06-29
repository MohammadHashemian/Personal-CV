<script setup>
import { useTypeAnimation } from './composables/animation';

useSeoMeta({
  title: "Mohammad Hashemian",
  description: "My personal webpage as my online CV."
})
const intro_code = ref(
`name: str = 'Mohammad Hashemian'
age: int = 24
married: bool = True
degrees: list[str] = ['Pharm.D', 'MBA Pharma']
military_service_status: str = 'Passed'
email: str = 'muhammadhashemian@gmail.com'
programming_languages: list[str] = ['Python', 'SQL', 'Javascript', 'HTML', 'CSS']
favorite_frameworks: list[str] = ['Pyspark', 'Fastapi', 'Nuxt']`)

const slide_number = ref(1)
const slides_count = 2
const fade_animation = ref("opacity-100")
const type_animation = ref("Mohammad Hashemian")
const highlighter = await getShikiHighlighter()
const html = highlighter.highlight(intro_code.value, {
  lang: 'python',
  unwrap: true,
})

function SliderLogic(action) {
  if (action == 1) {
    fade_animation.value = "opacity-0 -translate-y-10"
    setTimeout(()=> {
      fade_animation.value = "opacity-100"
      slide_number.value = 1
    }, 300)
    return
  }
  if (action == 2) {
    fade_animation.value = "opacity-0 -translate-y-10"
    setTimeout(()=> {
      fade_animation.value = "opacity-100"
      slide_number.value = 2
    }, 300)
    return
  }
  if (action == "next") {
    fade_animation.value = "opacity-0 translate-x-10"
  }
  if (action == "previous") {
    fade_animation.value = "opacity-0 -translate-x-10"
  }
  setTimeout(()=> {
    fade_animation.value = "opacity-100 transition-x-0"
    if (action == "next") {
    if ((slide_number.value + 1) <= slides_count) {
      slide_number.value += 1
    } else {
      slide_number.value = 1
    }
  } else if (action == "previous") {
    if ((slide_number.value - 1) !== 0) {
      slide_number.value -= 1
    } else {
      slide_number.value = slides_count
    }
  }
  }, 300)
}

onMounted(()=> {
  setTimeout(()=> {
    useTypeAnimation(type_animation, 
    "open to work.",
    {d1:75, d2:75, timeout:2000})
  }, 1000)
})
</script>
<template>
  <!-- BODY -->
  <section class="flex flex-col h-screen min-h-screen overflow-auto bg-gradient-to-tr from-slate-900 to-slate-800">
    <!-- NAVBAR AND HEADING -->
    <Navbar />

    <!-- MAIN CONTAINER -->
    <div class="grid grid-cols-12 h-full p-4 md:p-6 lg:p-12 mt-8">
      
      <!-- INTRO -->
       <section class="gird grid-rows-6 col-span-12 md:col-span-8 place-self-center">
        <div class="flex row-span-5 min-h-48 h-1/2 place-self-center place-items-center text-neutral-100">
          <!-- PREVIOUS BUTTON -->
            <a class="m-8 cursor-pointer" v-on:click="SliderLogic('previous')">
              <span class="font-mono hover:font-extrabold active:text-slate-600"><<</span>
            </a>
            <!-- SLIDER CONTENTS -->
            <ul class="flex flex-col justify-center">
              <!-- SLIDE 1: INTRO -->
              <li v-show="slide_number==1" id="slide-1" aria-label="short introduction" :class="`space-y-4 transition duration-300 ${fade_animation}`">
                <h2 class="text-2xl text-center">
                  I'm <strong class="text-amber-400"> {{ type_animation }} </strong>
                </h2>
                <h3 class="font-thin">
                  <strong>Pharm.D</strong> and <strong>MBA</strong> graduated from Tehran university of medical sciences.
                </h3>
                <h4 class="text-right text-sm font-extralight">
                  Ahwaz, Iran
                </h4>
              </li>
              <li v-show="slide_number==2" id="slide-2" aria-label="about me" :class="`transition duration-3 ${fade_animation}`">
                <!-- SLIDE 2: ABOUT ME-->
                <p class="max-h-48 md:max-h-max overflow-auto md:overflow-visible">
                  <a class="block text-xl font-bold text-amber-400">About me:</a>
                  <span class="block text-sm">
                      I am a highly motivated and detail-oriented pharmacist with an MBA in Pharmaceutical Management,
                      poised to leverage my comprehensive educational background and hands-on experience in the pharmaceutical field.
                      With a solid foundation in pharmacology, coupled with advanced business acumen,
                      I am well-equipped to contribute effectively to any team.
                      My familiarity with programming and problem-solving skills enable me to tackle complex challenges
                      and implement innovative solutions.
                      I am seeking a challenging position where I can apply my expertise to drive improvements and
                      optimize outcomes in the pharmaceutical industry.   
                  </span>
                </p>
              </li>
            </ul>
            <a class="m-8 cursor-pointer hover:font-extrabold active:text-slate-600" v-on:click="SliderLogic('next')">
              <span class="font-mono">>></span>
            </a>
        </div>
        <div class="row-span-1 mt-8">
          <ul class="flex justify-center space-x-5 cursor-pointer">
            <li class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0" v-on:click="SliderLogic('1')">
              <span>[</span>
              <span>1</span>
              <span>]</span>
            </li>
            <li class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0" v-on:click="SliderLogic('2')">
              <span>[</span>
              <span>2</span>
              <span>]</span>
            </li>
          </ul>
        </div>
       </section>
      
        <!-- CODE BOX -->
        <section class="flex col-span-12 md:col-span-4 flex-col self-center p-6">
          <!-- HEADER -->
          <div class="code-box-header w-full border-slate-700 bg-slate-900 rounded-t-md p-2">
            <h3 class="ml-2 text-neutral-300 text-sm"> about me: </h3>
          </div>
          <!-- BODY -->
          <div class="code-box-body w-full overflow-y-auto border-slate-700 rounded-b-md p-2">
            <pre class="text-sm" v-html="html"></pre>
          </div>
        </section>
    </div>
    
    <!-- TODO: ADD THE REDIRECTION LINKS -->
    <footerbar />
  </section>
</template>

<style scoped>
  /* Solving code box over-flow with breaks */
  pre {
      white-space: pre-wrap;       /* Since CSS 2.1 */
      white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
      white-space: -pre-wrap;      /* Opera 4-6 */
      white-space: -o-pre-wrap;    /* Opera 7 */
      word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }

  /* Lighter border width for code box */
  .code-box-header {
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
  }

  .code-box-body {
    background-color: #22272e;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }
</style>
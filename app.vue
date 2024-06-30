<script setup>
import { useTypeAnimation } from './composables/animation';

useSeoMeta({
  title: "Mohammad Hashemian",
  description: "My personal webpage as my online CV."
})

const code = `name: str = 'Mohammad Hashemian'
age: int = 24
married: bool = True
degrees: list[str] = ['Pharm.D', 'MBA Pharma']
military_service_status: str = 'Passed'
email: str = 'muhammadhashemian@gmail.com'
programming_languages: list[str] = ['Python', 'SQL', 'Javascript', 'HTML', 'CSS']
favorite_frameworks: list[str] = ['Pyspark', 'Fastapi', 'Nuxt']`
const slide_number = ref(1)
const slides_count = 4
const fade_animation = ref("opacity-100")
const type_animation = ref("Mohammad Hashemian")
const highlighter = await getShikiHighlighter()
const html = {
  id: 0,
  html: highlighter.highlight(code, { lang: 'python', unwrap: true })
}
const code_box = ref(html)

function SliderLogic(action) {
  if (code_box.value.id !==0) {
    code_box.value = html
  }
  switch(action) {
    case "next":
      fade_animation.value = "opacity-0 translate-x-10";
      setTimeout(()=> {
        fade_animation.value = "opacity-100 transition-x-0"
        if ((slide_number.value + 1) <= slides_count) { 
          slide_number.value += 1
        } else {
          slide_number.value = 1
        }
      }, 300)
      break;
    case "previous":
      fade_animation.value = "opacity-0 -translate-x-10"
      setTimeout(()=> {
        fade_animation.value = "opacity-100 transition-x-0"
        if ((slide_number.value - 1) !== 0) {
          slide_number.value -= 1 
        } else {
          slide_number.value = slides_count 
        }
      }, 300)
      break;
    default:
      fade_animation.value = "opacity-0 -translate-y-10"
      setTimeout(()=> {
        fade_animation.value = "opacity-100";
        slide_number.value = action;
    }, 300)

  }
}

function ExperiencesLogic(id) {
  switch(id) {
    case 1:
      code_box.value = { 
        id:1, 
        html: highlighter.highlight(`# Led a comprehensive market analysis to inform and rewrite the business plan.
# Conducted thorough research on market trends, competitors and consumers behavior.
# Synthesized finding into actionable insights, contributing to strategic decision-making.
# Played a key role in refining and enhancing the business plan based on market dynamics.`,
{lang:'python',
unwrap:true
})
      }
      break;
    case 2:
      code_box.value = {
        id:2,
        html: highlighter.highlight("# Developed and implemented innovative programming initiatives, fostering entrepreneurship and knowledge advancement among pharmacist students.", 
        {
          lang:'python',
          unwrap:true,
        })
      }
      break;
    case 3:
      code_box.value = {
        id:3,
        html: highlighter.highlight("# Executed visual design projects for local events, including creating engaging advertisements.",
        { 
          lang:'python',
          unwrap:true
        })
      }
  }
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
       <section class="gird grid-rows-8 col-span-12 md:col-span-8 place-self-center">
        <!-- ### TODO: Validate if min-h and h-1/2 is necessary -->
        <div class="flex row-span-7 min-h-48 h-1/2 place-self-center place-items-center text-neutral-100">
          <!-- PREVIOUS BUTTON -->
            <a class="m-4 cursor-pointer" v-on:click="SliderLogic('previous')">
              <span class="Nunito hover:font-extrabold active:text-slate-600"><<</span>
            </a>
            <!-- SLIDER CONTENTS -->
            <ul class="flex flex-col justify-center">
              <!-- SLIDE 1: INTRO -->
              <li v-show="slide_number==1" id="slide-1" aria-label="short introduction" :class="`space-y-4 transition duration-300 ${fade_animation}`">
                <h2 class="text-2xl text-center Nunito">
                  I'm <strong class="text-amber-400"> {{ type_animation }} </strong>
                </h2>
                <h3 class="font-thin Nunito">
                  <strong class="font-bold">Pharm.D</strong> and <strong class="font-bold">MBA</strong> graduated from Tehran university of medical sciences.
                </h3>
                <h4 class="text-right text-sm font-extralight Nunito">
                  Ahwaz, Iran
                </h4>
              </li>
              <li v-show="slide_number==2" id="slide-2" aria-label="about me" :class="`transition duration-3 ${fade_animation}`">
                <!-- SLIDE 2: ABOUT ME-->
                <h3 class="max-h-48 md:max-h-max overflow-auto md:overflow-visible">
                  <label class="block text-xl font-bold text-amber-400 Nunito">About me:</label>
                  <p class="text-sm Nunito">
                  I am a highly motivated and detail-oriented pharmacist with an MBA in Pharmaceutical Management,
                  poised to leverage my comprehensive educational background and hands-on experience in the pharmaceutical field.
                  With a solid foundation in pharmacology, coupled with advanced business acumen,
                  I am well-equipped to contribute effectively to any team.
                  My familiarity with programming and problem-solving skills enable me to tackle complex challenges
                  and implement innovative solutions.
                  I am seeking a challenging position where I can apply my expertise to drive improvements and
                  optimize outcomes in the pharmaceutical industry.   
                  </p>
              </h3>
              </li>
              <!-- SLIDE 3: EDUCATIONS -->
               <li v-show="slide_number==3" aria-label="Educations" :class="`Nunito md:min-w-96 transition duration-3 ${fade_animation}`">
                <label class="block text-amber-400 font-bold md:text-xl">Educations</label>
                <div class="mt-2">
                  <h4 class="text-xs text-right text-slate-400 float-end">October 2018 - 2024</h4>
                  <h2 class="text-sm font-semibold">Doctor of pharmacy</h2>
                  <h3 class="text-sm text-slate-300">Tehran university of medical sciences, Tehran, Iran</h3>
                </div>
                <div class="mt-2">
                  <h4 class="text-xs text-right text-slate-400 float-end">October 2021 - 2023</h4>
                  <h2 class="text-sm font-semibold">Master of business administration</h2>
                  <h3 class="text-sm text-slate-300">Tehran university of medical sciences, Tehran, Iran</h3>
                </div>
               </li>

               <!-- SLIDE 4: EXPERIENCES -->
                <li v-show="slide_number==4" class="space-y-2">
                  <label class="block Nunito text-center text-amber-400 font-bold">Experiences</label>
                  <!-- RAYAN PHARMED -->
                  <div> 
                    <div class="flex justify-between items-center">
                      <h2 v-if='!(code_box.id == 1)' class="animate-pulse cursor-pointer hover:text-amber-200 active:text-amber-300 hover:animate-none" v-on:click="ExperiencesLogic(1)">Product manager</h2>
                      <h2 v-if='(code_box.id == 1)' class="text-amber-200 cursor-pointer"><span class="font-mono">-></span> Product manager </h2>
                      <h4 class="text-xs text-right text-slate-400">2022</h4>
                    </div>
                    <h3 class="text-sm text-slate-300"> @ Rayan Pharmed, Tehran, Iran </h3>
                  </div>
                  <!-- IPHSA -->
                  <div>
                    <div class="flex justify-between items-center">
                    <h2 v-if='!(code_box.id == 2)' class="animate-pulse cursor-pointer hover:text-amber-200 hover:animate-none" v-on:click="ExperiencesLogic(2)">Local financial secretary</h2>
                    <h2 v-if='(code_box.id == 2)' class="cursor-pointer text-amber-200"><span class="font-mono">-></span> Local financial secretary</h2>
                    <h4 class="text-xs text-right text-slate-400">2021 - 2022</h4>
                  </div>
                    <h2 v-if="!(code_box.id == 3)" class="animate-pulse cursor-pointer hover:text-amber-200 hover:animate-none" v-on:click="ExperiencesLogic(3)">Local media design secretary</h2>
                    <h2 v-if="(code_box.id == 3)" class="cursor-pointer text-amber-200"><span class="font-mono">-></span> Local media design secretary</h2>
                    <h3 class="text-sm text-slate-400">@ Iran Pharmaceutical Students Association, Ahwaz, Iran</h3>
                  </div>
                </li>
            </ul>
            <a class="m-4 cursor-pointer hover:font-extrabold active:text-slate-600" v-on:click="SliderLogic('next')">
              <span class="Nunito">>></span>
            </a>
        </div>
        <div class="row-span-1 mt-4">
          <ul class="flex Nunito justify-center space-x-5 cursor-pointer">
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
            <li class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0" v-on:click="SliderLogic('3')">
              <span>[</span>
              <span>3</span>
              <span>]</span>
            </li>
            <li class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0" v-on:click="SliderLogic('4')">
              <span>[</span>
              <span>4</span>
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
            <pre class="text-sm" v-html="code_box.html"></pre>
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

  .Nunito {
    font-family: Nunito;
  }
</style>
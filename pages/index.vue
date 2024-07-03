<script setup>
useSeoMeta({
  title: "Mohammad Hashemian",
  description: "My personal webpage as my online CV.",
});

const code = `name: str = 'Mohammad Hashemian'
age: int = 24
married: bool = True
degrees: list[str] = ['Pharm.D', 'MBA Pharma']
military_service_status: str = 'Passed'
contact: list[str] = ['muhammadhashemian@gmail.com', '09134144427']
programming_languages: list[str] = ['Python', 'SQL', 'CSS', 'Javascript', 'HTML']
favorite_frameworks: list[str] = ['Pyspark', 'Fastapi','Nuxt']`;

const slidesCount = 5;
const slideNumber = ref(1);
const fadeAnimation = ref("opacity-100");
const typeAnimation = ref("Mohammad Hashemian");
const playClickAnimation = ref(true);
const codeBoxHeader = ref("About me:");
const codeBoxBody = ref(code);
const codeBoxId = ref();

function SliderLogic(action) {
  // Resetting codebox value
  codeBoxHeader.value = "About me:";
  codeBoxBody.value = code;

  switch (action) {
    case "next":
      fadeAnimation.value = "opacity-0 translate-x-10";
      setTimeout(() => {
        fadeAnimation.value = "opacity-100 transition-x-0";
        if (slideNumber.value + 1 <= slidesCount) {
          slideNumber.value += 1;
        } else {
          slideNumber.value = 1;
        }
      }, 300);
      break;
    case "previous":
      fadeAnimation.value = "opacity-0 -translate-x-10";
      setTimeout(() => {
        fadeAnimation.value = "opacity-100 transition-x-0";
        if (slideNumber.value - 1 !== 0) {
          slideNumber.value -= 1;
        } else {
          slideNumber.value = slidesCount;
        }
      }, 300);
      break;
    default:
      fadeAnimation.value = "opacity-0 -translate-y-10";
      setTimeout(() => {
        fadeAnimation.value = "opacity-100";
        slideNumber.value = action;
      }, 300);
  }
}

function ExperiencesLogic(id, header) {
  playClickAnimation.value = false;
  codeBoxHeader.value = header;
  codeBoxId.value = id;
  switch (id) {
    case 1:
      codeBoxBody.value = `# Led a comprehensive market analysis to inform and rewrite the business plan.
# Conducted thorough research on market trends, competitors and consumers behavior.
# Synthesized finding into actionable insights, contributing to strategic decision-making.
# Played a key role in refining and enhancing the business plan based on market dynamics.`;
      break;
    case 2:
      codeBoxBody.value =
        "# Developed and implemented innovative programming initiatives, fostering entrepreneurship and knowledge advancement among pharmacist students.";
      break;
    case 3:
      codeBoxBody.value =
        "# Executed visual design projects for local events, including creating engaging advertisements.";
      break;
    case 4:
      codeBoxBody.value = `startups: dict[str, str] = {
  "Medit": "Founded and led Medit, a startup to enhance user well-being, providing a platform for relaxation and stress management.",
  "Remona": "Co-founded and managed Remona - Launched a WordPress website to offer personalized skincare."
  }`;
      break;
  }
}

onMounted(() => {
  setTimeout(() => {
    useTypeAnimation(typeAnimation, "open to work.", {
      d1: 75,
      d2: 75,
      timeout: 2000,
    });
  }, 1000);
});
</script>
<template>
  <!-- MAIN CONTAINER -->
  <div class="grid grid-cols-12 h-auto p-4 md:p-6 lg:p-12 mt-8">
    <!-- INTRO -->
    <section
      class="gird grid-rows-8 col-span-12 md:col-span-8 place-self-center"
    >
      <!-- ### TODO: Validate if min-h and h-1/2 is necessary -->
      <div
        class="flex row-span-7 min-h-48 h-1/2 place-self-center place-items-center text-neutral-100"
      >
        <!-- PREVIOUS BUTTON -->
        <a class="m-4 cursor-pointer" @click="SliderLogic('previous')">
          <span class="Nunito hover:font-extrabold active:text-slate-600">
            <<
          </span>
        </a>
        <!-- SLIDER CONTENTS -->
        <ul class="flex flex-col w-full justify-around">
          <!-- SLIDE 1: INTRO -->
          <li
            v-show="slideNumber == 1"
            id="slide-1"
            aria-label="short introduction"
            :class="`space-y-4 transition duration-300 ${fadeAnimation}`"
          >
            <h2 class="text-2xl text-center Nunito">
              I'm <strong class="text-amber-400"> {{ typeAnimation }} </strong>
            </h2>
            <h3 class="text-slate-200 Nunito">
              <strong class="font-bold text-white">Pharm.D</strong> and
              <strong class="font-bold text-white">MBA</strong> graduated from
              Tehran university of medical sciences.
            </h3>
            <h4 class="text-right text-xs Nunito text-slate-400">
              Ahwaz, Iran
            </h4>
          </li>
          <li
            v-show="slideNumber == 2"
            id="slide-2"
            aria-label="about me"
            :class="`transition duration-3 ${fadeAnimation}`"
          >
            <!-- SLIDE 2: ABOUT ME-->
            <h3 class="max-h-48 md:max-h-max overflow-auto md:overflow-visible">
              <label class="block text-xl font-bold text-amber-400 Nunito"
                >About me:</label
              >
              <p class="text-sm Nunito text-slate-200">
                I am a highly motivated and detail-oriented pharmacist with an
                MBA in Pharmaceutical Management, poised to leverage my
                comprehensive educational background and hands-on experience in
                the pharmaceutical field. With a solid foundation in
                pharmacology, coupled with advanced business acumen, I am
                well-equipped to contribute effectively to any team. My
                familiarity with programming and problem-solving skills enable
                me to tackle complex challenges and implement innovative
                solutions. I am seeking a challenging position where I can apply
                my expertise to drive improvements and optimize outcomes in the
                pharmaceutical industry.
              </p>
            </h3>
          </li>
          <!-- SLIDE 3: EDUCATIONS -->
          <li
            v-show="slideNumber == 3"
            id="slide-3"
            aria-label="Educations"
            :class="`Nunito md:min-w-96 transition duration-3 ${fadeAnimation}`"
          >
            <label class="block text-amber-400 font-bold md:text-xl"
              >Educations</label
            >
            <div class="mt-2">
              <h4 class="text-xs text-right text-slate-400 float-end">
                October 2018 - 2024
              </h4>
              <h2 class="text-sm font-semibold">Doctor of pharmacy</h2>
              <h3 class="text-sm text-slate-300">
                Tehran university of medical sciences, Tehran, Iran
              </h3>
            </div>
            <div class="mt-2">
              <h4 class="text-xs text-right text-slate-400 float-end">
                October 2021 - 2023
              </h4>
              <h2 class="text-sm font-semibold">
                Master of business administration
              </h2>
              <h3 class="text-sm text-slate-300">
                Tehran university of medical sciences, Tehran, Iran
              </h3>
            </div>
          </li>

          <!-- SLIDE 4: EXPERIENCES -->
          <li
            v-show="slideNumber == 4"
            id="slide-4"
            :class="`Nunito space-y-2 transition duration-3 ${fadeAnimation}`"
          >
            <label class="block text-center text-amber-400 font-bold"
              >Experiences</label
            >
            <!-- EXP: RAYAN PHARMED -->
            <div>
              <div class="flex flex-wrap items-center">
                <h2
                  v-if="!(codeBoxId == 1)"
                  class="text-sm font-bold animate-pulse cursor-pointer hover:text-amber-200 active:text-amber-300 hover:animate-none"
                  v-on:click="ExperiencesLogic(1, 'Product manager:')"
                >
                  Product manager
                </h2>
                <h2
                  v-if="codeBoxId == 1"
                  class="text-sm font-bold text-amber-200 cursor-pointer"
                >
                  <span>|</span> Product manager
                </h2>
                <div
                  v-if="playClickAnimation"
                  aria-label="click-icon"
                  class="flex-grow click-animation"
                >
                  <icon class="text-slate-200" name="game-icons:click"></icon>
                </div>
                <h4 class="text-xs flex-grow text-right text-slate-400">
                  2022
                </h4>
              </div>
              <h3 class="text-xs text-slate-300">
                @ Rayan Pharmed, Tehran, Iran
              </h3>
            </div>
            <!-- EXP: IPHSA -->
            <div>
              <div
                class="flex justify-between items-center border-t-2 border-slate-600"
              >
                <h2
                  v-if="!(codeBoxId == 2)"
                  class="text-sm font-bold animate-pulse cursor-pointer mt-2 hover:text-amber-200 hover:animate-none"
                  @click="ExperiencesLogic(2, 'Financial secretary:')"
                >
                  Local financial secretary
                </h2>
                <h2
                  v-if="codeBoxId == 2"
                  class="text-sm font-bold cursor-pointer mt-2 text-amber-200"
                >
                  <span>|</span> Local financial secretary
                </h2>
                <h4 class="text-xs text-right text-slate-400">2021 2022</h4>
              </div>
              <h2
                v-if="!(codeBoxId == 3)"
                class="text-sm font-bold animate-pulse cursor-pointer hover:text-amber-200 hover:animate-none"
                @click="ExperiencesLogic(3, 'Media design secretary:')"
              >
                Local media design secretary
              </h2>
              <h2
                v-if="codeBoxId == 3"
                class="text-sm font-bold cursor-pointer text-amber-200"
              >
                <span>|</span> Local media design secretary
              </h2>
              <h3 class="text-xs text-slate-400">
                @ Iran Pharmaceutical Students Association, Ahwaz, Iran
              </h3>
            </div>
            <div class="w-full border-t-2 border-slate-600">
              <h2
                v-if="!(codeBoxId == 4)"
                class="mt-1 animate-pulse cursor-pointer text-sm font-bold"
                @click="ExperiencesLogic(4, 'Entrepreneurial endeavors:')"
              >
                Entrepreneurial endeavors
              </h2>
              <h2
                v-if="codeBoxId == 4"
                class="mt-1 animate-pulse cursor-pointer text-amber-200 text-sm font-bold"
              >
                <span>|</span>
                Entrepreneurial endeavors
              </h2>
              <div class="flex text-xs justify-between text-slate-400">
                <h3>Medit</h3>
                <h3>Remona</h3>
                <h4 class="text-xs place-content-center">2019 2021</h4>
              </div>
            </div>
          </li>

          <!-- Slide 5: Awards -->
          <li v-show="slideNumber == 5">
            <div class="Nunito">
              <label class="text-amber-400 font-bold">Awards</label>
              <h2 class="text-sm">
                TOP 10 Winner - 66th IPSF World Congress Hackathon 2021
              </h2>
              <h3 class="text-xs text-slate-400">
                Awarded for outstanding performance in developing a game for
                patient with anorexia.<br />
                Demonstrated excellence in both technical development and the
                creation of a viable business model.
              </h3>
            </div>
          </li>
        </ul>
        <a
          class="m-4 cursor-pointer hover:font-extrabold active:text-slate-600"
          @click="SliderLogic('next')"
        >
          <span class="Nunito">>></span>
        </a>
      </div>
      <div class="row-span-1 mt-4">
        <ul class="flex Nunito justify-center space-x-5 cursor-pointer">
          <li
            class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0"
            v-on:click="SliderLogic('1')"
          >
            <span>[</span>
            <span>1</span>
            <span>]</span>
          </li>
          <li
            class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0"
            @click="SliderLogic('2')"
          >
            <span>[</span>
            <span>2</span>
            <span>]</span>
          </li>
          <li
            class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0"
            @click="SliderLogic('3')"
          >
            <span>[</span>
            <span>3</span>
            <span>]</span>
          </li>
          <li
            class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0"
            @click="SliderLogic('4')"
          >
            <span>[</span>
            <span>4</span>
            <span>]</span>
          </li>
          <li
            class="text-slate-200 font-mono text-sm space-x-2 hover:font-bold active:space-x-0"
            @click="SliderLogic('5')"
          >
            <span>[</span>
            <span>5</span>
            <span>]</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- CODE BOX -->
    <section class="flex col-span-12 md:col-span-4 flex-col self-center p-6">
      <Codebox :header-text="codeBoxHeader" :body-text="codeBoxBody"></Codebox>
    </section>
  </div>
</template>

<style scoped>
.click-animation {
  display: flex;
  justify-content: start;
  margin-left: 1.5rem;
  font-size: 1.25rem;
  animation: click 2s forwards;
}

@keyframes click {
  50% {
    margin-left: 0.2rem;
    font-size: 1.25rem;
  }

  60% {
    margin-left: 0.2rem;
    font-size: 1.15rem;
  }

  70% {
    margin-left: 0.2rem;
    font-size: 1.25rem;
  }

  80% {
    margin-left: 0.2rem;
    font-size: 1.15rem;
  }

  90% {
    margin-left: 0.2rem;
    font-size: 1.25rem;
  }

  100% {
    margin-left: 0.2rem;
    display: none;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  headerText: {
    default: "",
    type: String,
    required: false,
  },
  bodyText: {
    default: "",
    type: String,
    required: false,
  },
});
const headerText = ref(props.headerText);
const highlighter = await getShikiHighlighter();
const html = computed(() =>
  highlighter.highlight(props.bodyText, { lang: "python", unwrap: true })
);
</script>
<template>
  <!-- HEADER -->
  <div
    class="code-box-header w-full border-slate-700 bg-slate-900 rounded-t-md p-2"
  >
    <h3 class="ml-2 text-neutral-300 text-sm">{{ headerText }}</h3>
  </div>
  <!-- BODY -->
  <div
    class="code-box-body w-full overflow-y-auto border-slate-700 rounded-b-md p-2 shadow-lg"
  >
    <pre class="text-sm" v-html="html"></pre>
  </div>
</template>
<style scoped>
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

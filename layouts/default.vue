<template>
    <section class="flex flex-col h-screen min-h-screen overflow-auto bg-gradient-to-tr from-slate-900 to-slate-800">
        <Navbar></Navbar>
        <slot />
        <Footerbar></Footerbar>
    </section>
</template>
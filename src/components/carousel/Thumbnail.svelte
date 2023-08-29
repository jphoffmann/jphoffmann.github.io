<script lang="ts">
    import type {ComponentType} from "svelte/src/runtime/internal/public";
    import Slide from "$components/carousel/Slide.svelte";
    import Animation from "$components/carousel/Animation.svelte";

    export let src = '';
    export let alt = '';
    export let titleLink = '';
    export let id: number;
    export let selected = false;
    export let thumbClass = '';
    export let thumbBtnClass = '';
    export let type: ComponentType<Slide> | ComponentType<Animation> = Slide;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button on:click on:dragstart|preventDefault aria-label="Click to view image" class="{thumbBtnClass} relative group">
    <img class="{thumbClass} "
         class:active={selected}
         id={id.toString()}
         {src}
         {alt}
         title="Image from {titleLink}">

    {#if type === Animation}
<span class="absolute flex justify-center items-center left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/60 group-hover:bg-gray-800/60 group-focus:outline-none">
    <img src="/icons/video-play-icon.svg" alt="Video icon"
         class="w-4 translate-x-[12%] opacity-70 group-hover:opacity-100 transition ease-in-out">
</span>

    {/if}

</button>

<style>
    .active {
        opacity: 1;
    }
</style>

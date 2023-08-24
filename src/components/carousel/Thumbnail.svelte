<script lang="ts">
    import {base} from "$app/paths";
    import Slide from "$components/carousel/Slide.svelte";
    import GIF from "$components/GIF.svelte";
    import type {ComponentType} from "svelte/src/runtime/internal/public";

    export let src = '';
    export let alt = '';
    export let titleLink = '';
    export let id: number;
    export let selected = false;
    export let thumbClass = '';
    export let thumbBtnClass = '';
    export let type: ComponentType<Slide> | ComponentType<GIF> = Slide;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button on:click aria-label="Click to view image" class="{thumbBtnClass} relative">
    <img class="{thumbClass} "
         class:active={selected}
         id={id.toString()}
         src="{base}/{src}"
         {alt}
         title="Image from {titleLink}"
         on:dragstart|preventDefault>

    {#if type === GIF}
        <img src="{base}/icons/gif.svg" alt="GIF icon"
             class="absolute left-0 top-0 w-full h-full opacity-70 hover:opacity-100 transition ease-in-out"/>
    {/if}

</button>

<style>
    .active {
        opacity: 1;
    }
</style>

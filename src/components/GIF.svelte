<script lang="ts">
    import {base} from "$app/paths";
    import {onMount} from "svelte";

    export let autoplay = false;
    export let thumb: string;
    export let src: string;
    export let alt: string;
    export let slideClass = '';
    export let imgClass = '';

    let playing: boolean = false;

    onMount(async () => {
        if (autoplay)
            playing = true;
    })

    const swap = () => {
        playing = !playing;
    }
</script>

<button class="{slideClass} relative" on:click={swap}>

    <img class={imgClass} src="{base}/{playing ? src : thumb}" {alt}/>

    {#if !playing}
        <img src="{base}/icons/gif.svg" alt="GIF icon"
             class="absolute left-0 top-0 w-full h-full opacity-70 hover:opacity-100 transition ease-in-out"/>
    {/if}

</button>

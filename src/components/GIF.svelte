<script lang="ts">
    import {base} from "$app/paths";

    export let thumb: string;
    export let src: string;
    export let alt: string;

    let playing: boolean = false;

    const swap = () => {
        playing = !playing;
    }
</script>

<button class="relative" on:click={swap}>
    <img src="{playing ? src : thumb}" {alt}/>
    {#if !playing}
        <img src="{base}/icons/gif.svg" alt="GIF icon"
             class="absolute left-0 top-0 w-full h-full opacity-70 hover:opacity-100 transition ease-in-out"/>
    {/if}
</button>

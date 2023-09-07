<script lang="ts">
    export let src = '';
    export let alt = '';
    export let attr = '';
    export let mediaClass = '';
</script>
<button aria-label="Click to view image in fullscreen" on:click>
    <img on:load {src} {alt} title={attr} class={mediaClass}/>
</button>


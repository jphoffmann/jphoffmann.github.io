<script lang="ts">
    export let src: string;
    export let alt = '';
    export let label = 'description';
    export let srclang = 'en';
    export let type = 'video/webm';
    export let mediaClass = '';
</script>

{#key src}
    <video class={mediaClass} loop controls muted>
        <source {src} {type} />
        <track src={alt} kind="descriptions" {label} {srclang}/>
        Your browser does not support the video tag.
    </video>
{/key}

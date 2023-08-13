<script>
    export let image = '';
    export let alt = '';
    export let attr = '';
    export let slideClass = '';
    export let imgClass = '';
</script>

<div class={slideClass}>
    {#key image}
        <img src={image} {alt} title={attr} class={imgClass}/>
    {/key}
</div>

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
  ## Props
  @prop image: string = '';
  @prop altTag: string = '';
  @prop attr: string = '';
  @prop slideClass: string = '';
-->

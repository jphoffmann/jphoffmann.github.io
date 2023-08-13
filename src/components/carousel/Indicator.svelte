<script>export let alt = '';
export let selected = false;
export let indicatorClass = '';
</script>

<button type="button" class={indicatorClass} class:active={selected} aria-label={alt} on:click />

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
  ## Props
  @prop name: string = '';
  @prop selected: boolean = false;
  @prop indicatorClass: string = '';

-->

<style>
  .active {
    opacity: 1;
  }</style>

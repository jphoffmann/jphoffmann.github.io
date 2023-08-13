<script lang="ts">
    import {twMerge} from 'tailwind-merge';
    import Slide from './Slide.svelte';
    import Thumbnail from './Thumbnail.svelte';
    import Caption from './Caption.svelte';
    import Indicator from './Indicator.svelte';
    import type {Image} from '$lib/project'
    import Draggable from "$components/Draggable.svelte";
    import {createEventDispatcher} from 'svelte';

    export let id = 'default-carousel';
    export let showIndicators = true;
    export let showCaptions = true;
    export let showThumbs = true;

    export let images: Image[] = [];

    export let gifs: Image[] = [];

    $: items = [gifs, images];

    export let slideControls = true;
    export let loop = false;
    export let duration = 2000;
    // Carousel
    export let divClass = '';
    let divCls = twMerge(divClass, $$props.classDiv);
    export let indicatorDivClass = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
    let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
    // Caption
    export let captionClass = 'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';
    let captionCls = twMerge(captionClass, $$props.classCaption);
    // Indicator
    export let indicatorClass = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
    let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
    // Slide
    export let slideClass = 'flex items-center justify-center h-full w-full';
    let slideCls = twMerge(slideClass, $$props.classSlide);
    // Img
    export let imgFit = 'cover';
    export let imgClass = `object-${imgFit} ${imgFit === 'cover' && 'w-full'} h-full`;
    let imgCls = twMerge(imgClass, $$props.classImg);
    // Thumbnail
    export let thumbClass = '';
    let thumbCls = twMerge(thumbClass, $$props.classThumb);
    // Thumbnail Container


    // Thumbnail Img Btn Div
    export let thumbBtnClass = '';
    let thumbBtnCls = twMerge(thumbBtnClass, $$props.classBtnThumb);

    export let firstImageIndex: number = 0;
    export let imageShowingIndex: number = firstImageIndex;
    $: image = images[imageShowingIndex];


    const nextSlide = () => {
        if (imageShowingIndex === images.length - 1) {
            imageShowingIndex = 0;
        } else {
            imageShowingIndex += 1;
        }
    };
    const prevSlide = () => {
        if (imageShowingIndex === 0) {
            imageShowingIndex = images.length - 1;
        } else {
            imageShowingIndex -= 1;
        }
    };
    const goToSlide = (number: number) => (imageShowingIndex = number);
    if (loop) {
        setInterval(() => {
            nextSlide();
        }, duration);
    }

    const dispatch = createEventDispatcher();

    function forwardImageClick() {
        dispatch('fullscreen');
    }

</script>

<div {id} class="relative flex justify-center items-center">
    <button class="{divCls}" on:click={forwardImageClick}>
        <Slide
                image={image.src}
                alt={image.alt}
                slideClass={slideCls}
                imgClass={imgCls}/>
    </button>
    {#if showIndicators}
        <!-- Slider indicators -->
        <div class={indicatorDivCls}>
            {#each images as {src, alt}, index}
                <Indicator {alt} selected={imageShowingIndex === index} on:click={() => goToSlide(index)}
                           indicatorClass={indicatorCls}/>
            {/each}
        </div>
    {/if}
    {#if slideControls}
        <!-- Slider controls -->
        <button on:click={prevSlide} type="button" class="flex absolute left-0 top-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        {#if $$slots.previous}
          <slot name="previous"/>
        {:else}
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        {/if}
          <span class="hidden">Previous</span>
      </span>
        </button>
        <button on:click={nextSlide} type="button" class="flex absolute right-0 top-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        {#if $$slots.next}
          <slot name="next"/>
        {:else}
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        {/if}
          <span class="hidden">Next</span>
      </span>
        </button>
    {/if}
</div>

{#if showCaptions}
    <Caption caption={images[imageShowingIndex].alt} captionClass={captionCls}/>
{/if}

{#if showThumbs}
    <Draggable>
        {#each images as item, index}
            <Thumbnail
                    thumbClass={thumbCls}
                    thumbBtnClass={thumbBtnCls}
                    thumbImg={item.thumb ? item.thumb : item.src}
                    altTag={item.alt}
                    id={index}
                    selected={imageShowingIndex === index}
                    on:click={() => goToSlide(index)}/>
        {/each}
    </Draggable>
{/if}
<script lang="ts">
    import {twMerge} from 'tailwind-merge';
    import Slide from './Slide.svelte';
    import Thumbnail from './Thumbnail.svelte';
    import Caption from './Caption.svelte';
    import Indicator from './Indicator.svelte';
    import type {Image} from '$lib/project'
    import Draggable from "$components/Draggable.svelte";
    import {createEventDispatcher} from 'svelte';
    import GIF from "$components/GIF.svelte";
    import type {ComponentType} from "svelte/src/runtime/internal/public";

    export let id = 'default-carousel';
    export let showIndicators = true;
    export let showCaptions = true;
    export let showThumbs = true;
    export let slideControls = true;

    export let dark = false;

    export let gifs: Image[] = [];
    export let images: Image[];

    let items = specifyComponent(images, Slide).concat(specifyComponent(gifs, GIF));

    function specifyComponent(images: Image[], type: ComponentType) {
        return images.map(image => {
                return {
                    image: image,
                    component: type
                }
            }
        )
    }

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

    export let itemShowingIndex: number = 0;
    $: item = items[itemShowingIndex];

    const nextSlide = () => {
        if (itemShowingIndex === items.length - 1) {
            itemShowingIndex = 0;
        } else {
            itemShowingIndex += 1;
        }
    };
    const prevSlide = () => {
        if (itemShowingIndex === 0) {
            itemShowingIndex = items.length - 1;
        } else {
            itemShowingIndex -= 1;
        }
    };
    const goToSlide = (number: number) => (itemShowingIndex = number);

    const dispatch = createEventDispatcher();

    function forwardImageClick() {
        dispatch('fullscreen');
    }

</script>

{#if item}
    <div {id} class="relative flex justify-center items-center" class:dark={dark} role="tabpanel">
        <button class="{divCls}" aria-label="Click to view image in fullscreen" on:click={forwardImageClick}>
            <Slide
                    src={item.image.src}
                    alt={item.image.alt}
                    slideClass={slideClass}
                    imgClass={imgClass}/>
            <!--<svelte:component this="{item.component}" {...item.props}/>-->
        </button>
        {#if showIndicators}
            <!-- Slider indicators -->
            <div class={indicatorDivCls}>
                {#each items as item, index}
                    <Indicator alt={item.image.alt} selected={itemShowingIndex === index}
                               on:click={() => goToSlide(index)}
                               indicatorClass={indicatorCls}/>
                {/each}
            </div>
        {/if}
        {#if slideControls}
            <!-- Slider controls -->
            <button on:click={prevSlide} type="button"
                    class="flex absolute left-0 top-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none dark:hover:bg-gray-900/60 transition"
                    data-carousel-prev>
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-gray-300" fill="none"
               stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span class="hidden">Previous</span>
      </span>
            </button>

            <button on:click={nextSlide} type="button"
                    class="flex absolute right-0 top-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none dark:hover:bg-gray-900/60 transition"
                    data-carousel-next>
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none"
               stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span class="hidden">Next</span>
      </span>
            </button>
        {/if}
    </div>
{/if}


{#if showCaptions}
    <Caption caption={items[itemShowingIndex].image.alt} captionClass={captionCls}/>
{/if}

{#if showThumbs}
    <div class="mt-2 pb-2 border border-gray-300 rounded-md shadow-inner">
        <Draggable scrollAnchorItem="{itemShowingIndex}" autoScrolling>
            {#each items as item, index}
                <Thumbnail
                        thumbClass="{thumbCls}"
                        thumbBtnClass="{thumbBtnCls} snap-normal snap-start p-2"
                        src={item.image.thumb ? item.image.thumb : item.image.src}
                        alt={item.image.alt}
                        type="{item.component}"
                        id={index}
                        selected={itemShowingIndex === index}
                        on:click={()=>goToSlide(index)}/>
            {/each}
        </Draggable>
    </div>
{/if}
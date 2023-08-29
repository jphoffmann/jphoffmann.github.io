<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import type {ComponentType} from "svelte/src/runtime/internal/public";
    import {twMerge} from 'tailwind-merge';
    import Slide from './Slide.svelte';
    import Animation from "$components/carousel/Animation.svelte";
    import Thumbnail from './Thumbnail.svelte';
    import Indicator from './Indicator.svelte';
    import Draggable from "$components/Draggable.svelte";
    import type {Media} from "$lib/project";


    export let id = 'default-carousel';
    export let showIndicators = true;
    export let showThumbs = true;
    export let slideControls = true;

    export let dark = false;

    export let videos: Media[] = [];
    export let images: Media[];

    let items = specifyComponent(videos, Animation).concat(specifyComponent(images, Slide));

    function specifyComponent(images: Media[], type: ComponentType) {
        return images.map(image => {
                return {
                    media: image,
                    component: type
                }
            }
        )
    }

    export let indicatorDivClass = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
    let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
    // Indicator
    export let indicatorClass = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
    let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
    // Img
    export let imgFit = 'cover';
    export let mediaClass = `object-${imgFit} ${imgFit === 'cover' && 'w-full'} h-full`;
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
        <div class="flex items-center justify-center h-full w-full">
            <svelte:component this="{item.component}" src="{item.media.src}" alt="{item.media.alt}" mediaClass="{mediaClass}" on:click={forwardImageClick}/>
        </div>
        {#if showIndicators}
            <!-- Slider indicators -->
            <div class={indicatorDivCls}>
                {#each items as item, index}
                    <Indicator alt={item.media.alt} selected={itemShowingIndex === index}
                               on:click={() => goToSlide(index)}
                               indicatorClass={indicatorCls}/>
                {/each}
            </div>
        {/if}
        {#if slideControls}
            <!-- Slider controls -->
            <button on:click={prevSlide} type="button"
                    class="flex absolute left-0 top-1/2 -translate-y-[60px] z-10 justify-center items-center px-4 h-[120px] cursor-pointer group focus:outline-none hover:bg-gray-900/40 transition rounded-r-lg"
                    data-carousel-prev
            >
                <span class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-gray-300" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span class="hidden">Previous</span>
                </span>
            </button>

            <button on:click={nextSlide} type="button"
                    class="flex absolute right-0 top-1/2 -translate-y-[60px] z-10 justify-center items-center px-4 h-[120px] cursor-pointer group focus:outline-none hover:bg-gray-900/40 transition rounded-l-lg"
                    data-carousel-next
            >
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

{#if showThumbs}
    <div class="mt-2 pb-2 border border-gray-300 rounded-md shadow-inner">
        <Draggable scrollAnchorItem="{itemShowingIndex}" autoScrolling>
            {#each items as item, index}
                <Thumbnail
                        thumbClass="{thumbCls}"
                        thumbBtnClass="{thumbBtnCls} snap-normal snap-start p-2"
                        src={item.media.thumb ? item.media.thumb : item.media.src}
                        alt={item.media.alt}
                        type="{item.component}"
                        id={index}
                        selected={itemShowingIndex === index}
                        on:click={()=>goToSlide(index)}/>
            {/each}
        </Draggable>
    </div>
{/if}
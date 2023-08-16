<script lang="ts">
    import Carousel from '$components/carousel/Carousel.svelte'
    import Slide from '$components/carousel/Slide.svelte'
    import MediaQuery from "svelte-media-queries";
    import {base} from "$app/paths";
    import Draggable from "$components/Draggable.svelte";
    import type {Image} from "$lib/project";
    import ImageModal from "$components/modal/ImageModal.svelte";

    export let data;

    let fullscreenImages = false;

    let draggableImageIndex: number = 0;
    let carouselImageIndex: number = 0;

    let images: Image[] = [];
    $: {
        data.images.forEach(image => images.push(
            {
                "src": base + '/' + image.src,
                "alt": image.alt
            }
        ));
    }
</script>


<h2 class="mt-16 mb-5 font-bold text-xl">{data.title}</h2>

<div class="flex flex-wrap justify-between mb-10 h-full rounded">
    {#if data.images}
        <div class="pb-5 max-w-full laptop:max-w-[65%] laptop:h-max">
            <MediaQuery query="(min-width: 640px)" let:matches>
                {#if matches}
                    <Carousel
                            {images}
                            showCaptions={false}
                            showIndicators={false}
                            showThumbs={true}
                            dark="{false}"
                            imgClass="max-h-[40vh] laptop:max-h-[55vh] shadow-xl"
                            thumbClass="opacity-60  rounded-md shadow-md
                            {data.border === 'mobile' ? 'aspect-[9/16] min-w-[100px] laptop:min-w-[125px]' : 'aspect-[16/9] min-w-[260px]'}"
                            thumbBtnClass="hover:scale-[1.03] transition duration-300 ease-in-out"
                            on:fullscreen={()=>{fullscreenImages = true}}
                            bind:imageShowingIndex={carouselImageIndex}
                    />
                    <ImageModal bind:open={fullscreenImages} outsideclose>
                        <Carousel
                                {images}
                                imageShowingIndex={carouselImageIndex}
                                showCaptions={false}
                                showThumbs={false}
                                dark="{true}"
                                divClass="cursor-auto"
                                imgClass="max-h-[80vh] max-w-[80vw]"
                        />
                    </ImageModal>
                {:else}
                    <Draggable bind:scrollAnchorItem={draggableImageIndex} scrollSnapping>
                        {#each images as image}
                            <button class="min-w-full snap-center" on:click={() => {fullscreenImages = true}}>
                                <Slide image="{image.src}"
                                       alt="{image.alt}"
                                       imgClass="mx-auto pb-2  {data.border === 'mobile' ? 'aspect-[9/16] h-[40vh]' : 'aspect-[16/9] min-w-full'}"
                                />
                            </button>
                        {/each}
                    </Draggable>


                    <ImageModal bind:open={fullscreenImages} outsideclose>
                        <Draggable bind:scrollAnchorItem="{draggableImageIndex}" scrollSnapping>
                            {#each images as image}
                                <Slide image="{image.src}"
                                       alt="{image.alt}"
                                       slideClass="min-w-full snap-center snap-always"
                                       imgClass="mx-auto pb-2 {data.border === 'mobile' ? 'aspect-[9/16] max-h-[60vh]' : 'aspect-[16/9] min-w-full'}"
                                />
                            {/each}
                        </Draggable>
                    </ImageModal>
                {/if}
            </MediaQuery>
        </div>
    {/if}

    <div class="laptop:max-w-[30%]">
        <div class="pb-5">
            <p>{data.description}</p>
            <slot name="description"/>
        </div>
        <div class="pb-5">
            <h3 class="font-bold">Technologies</h3>
            {data.tech.map(tech => ' ' + tech)}
        </div>
        {#if data.colleagues}
            <div>
                <h3 class="font-bold">Colleagues</h3>
                {data.colleagues}
            </div>
        {/if}
    </div>
</div>
<!--
<div class="{fullscreenImages ? 'fixed bg-dark-blue bg-opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' : ''}">
</div>
-->
<script lang="ts">
    import GIF from '$components/GIF.svelte'
    import {Carousel} from 'flowbite-svelte'
    import {base} from "$app/paths";

    export let data;
    let images: Object[];
    $: {
        images = [];
        data.images.forEach((image, index) => images.push(
            {
                "id": index,
                "imgurl": base+'/'+image.src,
                "name": image.alt
            }
        ));
    }
</script>


<h2 class="mt-16 mb-5 font-bold text-xl">{data.title}</h2>

<div class="flex flex-wrap justify-between mb-10 h-full">
    {#if data.images}
        <div class="dark pb-5 mx-auto tablet:mx-0 laptop:max-w-[65%]">
            <Carousel
                    {images}
                    showCaptions={false}
                    showIndicators={false}
                    showThumbs={true}
                    imgFit="fill"
                    imgClass="h-full w-auto max-h-[650px]"
                    divClass=""
                    thumbClass="max-h-[281px]"
                    thumbDivClass="flex flex-row justify-between w-full pt-2 gap-2"

            />
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
<div class="grid auto-rows-max gap-4 tablet:gap-10 tablet:w-[80%] tablet:max-w-[1280px] mx-auto text-center justify-items-center">
    {#if data.gif}
        {#each data.gif as gif}
            <GIF src="{gif.src}" alt="{gif.alt}" thumb="{gif.thumb}"/>
        {/each}
    {/if}

    {#if data.images}
        {#each data.images as image}
            <img src="{image.src}" alt="{image.alt}">
        {/each}
    {/if}
</div>
-->
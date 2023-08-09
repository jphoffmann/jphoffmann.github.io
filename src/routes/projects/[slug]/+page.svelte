<script>
    import GIF from '$components/GIF.svelte'
    import {Carousel} from 'flowbite-svelte'

    export let data;

    $: images = data.images.map((image, index) => image = {
        "id": index,
        "imgurl": image.src,
        "name": image.alt
    })
</script>


<h2 class="mt-16 mb-5 font-bold text-xl">{data.title}</h2>

<div class="flex flex-wrap tablet:flex-nowrap mb-10">
    {#if data.images}
        <div class="dark tablet:max-w-[70%] pb-5 mr-28 p-1">
            <Carousel
                    {images}
                    showCaptions={false}
                    showIndicators={false}
                    divClass="max-h-[650px]  pb-2 px-1 rounded-md overflow-hidden"
                    slideClass="h-[650px] mx-auto"
                    thumbClass="max-h-[281px] rounded-md opacity-60 hover:scale-[1.02] transition duration-300 ease-in-out border-2"
            />
        </div>
    {/if}

    <div class="tablet:max-w-[25%]">
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
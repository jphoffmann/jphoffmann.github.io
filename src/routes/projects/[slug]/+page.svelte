<script lang="ts">
    import Carousel from '$components/carousel/Carousel.svelte'
    import MediaQuery from "svelte-media-queries";
    import Draggable from "$components/Draggable.svelte";
    import ImageModal from "$components/modal/ImageModal.svelte";
    import TechStack from "$components/TechStack.svelte";
    import {Li, List} from "flowbite-svelte";

    export let data;

    let fullscreenImages = false;

    let draggableImageIndex: number = 0;
    let carouselImageIndex: number = 0;

</script>

<div class="flex flex-wrap justify-between mt-10 mb-10">

    <div class="mb-5 tablet:mb-10 max-w-full laptop:max-w-[65%]">
        <MediaQuery query="(min-width: 640px)" let:matches>
            {#if matches}
                <Carousel
                        videos={data.videos}
                        images={data.images}
                        showCaptions={false}
                        showIndicators={false}
                        showThumbs={true}
                        dark="{false}"
                        on:fullscreen={()=>{fullscreenImages = true}}
                        bind:itemShowingIndex={carouselImageIndex}
                        mediaClass="{data.border === 'mobile' ? 'max-h-[400px] desktop:max-h-[600px]' : 'max-h-[400px] laptop:max-h-[600px]'} shadow-md"
                        thumbClass="opacity-70  rounded-md shadow-md
                            {data.border === 'mobile' ? 'aspect-[9/16] min-w-[80px] laptop:min-w-[100px] desktop:min-w-[125px]' : 'aspect-[16/9] min-w-[160px] laptop:min-w-[200px] laptop:max-w-full desktop:min-w-[260px]'}"
                        thumbBtnClass="hover:scale-[1.03] transition duration-300 ease-in-out"
                />
                <ImageModal bind:open={fullscreenImages} outsideclose>
                    <Carousel
                            videos={data.videos}
                            images={data.images}
                            bind:itemShowingIndex={carouselImageIndex}
                            showCaptions={false}
                            showIndicators={false}
                            showThumbs={false}
                            dark="{true}"
                            mediaClass="max-h-[80vh] max-w-[80vw] cursor-auto shadow-xl"
                    />
                </ImageModal>
            {:else}
                <Draggable bind:scrollAnchorItem={draggableImageIndex} scrollSnapping>
                    {#each data.images as item}
                        <button class="min-w-full snap-center" on:click={() => {fullscreenImages = true}}>
                            <img class="mx-auto pb-2  {data.border === 'mobile' ? 'aspect-[9/16] h-[40vh]' : 'aspect-[16/9] min-w-full'}" src={item.src} alt={item.alt}/>
                        </button>
                    {/each}
                </Draggable>


                <ImageModal bind:open={fullscreenImages} outsideclose>
                    <Draggable bind:scrollAnchorItem="{draggableImageIndex}" scrollSnapping>
                        {#each data.images as item}
                            <div class="min-w-full snap-center snap-always">
                                <img class="mx-auto pb-2 {data.border === 'mobile' ? 'aspect-[9/16] max-h-[60vh]' : 'aspect-[16/9] min-w-full'}" src={item.src}  alt={item.alt} />
                            </div>
                        {/each}
                    </Draggable>
                </ImageModal>
            {/if}
        </MediaQuery>
    </div>


    <div class="laptop:order-none laptop:max-w-[30%]">

        <h2 class="mb-5 font-bold text-xl">{data.title}</h2>

        <p class="mb-5 whitespace-pre-line">{data.description}</p>

        <div class="mb-5 laptop:max-w-[65%] laptop:hidden">
            <h3 class="font-bold mb-1">Notable learned experiences:</h3>
            <List>
                {#each data.experience as experience}
                    <Li>{experience}</Li>
                    {/each}
            </List>
        </div>


        <div class="mb-5">
            <h3>Technologies</h3>
            <TechStack items={data.tech}/>
        </div>
        {#if data.colleagues}
            <div>
                <h3>Colleagues</h3>
                <p>{data.colleagues}</p>
            </div>
        {/if}
    </div>

    <div class="laptop:max-w-[65%] hidden laptop:block">
        <h3>Notable learned experiences:</h3>
        <List>
            {#each data.experience as experience}
                <Li>{experience}</Li>
            {/each}
        </List>
    </div>

</div>

<!--
<div class="{fullscreenImages ? 'fixed bg-dark-blue bg-opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' : ''}">
</div>
-->
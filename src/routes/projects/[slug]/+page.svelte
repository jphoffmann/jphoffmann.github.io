<script lang="ts">
    import type {Project} from '$lib/project'
    import GIF from '$components/GIF.svelte'

    export let data: Project;

</script>

<h2 class="my-10 font-bold">{data.title}</h2>

<div class="flex flex-wrap justify-between my-10">
    <div class="tablet:w-[40%] pb-5">
        <p>{data.description}</p>
        <slot name="description"/>
    </div>

    <div class="pb-5">
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

<div class="grid auto-rows-max gap-4 tablet:gap-10 tablet:w-[80%] tablet:max-w-[1280px] mx-auto text-center">
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
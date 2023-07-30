<script>
    export let data;

    //$:{
    //    console.log(data)
    //}
</script>

<h2 class="my-10">{data.title}</h2>

<div class="flex flex-wrap justify-between">
    <div class="tablet:w-[40%] pb-5">{data.description}</div>

    <div class="pb-5">
        <div class="pb-5">
            {data.tech}
        </div>
        {#if data.colleagues}
            <div>
                {data.colleagues}
            </div>
        {/if}
    </div>
</div>

<div class="grid auto-rows-max gap-4 self-center justify-center">
    {#each data.images as image}
        <img src="{image.src}" alt="{image.alt}">
    {/each}
</div>
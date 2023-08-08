<script lang="ts">
    import {Tooltip} from 'flowbite-svelte';
    import projects from '$lib/projects.json';

    let tech = new Map<string, string>(Object.entries(projects.tech));

    export let items: string[];

    /*
    <!--Tooltip-->
    <span class="absolute left-1/2 -translate-x-1/2 -translate-y-12
    opacity-0 peer-hover:opacity-100 transition-opacity
    px-3 py-2.5 w-max rounded-lg
    bg-dark-grey text-grey font-semibold text-center"
    >
        {item}
        <!--Tooltip arrow-->
        <span class="absolute top-full left-1/2 -ml-[8px] border-[8px] border-t-dark-grey border-transparent"/>
    </span>
     */
</script>

<div class="flex flex-wrap gap-2.5">
    {#each items as item}
        {#if tech.has(item)}
            <div class="inline-block relative rounded-[0.5rem] p-1
            hover:bg-[hsl(0,0%,90%,1)] transition duration-300 ease-in-out">
                <img src="/icons/{tech.get(item)}" alt="{item} Logo"
                     class="min-w-[40px] max-w-[100px] h-[30px] laptop:h-[40px]"/>
            </div>

            <Tooltip type="custom" class="bg-dark-grey text-grey font-semibold" >{item}</Tooltip>
        {/if}
    {/each}
</div>
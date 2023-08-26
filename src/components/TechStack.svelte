<script lang="ts">
    import {base} from "$app/paths";
    import {Tooltip} from 'flowbite-svelte';
    import projects from '$lib/projects.json';

    let tech = new Map<string, string>(Object.entries(projects.tech));

    export let items: string[];
    export let alignment: "horizontal" | "vertical" = "horizontal"
    export let useTooltip = false;
</script>

{#if useTooltip}

    <div class="flex laptop:gap-2.5 {alignment === 'horizontal' ? 'flex-wrap':'flex-col'}">
        {#each items as item}
            {#if tech.has(item)}
                <div class="inline-block relative rounded-[0.5rem] px-1.5 py-1 tablet:p-1 w-min
                            hover:bg-[hsl(0,0%,90%,1)] transition duration-300 ease-in-out">
                    <img src="{base}/icons/{tech.get(item)}" alt="{item} Logo"
                         class="min-w-[30px] laptop:min-w-[40px] max-w-[80px] laptop:max-w-[100px] h-[30px] laptop:h-[40px]"/>
                </div>

                <Tooltip type="custom" class="bg-dark-grey text-grey font-semibold">{item}</Tooltip>
            {/if}
        {/each}
    </div>

{:else}

    <div class="grid grid-cols-[min-content_auto] gap-x-6 gap-y-2.5 items-center">
        {#each items as item}
            {#if tech.has(item)}
                <img src="{base}/icons/{tech.get(item)}" alt="{item} Logo"
                     class="m-1 min-w-[30px] laptop:min-w-[40px] max-w-[80px] laptop:max-w-[100px] h-[30px] laptop:h-[40px]"/>

                {item}
            {/if}
        {/each}
    </div>

{/if}
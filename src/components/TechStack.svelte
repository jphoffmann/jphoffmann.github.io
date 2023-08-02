<script lang="ts">
    import projects from '../projects.json';

    let tech = new Map<string, string>(Object.entries(projects.tech));

    export let items: string[];
</script>

<div class="flex flex-wrap gap-2.5">
    {#each items as item}
        {#if tech.has(item)}
            <div class="group inline-block relative rounded-[0.5rem] p-1
            hover:bg-[hsl(0,0%,90%,1)]
            transition duration-300 ease-in-out">

                <!--Tooltip-->
                <span class="absolute left-1/2 -translate-x-1/2 -translate-y-12
                opacity-0 group-hover:opacity-100 transition-opacity
                px-3 py-2.5 w-max rounded-lg
                bg-dark-grey text-grey font-semibold text-center">
                    {item}
                    <!--Tooltip arrow-->
                    <span class="absolute top-full left-1/2 -ml-[8px] border-[8px] border-t-dark-grey border-transparent"/>
                </span>

                <!--Logo-->
                <img src="/icons/{tech.get(item)}" alt="{item} Logo"
                     class="min-w-[40px] min-h-[40px] max-w-[100px] max-h-[40px] h-auto"/>
            </div>
        {/if}
    {/each}
</div>
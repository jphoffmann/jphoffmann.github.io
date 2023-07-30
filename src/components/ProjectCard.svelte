<script lang="ts"
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js">

    import {base} from "$app/paths";
    import {Project} from "/src/project.ts";
    import MockupPhone from "$components/MockupPhone.svelte";

    export let project: Project;

    //Optional override of project information:
    export let title;
    export let date;
    export let desc;
    export let tech;
</script>

<article class="flex flex-wrap-reverse py-10 laptop:py-20 ">

    <!-- Description -->
    <div class="laptop:w-[35%] px-2 tablet:px-0 laptop:pr-6">
        <h2 class="text-2xl font-bold">{title ? title : project.title}</h2>

        <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">{date ? date : project.date}</p>

        {#if project || desc}
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">{desc ? desc : project.description}</p>
        {/if}

        {#if project || tech}
            <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">{tech ? tech : project.tech}</p>
        {/if}
    </div>

    <!-- Thumbnail -->
    <div class="w-full laptop:w-[60%] mb-6 laptop:mb-0 laptop:ml-auto laptop:pl-6">
        <div class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat {project && project.thumbnail.border === 'shadow' ? 'shadow-lg':''}">

            {#if $$slots.images}
                <slot name="images"/>
            {:else if project.thumbnail}
                {#if project.thumbnail.border === "mobile"}
                    <div class="w-fit laptop:mx-auto">
                        <MockupPhone>
                            <img src="{project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
                        </MockupPhone>
                    </div>
                {:else}
                    <img src="{project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
                {/if}
            {/if}

            {#if project && project.slug}
                <a href="{base}/projects/{project.slug}"
                   class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </a>
            {/if}
        </div>
    </div>


</article>

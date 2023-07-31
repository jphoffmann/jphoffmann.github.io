<script lang="ts">
    import {base} from "$app/paths";
    import type {Project} from "../project";
    import MockupPhone from "$components/MockupPhone.svelte";
    import TechStack from "$components/TechStack.svelte";

    export let project: Project | null = null;

    //Optional override of project information:
    export let title: String = "";
    export let date: String = "";
    export let desc: String = "";
    export let tech: [] | undefined = undefined;
</script>

<article class="flex flex-wrap-reverse tablet:flex-nowrap py-10 laptop:py-20">

    <!-- Description -->
    <div class="tablet:w-[35%] px-2 tablet:px-0 laptop:pr-6">
        <h2 class="text-2xl font-bold">{title || project?.title}</h2>

        <p class="mb-6 text-sm text-neutral-500">{date || project?.date}</p>

        {#if desc || project?.description}
            <p class="mb-6 text-neutral-500">{desc || project?.description}</p>
        {/if}

        <div class="mb-6 text-sm text-neutral-500">
            <TechStack items="{tech ?? project?.tech}"/>
        </div>

    </div>

    <!-- Thumbnail -->
    <div class="w-full tablet:w-[60%] mb-6 laptop:mb-0 tablet:ml-auto laptop:pl-6">
        <div class="relative overflow-hidden rounded-lg {project?.thumbnail?.border === 'shadow' ? 'shadow-lg':''}">

            {#if $$slots.images}
                <slot name="images"/>
            {:else if project?.thumbnail?.border === "mobile"}
                <div class="w-fit tablet:mx-auto">
                    <MockupPhone>
                        <img src="{project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
                    </MockupPhone>
                </div>
            {:else if project?.thumbnail}
                <img src="{project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
            {/if}

            {#if project && project.slug}
                <a href="{base}/projects/{project.slug}"
                   class="absolute top-0 right-0 bottom-0 left-0
                   bg-[hsl(0,0%,98.4%,0.2)] opacity-0 hover:opacity-100
                   transition duration-300 ease-in-out">
                </a>
            {/if}
        </div>
    </div>

</article>

<script lang="ts">
    import {base} from "$app/paths";
    import type {Project} from "$lib/project";
    import MockupPhone from "$components/MockupPhone.svelte";
    import TechStack from "$components/TechStack.svelte";

    export let project: Project;

    //Optional override of project description:
    export let desc: String = "";
    export let thumbnail = '';
</script>

<article class="flex flex-wrap-reverse tablet:flex-nowrap py-10 laptop:py-20">
    <!-- Description -->
    <div class="flex flex-col tablet:w-[35%] px-2 tablet:px-0 laptop:pr-6">
        <h2 class="text-2xl font-bold">{project.title}</h2>

        <p class="mb-4 laptop:mb-6 text-sm text-neutral-500">{project.date}</p>

        <p class="mb-4 laptop:mb-6 text-neutral-500">{desc || project.description}</p>

        <div class="mb-4 laptop:mb-6 text-sm text-neutral-500">
            <TechStack items="{project.tech}" useTooltip/>
        </div>

        {#if project.slug}
            <div class="mx-auto tablet:mx-0 mt-4 tablet:mt-auto">
                <a class="btn btn-blue tablet:text-xl" href="{base}/projects/{project.slug}" role="button">See more</a>
            </div>
        {/if}

    </div>

    <!-- Thumbnail -->
    <div class="tablet:w-[60%] w-full h-fit mb-6 tablet:mb-0 tablet:ml-auto
         relative overflow-hidden rounded-lg" class:shadow-lg={project.border === 'shadow'}>
        {#if project.border === "mobile"}
            <MockupPhone href="{project.slug ? base+'/projects/'+project.slug : ''}">
                <img src="{base}/{thumbnail || project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
            </MockupPhone>
        {:else if thumbnail || project.thumbnail}
            <img src="{base}/{thumbnail || project.thumbnail.src}" alt="{project.thumbnail.alt}"/>

            {#if project.slug}
                <a href="{base}/projects/{project.slug}"
                   class="absolute top-0 right-0 bottom-0 left-0
                   bg-[hsl(0,0%,98.4%,0.2)] opacity-0 hover:opacity-100
                   transition duration-300 ease-in-out">
                </a>
            {/if}
        {/if}
    </div>
</article>
<script lang="ts">
    import type {Project} from "$lib/project";
    import MockupPhone from "$components/MockupPhone.svelte";

    export let project: Project;
</script>

<article>
    <!-- Thumbnail -->
    <div class="relative flex justify-center w-full mb-6 overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat {project.border === 'shadow' ? 'shadow-lg':''}">
        {#if project.thumbnail}
            {#if project.border === "mobile"}
                <MockupPhone>
                    <img src="{project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
                </MockupPhone>
            {:else}
                <img src="{project.thumbnail.src}" alt="{project.thumbnail.alt}"/>
            {/if}
        {/if}

        {#if project.slug}
            <a href="/projects/{project.slug}"
               class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </a>
        {/if}
    </div>


    <!-- Description-->
    <div class="mt-auto">
        <h2 class="text-2xl font-bold">{project.title}</h2>
        <!--
        {#if project.description}
            <p class="mb-6 text-neutral-500">{project.description}</p>
        {/if}
        -->
    </div>
</article>
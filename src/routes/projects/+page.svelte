<script>
    import ProjectCard from "$components/ProjectCard.svelte";
    import ProjectCardSmall from "$components/ProjectCardSmall.svelte";
    import projects from '$lib/projects.json';
</script>

<section>
    <h2 class="my-16 text-center">Previous Projects</h2>

    <div class="flex justify-between gap-14 self-center" >
        {#each Object.values(projects.finished) as values}
            <ProjectCardSmall project="{values}" />
        {/each}
    </div>
</section>

<section>
    <h2 class="mt-24 mb-6 text-center">Current Projects</h2>

    <ProjectCard project="{projects.current.crestfallen_versus}"/>
</section>

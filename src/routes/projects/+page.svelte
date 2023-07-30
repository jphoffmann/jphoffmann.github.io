<script>
    import ProjectCard from "$components/ProjectCard.svelte";
    import ProjectCardSmall from "$components/ProjectCardSmall.svelte";
    import projects from '/src/projects.json';
</script>

<section>
    <h2 class="my-16 text-center">Previous Projects</h2>

    <div class="gallery grid gap-[50px] justify-center" style="grid-template-columns: repeat(auto-fit, minmax(300px, 600px))">
        {#each Object.entries(projects.finished) as [name,values]}
            <ProjectCardSmall project="{values}" />
        {/each}
    </div>


</section>

<section>
    <h2 class="my-16 text-center">Current Projects</h2>

    <ProjectCard project="{projects.current.crestfallen_versus}"/>
</section>

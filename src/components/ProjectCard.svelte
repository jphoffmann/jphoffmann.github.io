<script>
    export let title;
    export let date;
    export let desc;
    export let tech;
</script>

<style>
    .project-card {
        display: grid;
        grid-template-columns: 30% 60%;
        grid-gap: 0 10%;
        padding: 5rem 0 5rem 0
    }

    .project-info > * {
        padding-bottom: 1.5rem;
    }

    @media screen and (max-width: 1280px) {
        .project-card {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            padding: 2rem 0 2rem 0
        }
    }
</style>

<article class="project-card">
    <div class="project-info flex flex-col justify-start">

        <div class="mt-5 xl:mt-0">
            <h2>{title}</h2>
            <time class="text-sm text-medium-grey">{date}</time>
        </div>

        {#if desc}
            <p class="text-lg">{desc}</p>
        {/if}

        {#if tech}
            <p class="text-sm font-light text-medium-grey">{tech}</p>
        {/if}

        <a class="font-medium underline mt-auto" href="/" style="padding-bottom: 0;">see more</a>
    </div>

    <div class="flex justify-center items-center">
        <!-- Put project image(s) into slot-->
        <slot/>
    </div>

</article>
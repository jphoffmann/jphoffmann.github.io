<script lang="ts">
    import ProjectCard from '$components/ProjectCard.svelte';
    import projects from '$lib/projects.json';
    import {SmoothScroll} from "$lib/SmoothScroll";

    const smoothScroll = new SmoothScroll(500);
</script>

<main>
    <section class="pt-[10vh]">

        <h1 class="font-bold text-4xl tablet:text-7xl laptop:text-8xl mb-12">
            <span class="block pb-0.5">Hello, I’m</span>
            <span class="block whitespace-nowrap">Jakob Hoffmann</span>
        </h1>
        <p class="text-xl tablet:text-3xl laptop:text-4xl text-medium-grey tablet:py-20 tablet:w-[60%] ml-auto">Software
            Developer and student
            at TU Vienna
            who likes interesting challenges.</p>

        <a href="#Projects" on:click|preventDefault={() => smoothScroll.scrollTo('Projects')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor"
                 class="w-10 h-10 mt-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/>
            </svg>
        </a>
    </section>

    <section id="Projects" class="divide-y divide-gray-300">
        <ProjectCard project="{projects.finished.crestfallen_opengl}"/>

        <ProjectCard project="{projects.finished.cinemacurve}"/>

        <ProjectCard project="{projects.finished.crestfallen_mobile}"
                     desc="2D-Platformer inspired by Jump King. Written in Android-Studio/ Java,
                     utilising Android Jetpack and SQLite."/>

        <article class="flex flex-col tablet:flex-row py-10 laptop:py-20">
            <div class="tablet:w-[35%] px-2 tablet:px-0 laptop:pr-6">
                <h2 class="text-2xl font-bold">This Portfolio</h2>
                <p class="mb-7 tablet:mb-0 text-sm text-neutral-500">2023</p>
            </div>
            <div class="flex justify-around gap-5 tablet:gap-5 tablet:w-[60%] tablet:ml-auto">
                <img class="max-w-[310px] max-h-[50px] min-w-0" src="icons/Svelte-kit-horizontal.svg"
                     alt="Svelte-kit logo">
                <img class="max-w-[310px] max-h-[50px] min-w-0" src="icons/tailwindcss-logotype.svg"
                     alt="Tailwind CSS logo">
                <img class="max-w-[310px] max-h-[50px] min-w-0" src="icons/WebStorm_Icon.svg" alt="Webstorm logo">
            </div>
        </article>

    </section>

    <section id="About" class="pt-40">
        <h2 class="my-4">About</h2>
        <div class="tablet:flex">
            <img src="portrait.jpg" alt="Portrait of myself"
                 class="mx-auto tablet:mx-0 tablet:mr-20 laptop:mr-40 w-[150px] tablet:w-[250px] h-auto">

            <p class="tablet:text-2xl laptop:text-3xl laptop:w-[50%] pt-8
                  text-justify hyphens-auto tablet:text-left tablet:hyphens-none">
                Currently enrolled at TU Vienna, I am a media informatics student with experience
                in web and game development.
            </p>
        </div>

    </section>

    <hr class="my-5 tablet:my-8 h-px tablet:h-0.5 border-t-0 bg-black opacity-100"/>

    <section id="Contact">
        <h2 class="my-4">Contact</h2>

        <div class="flex flex-wrap">
            <p class="tablet:text-xl w-[450px] mr-8 mb-8">I'm always happy to hear about new
                opportunities
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </p>
            <div class="flex flex-col mx-auto tablet:ml-auto tablet:mr-0">
                <a class="tablet:text-xl mb-6"
                   href="mailto:jp.hoffmann96@gmail.com">jp.hoffmann96@gmail.com</a>
                <button class="btn btn-blue max-w-fit px-7 mx-auto laptop:mx-0">
                    <a class="tablet:text-xl" href="Hoffmann_CV.pdf" target="_blank">View Resume</a>
                </button>
            </div>
        </div>
    </section>
</main>



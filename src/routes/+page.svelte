<script>
    import ProjectCard from '../components/ProjectCard.svelte';
    import projects from '../projects.json';
    import MediaQuery from 'svelte-media-queries'

    let matches = false;
</script>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 50% 40%;
        grid-gap: 0 10%;
        padding-bottom: 7rem
    }

    @media screen and (max-width: 1280px) {
        .main-grid {
            display: flex;
            flex-direction: column;
        }
    }
</style>

<main>
    <section class="pt-[10vh]">
        <div class="main-grid">
            <h1 class="flex flex-col font-bold text-5xl laptop:text-8xl mb-12 laptop:mb-0 mr-8 min-w-fit">
                <span class="pb-0.5">Hello, I’m</span>
                <span>Jakob Hoffmann</span>
            </h1>
            <p class="text-2xl laptop:text-4xl text-medium-grey self-end">Software Developer and student at TU Vienna
                who likes interesting challenges.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/>
        </svg>
    </section>

    <section id="Projects" class="divide-y divide-gray-300">
        <ProjectCard project="{projects.finished.crestfallen_opengl}"/>

        <ProjectCard project="{projects.finished.cinemacurve}"
                     desc="A cinema ticket distribution site as well as several admin tools."
        />

        <ProjectCard project="{projects.finished.crestfallen_mobile}"
                     desc="2D-Platformer written in Android-Studio/ Java, utilising Android Jetpack and SQLite."
        />

        <MediaQuery query="(min-width: 640px)" bind:matches/>
        <ProjectCard project="{projects.finished.portfolio}"
                     tech="{matches ? [] : projects.finished.portfolio.tech}">
            <div slot="images" class="hidden tablet:flex justify-around gap-10">
                <img class="max-h-[52px] min-w-0" src="icons/Svelte-kit-horizontal.svg" alt="Svelte-kit logo">
                <img class="max-h-[52px] min-w-0" src="icons/tailwindcss-logotype.svg" alt="Tailwind CSS logo">
                <img class="max-h-[52px] min-w-0" src="icons/WebStorm_Icon.svg" alt="Webstorm logo">
            </div>
        </ProjectCard>

    </section>

    <section id="About" class="pt-40 tablet:flex">
        <img src="portrait.jpg" alt="Portrait of myself"
             class="mx-auto tablet:mx-0 tablet:mr-20 laptop:mr-40 w-[250px] h-auto">

        <p class="text-2xl laptop:text-4xl laptop:w-[50%] pt-8
                  text-justify hyphens-auto tablet:text-left tablet:hyphens-none">
            Currently enrolled at TU Vienna, I am a media informatics student with experience
            in web and game development.
        </p>
    </section>

    <hr class="my-12 h-0.5 border-t-0 bg-black opacity-100"/>

    <section id="Contact">
        <h2 class="my-4">Contact</h2>

        <div class="flex flex-wrap">
            <p class="text-2xl laptop:text-4xl w-[450px] mr-8 mb-8">I'm always happy to hear about new opportunities
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </p>
            <div class="flex flex-col mx-auto tablet:ml-auto tablet:mr-0">
                <a class="text-2xl laptop:text-4xl mb-6"
                   href="mailto:jp.hoffmann96@gmail.com">jp.hoffmann96@gmail.com</a>
                <button class="btn btn-blue max-w-fit px-7 mx-auto laptop:mx-0">
                    <a class="text-xl" href="Hoffmann_CV.pdf" target="_blank">View Resume</a>
                </button>
            </div>
        </div>
    </section>
</main>



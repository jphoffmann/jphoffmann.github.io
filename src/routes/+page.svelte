<script>
    import ProjectCard from '../components/ProjectCard.svelte';
    import Divider from '../components/Divider.svelte';
</script>

<style>
    section {
        margin: 4rem 0 4rem 0;
    }

    #head {
        display: grid;
        grid-template-columns: 50% 40%;
        grid-gap: 0 10%;
        padding-bottom: 7rem
    }

    img {
        display: block;
        max-width: 854px;
        max-height: 480px;
        min-width: 250px;
    }

    @media screen and (max-width: 1280px) {
        #head {
            display: flex;
            flex-direction: column;
        }

        #head h1 {
            margin-bottom: 3rem;
        }
    }
</style>

<main>
    <section>
        <div id="head">
            <h1 class="font-bold text-9xl">Hello, I’m Jakob Hoffmann</h1>
            <p class="text-4xl text-medium-grey self-end">Software Developer and student at TU Vienna who likes
                interesting
                challenges.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/>
        </svg>
    </section>

    <section id="Projects" class="divide-y-2 divide-dashed divide-gray-300">
        <ProjectCard title="Crestfallen"
                     date="03.2020 – 06.2020"
                     desc="3D-Platformer built with OpenGL in C++ to showcase graphical effects.
                     Implemented fully dynamic shadows with StencilShadow-Volumes."
                     tech="C++, OpenGL"
        >
            <img src="crestfallen-thumb.png" alt="Project thumbnail for Crestfallen."
                 class="drop-shadow-lg rounded-md">
        </ProjectCard>

        <ProjectCard title="Crestfallen Mobile"
                     date="03.2021 – 06.2021"
                     desc="2D-Platformer written in Android-Studio/ Java, utilising Android Jetpack and SQLite.
                     Implemented custom collision handling, scene structure and management of gameobjects"
                     tech="Android Studio, Java, SQLite.
                  Art by Michael Steinkellner"
        >
            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2rem] h-[482px] w-[278px] drop-shadow-md">
                <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div class="rounded-[1rem] overflow-hidden w-[252px] h-[450px] bg-white dark:bg-gray-800">
                    <img src="crestfallen-mobile-thumb.gif" alt="Project thumbnail for Crestfallen Mobile.">
                </div>
            </div>
        </ProjectCard>


        <ProjectCard title="Crestfallen Versus"
                     date="WIP"
                     desc="Made multiplayer matches over local network"
                     tech="Unity, C#."
        >
            <img src="crestfallen-logo.png" alt="Project thumbnail for Crestfallen Versus.">
        </ProjectCard>

        <ProjectCard title="This Portfolio"
                     date="2023"
                     tech="SvelteKit, Tailwind CSS, Webstorm"
        >
            <img class="h-9 max-w-full" src="Svelte-kit-horizontal.svg" alt="Svelte-kit logo">
            <img class="h-9 pl-4" src="tailwindcss-logotype.svg" alt="Tailwind CSS logo">
            <img class="h-9 pl-4" src="WebStorm_Icon.svg" alt="Webstorm logo">
        </ProjectCard>
    </section>

    <section id="About" class="pt-40">
        <!-- <h2 class="mb-4">About</h2> -->
        <div class="flex">
            <p class="text-xl text-medium-grey">
                Currently entrollend at the TU Vienna, I am a media informatics student with experience
                in web and game development.
            </p>
            <img src="portrait-alt.png" alt="portrait photo" class="ml-auto pl-8">
        </div>

    </section>

    <Divider/>

    <section id="Contact">
        <h2 class="mb-4">Contact</h2>

        <div class="flex justify-between">
            <p class="text-3xl w-[450px]">I'm always happy to hear about new opportunities
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </p>
            <div class="flex flex-col">
                <a class="text-3xl mb-6" href="mailto:jp.hoffmann96@gmail.com">jp.hoffmann96@gmail.com</a>
                <a href="Hoffmann_CV.pdf" target="_blank">View Resume</a>
            </div>
        </div>
    </section>
</main>



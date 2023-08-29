<script>
    import "../app.css";
</script>

<header class="flex justify-between sticky top-0 z-20 bg-grey py-2">
    <a class="text-2xl tablet:text-4xl font-bold" href="/" >jh.</a>
    <nav class="flex text-xl font-medium self-center gap-2.5 tablet:gap-4">
        <a href="/#Projects">Projects</a>
        <a class="" href="/#About">About</a>
        <a class="" href="/#Contact">Contact</a>
    </nav>
</header>

<slot/>

<footer class="mt-28 text-center">
    <span class="text-[12px] font-medium">Jakob Hoffmann - 2023</span>
</footer>
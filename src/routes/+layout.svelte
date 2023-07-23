<script>
    import "../app.css";
</script>

<style>
    nav a {
        padding-left: 1rem;
    }
</style>

<header class="flex justify-between sticky top-0 z-10 bg-grey pt-2 pb-2 mb-72">
    <a href="/">
        <b class="text-4xl">jh.</b>
    </a>
    <nav class="text-xl font-medium">
        <a href="#Projects">Projects</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
    </nav>
</header>

<slot/>

<footer class="mt-28">
    <span class="font-medium">Jakob Hoffmann - 2023</span>
</footer>
<script>
    import "../app.css";
    import {base} from "$app/paths";
</script>

<header class="flex justify-between sticky top-0 z-10 bg-grey py-2">
    <a class="text-4xl font-bold" href="/" >jh.</a>
    <nav class="text-xl font-medium">
        <a href="{base}/#Projects">Projects</a>
        <a class="pl-4" href="{base}/#About">About</a>
        <!--<a class="pl-4" href="{base}/#Contact">Contact</a>-->
    </nav>
</header>

<slot/>

<footer class="mt-28">
    <span class="font-medium">Jakob Hoffmann - 2023</span>
</footer>
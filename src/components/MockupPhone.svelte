<script lang="ts">
    export let href: string;
</script>
<div class="relative w-fit mx-auto px-[3px] tablet:h-full">
    <div class="relative border-gray-800 border-[14px] rounded-[2rem] w-[280px] h-[478px]  drop-shadow-md">
        <div class="absolute w-[3px] h-[32px] bg-gray-800 -left-[17px] top-[72px] rounded-l-lg"></div>
        <div class="absolute w-[3px] h-[46px] bg-gray-800 -left-[17px] top-[124px] rounded-l-lg"></div>
        <div class="absolute w-[3px] h-[46px] bg-gray-800 -left-[17px] top-[178px] rounded-l-lg"></div>
        <div class="absolute w-[3px] h-[64px] bg-gray-800 -right-[17px] top-[142px] rounded-r-lg"></div>
        <div class="w-[252px] h-[450px] overflow-hidden rounded-[1rem]">
            <slot/>
        </div>
    </div>
    {#if href}
        <a {href}
           class="absolute top-0 right-0 bottom-0 left-0
        bg-[hsl(0,0%,98.4%,0.2)] opacity-0 hover:opacity-100
        transition duration-300 ease-in-out">
        </a>
    {/if}
</div>

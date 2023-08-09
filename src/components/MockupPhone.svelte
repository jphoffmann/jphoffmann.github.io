<script lang="ts">
    export let href: string = "";
</script>

<div class="relative w-fit px-[3px] mx-auto">
    <div class="relative border-gray-800 border-[11px] tablet:border-[14px] rounded-[21px] tablet:rounded-[2rem] drop-shadow-md">
        <div class="absolute w-[3px] h-[26px] tablet:h-[32px] bg-gray-800 -left-[13.6px]  tablet:-left-[17px] top-[57.6px]  tablet:top-[72px] rounded-l-lg"></div>
        <div class="absolute w-[3px] h-[37px] tablet:h-[46px] bg-gray-800 -left-[13.6px]  tablet:-left-[17px] top-[99.2px] tablet:top-[124px] rounded-l-lg"></div>
        <div class="absolute w-[3px] h-[37px] tablet:h-[46px] bg-gray-800 -left-[13.6px]  tablet:-left-[17px] top-[142.4px] tablet:top-[178px] rounded-l-lg"></div>
        <div class="absolute w-[3px] h-[51px] tablet:h-[64px] bg-gray-800 -right-[13.6px] tablet:-right-[17px] top-[113.6px] tablet:top-[142px] rounded-r-lg"></div>
        <div class="w-[201.6px] tablet:w-[252px] h-[360px] tablet:h-[450px] overflow-hidden rounded-[11px] tablet:rounded-[1rem]">
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
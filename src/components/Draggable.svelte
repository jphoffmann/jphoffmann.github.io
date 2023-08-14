<script lang="ts">

    import {onMount} from "svelte";

    export let snapping: 'mandatory' | 'proximity' | 'none' = 'none';
    export let startScrollLeft: number = 0;

    export let scrollLeft: number = startScrollLeft;

    let containerElement: HTMLElement;
    onMount(() => {
            containerElement.scrollLeft = startScrollLeft;
    });

    let isDragging: boolean;

    let deltaPos: number;
    let prevPageX: number;
    let prevScrollLeft: number;

    $: itemWidth = (containerElement && containerElement.children.length > 0) ? containerElement.children[0].clientWidth : 0;

    function scrollHorizontal(event: WheelEvent) {
        if (event.deltaY > 0) containerElement.scrollLeft -= itemWidth;
        else containerElement.scrollLeft += itemWidth;
    }

    function dragStart(event: PointerEvent) {
        isDragging = true;
        prevPageX = event.pageX;
        prevScrollLeft = containerElement.scrollLeft;
    }

    function dragging(event: PointerEvent) {
        if (!isDragging) return;
        deltaPos = event.pageX - prevPageX;
        containerElement.scrollLeft = scrollLeft = prevScrollLeft - deltaPos;
    }

    function dragEnd() {
        isDragging = false;
        //if (centerItems) slideToCenter();
    }

    /*
        function slideToCenter() {
            if (containerElement.scrollLeft == (containerElement.scrollWidth - containerElement.clientWidth)) return;

            deltaPos = Math.abs(deltaPos);
            let valDifference = itemWidth - deltaPos;

            console.log(deltaPos + 'delta');
            console.log(itemWidth / 2);
            console.log(deltaPos > itemWidth / 2)

            //console.log(valDifference + 'val');
            if (containerElement.scrollLeft > prevScrollLeft) {
                return containerElement.scrollLeft += deltaPos > itemWidth / 2 ? valDifference : -deltaPos;
            }
            return containerElement.scrollLeft -= deltaPos > itemWidth / 2 ? valDifference : -deltaPos;
        }
    */
</script>

<div class="flex flex-row justify-between w-full gap-2.5 overflow-x-scroll my-auto pb-px"
     class:snap-container={snapping}
     bind:this={containerElement}
     on:scroll={() => {scrollLeft = containerElement.scrollLeft}}
     on:wheel|preventDefault|nonpassive={e => scrollHorizontal(e)}
     on:pointerdown={e =>dragStart(e)}>

    <slot />

</div>

<svelte:window
        on:pointermove|preventDefault={e =>dragging(e)}
        on:pointerup={dragEnd}/>

<style>
    .snap-container {
        scroll-snap-type: x;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;

    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
        margin-left: 0.5rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
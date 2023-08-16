<script lang="ts">
    import {onMount} from "svelte";

    export let scrollSnapping = false;

    //scroll the container if the anchor item changes
    export let autoScrolling = false;
    export let scrollAnchorItem: number = 0;

    let itemWidth: number = 0;
    let isDragging: boolean = false;
    let deltaPos: number;
    let prevPageX: number;
    let prevScrollLeft: number;

    let containerElement: HTMLElement;

    $: {
        if (autoScrolling)
            scrollToAnchor(itemWidth * scrollAnchorItem);
    }

    onMount(async () => {
        if (containerElement.children.length > 0) {
            itemWidth = containerElement.children[0].clientWidth;
        }

        containerElement.scrollLeft = itemWidth * scrollAnchorItem;
    });

    function scrollTo(left: number) {
        if (containerElement) containerElement.scrollTo({left: left, behavior: "smooth"})

    }

    //Mousewheel scrolling, bad experience on Mac Trackpad.
    function scrollHorizontal(event: WheelEvent) {
        if (event.deltaY > 0) containerElement.scrollLeft -= itemWidth;
        else containerElement.scrollLeft += itemWidth;
    }

    function scrollToAnchor(anchorLeft: number) {
        if (!containerElement) return;

        if (anchorLeft + itemWidth > containerElement.scrollLeft + containerElement.clientWidth) {
            scrollTo(anchorLeft);
        } else if (anchorLeft < containerElement.scrollLeft) {
            scrollTo(anchorLeft + itemWidth - containerElement.clientWidth)
        }
    }

    function dragStart(event: MouseEvent) {
        isDragging = true;
        prevPageX = event.pageX;
        prevScrollLeft = containerElement.scrollLeft;
    }

    function dragging(event: MouseEvent) {
        if (!isDragging) return;
        deltaPos = event.pageX - prevPageX;
        containerElement.scrollLeft = prevScrollLeft - deltaPos;
    }

    function dragEnd() {
        isDragging = false;
        if(!autoScrolling)
            scrollAnchorItem = Math.floor(containerElement.scrollLeft / itemWidth);
    }
</script>


<div class="flex flex-row justify-between w-full overflow-y-hidden overflow-x-scroll my-auto pb-px"
     class:snap-mandatory={scrollSnapping}
     bind:this={containerElement}
     on:pointerdown={e =>dragStart(e)}
>
    <slot/>
</div>

<svelte:window
        on:mousemove|preventDefault={e =>dragging(e)}
        on:pointerup={dragEnd}/>


<style>
    .snap-mandatory {
        scroll-snap-type: x mandatory;
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
        margin-right: 0.5rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgb(31 41 55 / 0.3);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgb(31 41 55 / 0.6);
    }
</style>

<!--on:scroll={() => {scrollLeft = containerElement.scrollLeft}}-->
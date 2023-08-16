<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import {twMerge} from 'tailwind-merge';
    import focusTrap from "$components/util/focusTrap.js";

    export let open = false;
    export let permanent = false;
    export let backdropClass = 'bg-gray-900 bg-opacity-80';
    export let outsideclose = false;
    const dispatch = createEventDispatcher();
    $: dispatch(open ? 'open' : 'hide');

    function prepareFocus(node: HTMLElement) {
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
        let n;
        while ((n = walker.nextNode())) {
            if (n instanceof HTMLElement) {
                const el = n;
                const [x, y] = isScrollable(el);
                if (x || y)
                    el.tabIndex = 0;
            }
        }
        node.focus();
    }

    const onAutoClose = (e: Event) => {
        const target = e.target as HTMLElement;
        if (outsideclose && target === e.currentTarget)
            hide(e); // close on click outside
    };
    const hide = (e: Event) => {
        e.preventDefault();
        open = false;
    };

    const isScrollable = (e: HTMLElement) => [e.scrollWidth > e.clientWidth && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowX) >= 0, e.scrollHeight > e.clientHeight && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowY) >= 0];
    let backdropCls = twMerge(backdropClass);

    function handleKeys(e: KeyboardEvent) {
        if (e.key === 'Escape' && !permanent)
            return hide(e);
    }
</script>

{#if open}
    <!-- backdrop -->
    <div class={twMerge('fixed inset-0 z-40', backdropCls)}/>

    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div on:keydown={handleKeys} on:wheel|preventDefault|nonpassive use:prepareFocus use:focusTrap
         on:click={onAutoClose}
         class="fixed top-0 left-0 right-0 h-modal z-50 w-full flex justify-center items-center"
         tabindex="-1" aria-modal="true" role="dialog"
    >
        <div class="w-full shadow-xl bg-gray-800">
                <!-- Modal body -->
                <div class=" overflow-y-auto overscroll-contain"
                     on:keydown|stopPropagation={handleKeys}
                     role="document"
                     on:wheel|stopPropagation|passive
                >
                    <slot/>
                </div>

        </div>
    </div>
{/if}
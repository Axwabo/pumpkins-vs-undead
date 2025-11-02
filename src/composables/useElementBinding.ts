import type { ElementBindable } from "../types/elementBindable.ts";
import { onMounted, onUnmounted, type Ref, watch } from "vue";

export default function useElementBinding(bindable: () => ElementBindable | null, element: Ref<HTMLElement | null>) {
    onMounted(() => assign(bindable()));
    onUnmounted(() => assign(bindable()));

    watch(bindable, value => assign(value), { flush: "post" });

    function assign(to: ElementBindable | null) {
        if (to)
            to.element = element.value ?? undefined;
    }
}
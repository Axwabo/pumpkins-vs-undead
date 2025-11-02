import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import useGameStore from "../stores/gameStore.ts";

export default function useAnimationFrame(callback: (deltaSeconds: number) => void) {
    const { speed } = storeToRefs(useGameStore());

    let frame = 0;
    let time = 0;

    onMounted(() => {
        time = performance.now();
        requestAnimationFrame(tick);
    });
    onUnmounted(() => {
        cancelAnimationFrame(frame);
        frame = -1;
    });

    function tick() {
        if (frame === -1)
            return;
        const seconds = (performance.now() - time) * 0.001;
        time = performance.now();
        callback(Math.min(0.5, seconds) * speed.value);
        requestAnimationFrame(tick);
    }
}
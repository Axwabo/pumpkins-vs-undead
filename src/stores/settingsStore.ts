import { defineStore } from "pinia";
import { ref, watch } from "vue";

const volumeKey = "PumpkinsVsUndeadVolume";
const mutedKey = "PumpkinsVsUndeadMuted";

const store = defineStore("settings", () => {
    const savedVolume = parseFloat(localStorage.getItem(volumeKey) ?? "NaN");
    const volume = ref(isNaN(savedVolume) ? 0.5 : savedVolume);
    const muted = ref(localStorage.getItem(mutedKey) === "true");

    watch(volume, value => localStorage.setItem(volumeKey, value.toString()));
    watch(muted, value => localStorage.setItem(mutedKey, value.toString()));

    return { volume, muted };
});

export default function useSettingsStore() {
    return store();
}
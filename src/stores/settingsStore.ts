import { defineStore } from "pinia";

interface State {
    volume: number;
    muted: boolean;
}

const store = defineStore("settings", {
    state: (): State => ({ volume: 0.5, muted: false })
});

export default function useSettingsStore() {
    return store();
}
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue(), VitePWA({
        registerType: "prompt",
        injectRegister: false,

        pwaAssets: {
            disabled: false,
            config: true
        },

        manifest: {
            name: "Pumpkins vs. Undead",
            short_name: "pumpkins-vs-undead",
            description: "A Halloween-themed game where you have to place pumpkins and other botanic defenses to keep the waves of undead away",
            theme_color: "#523100"
        },

        workbox: {
            globPatterns: [ "**/*.{js,css,html,svg,png,ico}" ],
            cleanupOutdatedCaches: true,
            clientsClaim: true
        },

        devOptions: {
            enabled: false,
            navigateFallback: "index.html",
            suppressWarnings: true,
            type: "module"
        }
    }) ]
})
import { defineConfig } from "vite";
import { dreamlandPlugin } from "vite-plugin-dreamland";
import { ChemicalVitePlugin } from "chemicaljs";

export default defineConfig({
    plugins: [
        ChemicalVitePlugin({
            default: "uv",
            uv: true,
            scramjet: false,
            rammerhead: false,
        }),
        dreamlandPlugin(),
    ],
});

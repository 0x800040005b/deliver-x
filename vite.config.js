import {defineConfig} from "vite";
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
    base: '/deliver-x',
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'src/img/modal/burger.jpg',
                    dest: './assets',
                }
            ]
        })
    ]
});
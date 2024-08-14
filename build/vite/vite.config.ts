import { defineConfig, UserConfig } from 'vite';
import path from 'path';
import VuePlugin from '@vitejs/plugin-vue';
import VueJsxPlugin from '@vitejs/plugin-vue-jsx';
import CompressionPlugin from 'vite-plugin-compression';
import LegacyPlugin from '@vitejs/plugin-legacy'

function resolve(dir) {
    return path.join(__dirname, '../..', dir);
}

export default defineConfig(({ command }) => {
    const config: UserConfig = {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        define: {
            'process.env': process.env
        },
        build: {
            target: 'es2015',
            assetsDir: 'static',
            chunkSizeWarningLimit: 1.5 * 1024
        },
        plugins: [
            VuePlugin(),
            VueJsxPlugin(),
            CompressionPlugin({
                threshold: 10240
            }),
            LegacyPlugin()
        ],
        server: {
            cors: true,
            open: true,
            port: 9002,
            host: '0.0.0.0'

        }
    };
    config.build!.sourcemap = command === 'serve';
    return config;
});
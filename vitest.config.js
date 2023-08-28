import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

const { mergeConfig } = require('vite');
const { configDefaults, defineConfig } = require('vitest/config');
const viteConfig = require('./vite.config');
const { fileURLToPath } = require('url');

module.exports = mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./',
                import.meta.url)),
            transformMode: {
                web: [/\.[jt]sx$/],
            },
        },
    })
);
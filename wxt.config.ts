import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  runner: {
    disabled: true,
  },
  manifest: {
    "web_accessible_resources": [
      {
        "resources": ["assets/*"],
        "matches": ["<all_urls>"]
      }
    ],
  }
});

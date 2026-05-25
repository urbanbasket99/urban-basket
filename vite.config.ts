import {
  defineConfig
} from "vite";

import {
  reactRouter
} from
"@react-router/dev/vite";

import react from
"@vitejs/plugin-react";

import {
  VitePWA
} from
"vite-plugin-pwa";

export default
defineConfig({

  plugins: [

    reactRouter(),

    VitePWA({
      devOptions: {
enabled: true,
},
      registerType:
        "autoUpdate",

      manifest: {
        name:
          "Urban Basket",

        short_name:
          "Urban Basket",

        description:
          "Fresh groceries delivered fast",

        theme_color:
          "#0F5132",

        background_color:
          "#ffffff",

        display:
          "standalone",

        start_url:
          "/",

        icons: [
          {
            src:
              "/icon-192.png",

            sizes:
              "192x192",

            type:
              "image/png",
          },

          {
            src:
              "/icon-512.png",

            sizes:
              "512x512",

            type:
              "image/png",
          },
        ],
      },
    }),
  ],
});
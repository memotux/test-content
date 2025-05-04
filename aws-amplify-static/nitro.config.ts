import { writeAmplifyFiles } from "./utils";

export type { AWSAmplifyOptions as PresetOptions } from "./types";

export default defineNitroConfig(
  {
    static: true,
    output: {
      dir: "{{ rootDir }}/.amplify-hosting",
      publicDir: "{{ output.dir }}/static{{ baseURL }}",
    },
    prerender: {
      crawlLinks: true,
    },
    commands: {
      preview: "npx serve ./static",
    },
    hooks: {
      async compiled(nitro) {
        await writeAmplifyFiles(nitro);
      },
    },
  }
);
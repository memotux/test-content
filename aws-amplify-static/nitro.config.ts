export default defineNitroConfig(
  {
    extends: 'aws-amplify',
    static: true,
    serveStatic: false,
    prerender: {
      crawlLinks: true,
    },
    output: {
      dir: "{{ rootDir }}/.amplify-hosting",
      publicDir: "{{ output.dir }}/static{{ baseURL }}",
    },
    commands: {
      preview: "npx serve ./static",
    },
  }
);
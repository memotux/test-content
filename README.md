# Nuxt Content AWS Amplify Manual Deploy Issue

When run `nuxt generate` in local environment, `sql_dump` file is prerended without a extension. If you upload this statics files to AWS Amplify `sql_dump` file will give a 404 code.

Manual test reproduction in:

- Amplify: https://test-content.d10f0t6g5e1j5o.amplifyapp.com
- Netlify: https://comforting-longma-c00a1f.netlify.app
- Cloudflare: https://f347caa2.test-content-rq8.pages.dev

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Production

Build the application for production:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

Upload static files (`.output/public`) to AWS Amplify with manual deploy.

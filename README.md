# TODO

## What's inside?

### Apps

- `/apps/web`: a [Svelte Kit](https://kit.svelte.dev/) app
- `/apps/cms`: a [Sanity.io](https://sanity.io/) app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Scripts

| Syntax   | Description                            |
| -------- | -------------------------------------- |
| `dev`    | Development (port 3333).               |
| `build`  | Build a production-ready app.          |
| `format` | Format all files in /src with prettier |
| `ts`     | Check for typescript errors            |

## Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

#### Sanity (CMS)

- Sanity [Schema Types](https://www.sanity.io/docs/schema-types).
- Sanity [Structure Builder](https://www.sanity.io/docs/structure-builder-reference).
- Sanity [Plugins](https://www.sanity.io/plugins).
- Sanity [Themes](https://themer.sanity.build).
- Date formatter [date-fns](https://date-fns.org/docs/Getting-Started).

#### Monorepo

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

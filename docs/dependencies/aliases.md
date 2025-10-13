---
title: Package aliases
---

Now that you have [published a shared dependency](/docs/dependencies/npm/) to Eik and seen how to update it, it's time to set up an alias.

A refresher from the [introduction](/docs/introduction#further-improving-performance-with-aliases):

> Instead of importing specific versions, Eik encourages the use of aliases to share the same major semantic version between applications.

## Giving a package an alias

When we left [our `lodash` example](/docs/dependencies/npm) we had
version `4.17.21` published to the URL
`https://eik.store.com/npm/lodash/4.17.21/index.js`.

The [Eik CLI](/docs/reference/at-eik-cli) has an `alias` command that works like so:

```sh
eik login --key YOUR_EIK_KEY --server https://eik.store.com
eik npm-alias lodash 4.17.21 4 --server https://eik.store.com
```

Let's break down the alias command a bit.

- Its first argument `lodash` is the name from `eik.json`.
- The second argument `4.17.21` is the version we want to alias.
- The third argument `4` is the alias we want to create or update.

The `--server` argument lets you run the `login` and `alias` commands without having `eik.json` in the current directory.

Now you can go to `https://eik.store.com/npm/lodash/v4/index.js` in a browser, and you should be redirected to the version you aliased.

:::tip

On servers running `@eik/service` 5.1.0 or newer you can also go to `https://eik.store.com/npm/lodash/~4/index.js` (~4 instead of v4) to get the file directly with [stale-while-revalidate cache headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control#stale-while-revalidate), saving the browser from following a redirect.

This is particularly useful for assets on the critical path, like global CSS and font files.

:::

## Updating an alias

We saw how to [update a shared dependency](/docs/dependencies/npm#updating-a-published-package), so let's see how to update an alias as well.

Make a note of the new version you want your alias to point to. Then log in, and run the alias command with the new version number.

```sh
eik login --key YOUR_EIK_KEY --server https://eik.store.com
eik npm-alias lodash 4.18.0 4 --server https://eik.store.com
```

## Next steps

Now that you've seen how to make aliases it's time to gather up your shared dependencies in import maps so they're easier to use.

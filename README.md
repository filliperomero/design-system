# Packages Folder

## React
This package has our main components of our design system to be used in any project.

## Tokens
This package has all the tokens of our system design so it can be used in any project.

## TS-Config
This package holds all our typescript configurations to be used across all our packages.

## Eslint-config
This package holds our eslint configurations to be used across all our packages.

## Docs
This package has the package storybook which is used to create the documentation of our design system. This package uses the components from our `React` package.

# Monorepo Dependencies

## Turbo Repo
Turborepo is important since we have a monorepo and we want to build everything with performance and paralel (when aplicable).

THe key features are:
- Allow us to run scripts in all projects at the same time in all packages.
- Helps to accelerate our process of building all packages using a cache system.

## Changeset
This package is important when we're making use of public `npm` packages. This will help us out to control the versioning of the monorepo since we have a few packages inside this repository.

When using for the first time, we need to run:
```
npx changeset init
```
This command will create a folder called `.changeset` and the most important file inside will be `config.json`.

Be careful when setting `access` variable inside this file, since if you want your packages to be private, we need to set as `restricted`

# Github Actions
This monorepo has Github Actions configured to deploy a `github page` with the storybook information.

## Docs Package
Everything is already configured to deploy the package Docs (storybook) in `github pages`.

It's important to note that our storybook configuration is set to our specific `github` url as we can see below:
```
viteFinal: (config, { configType }) => {
  if (configType === 'PRODUCTION') {
    config.base = '/design-system'
  }

  return config
}
```
If we decide to use another domain or another github repository, we need to change the value that the variable receives `config.base`.

Also, if we want to use `aws` instead of `github pages` to deploy our storybook, we need to modify our deploy script inside `package.json` from docs package.

Below we can see which command we're using to deploy to `github pages`:
```
"deploy-storybook-git": "storybook-to-ghpages"
```
We should use another command to deploy to `aws`. Below we can see which command it's:
```
"deploy-storybook-aws": "storybook-to-aws-s3"
```

# Publish
First, we first need to login in `npm` using the following command:
```
npm login
```

It's important to note that if you're following the same structure that we provided here, you need to create the organization inside the `npm` website with the same name used in the packages.

For example, in our structure we are using `@filliperomero/`, so we need to have the organization `filliperomero` created in npm.

Now that we have everything setup, we need to run our changeset script which will bring a cli asking a few questions so the package can determine if our packages suffer any change:
```
npm run changeset
```
This command will also create a markdown file inside `.changeset` where we can add more information.

After that, we should run the following command:
```
npm run version-packages
```
This command will bump all needed versions (checked with the previous command) and create/modify the `CHANGELOG.md` file on each package that was changed.

Now, we're ready to publish our packages using the following command:
```
npm run release
```
This command will publish all our packages.

> Important: We don't need to run this command if we have the `release.yml` configured

<br>

If we want an automatic release of the packages, we need to uncomment the file `release.yml` and configure in github the `secrets`.

<br>

## Cache for TurboRepo - In Vercel
We can set a remote cache to be used by our CI/CD and we're going to use Vercel to this.

In order to do it, we first need to create a [Vercel Access Token](https://vercel.com/docs/rest-api#introduction/api-basics/authentication/creating-an-access-token)

Now, we need to modify the `deploy-docs.yml` file to contain the values created previously:
```
- run: npm run build
  env:
    TURBO_TOKEN: ${{ secrets.VERCEL_TOKEN }}
    TURBO_TEAM: <VERCEL_TEAM_URL>
```

In order to check if the cache is working, we should check when `Github actions` is running for the first time the step `npm run build` and we can see the following message (or something similar):
```
INFO - Remote caching enabled

# AND #

...writing to cache...
```
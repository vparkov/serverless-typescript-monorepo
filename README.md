# nx-serverless-monorepo

A monrepo with serverless and typescript

## Table of contents

- [nx-serverless-monorepo](#nx-serverless-monorepo)
  - [Table of contents](#table-of-contents)
  - [Whats Included](#whats-included)
  - [Template Layout](#template-layout)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Further help](#further-help)
  - [Nx Cloud](#nx-cloud)
    - [Computation Memoization in the Cloud](#computation-memoization-in-the-cloud)
  - [License](#license)

## Whats Included

- A template project layout using latest version of Nx and Servrless framework
- An easy to use workspace generator to generate a template/stack with Serverless framework files and related Nx configuration
- Configured with AWS provider and it can be easily adopted to any cloud provider

## Template Layout

```shell
.
├── stacks/    # stack for each serverless configuration/template and its associated files
├── libs/      # shared libraries
├── tools/
├── README.md
├── jest.config.ts
├── jest.preset.ts
├── nx.json
├── package.json
├── serverless.base.ts  # base configuration for serverless
├── tsconfig.base.json
├── workspace.json
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .husky              # git hooks
├── .npmrc
├── .nvmrc
├── .prettierignore
├── .prettierrc
```

## Prerequisites

- [Nodejs](https://nodejs.org/) `protip: use nvm`

  > :warning: **Version**: `lts/gallium (v.16.x.x)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

- :package: Package Manager

  - [Yarn](https://yarnpkg.com) - **npm is banned :D !**

- 💅 Code format plugins

  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [EditorConfig](https://editorconfig.org/) *for VSCode you will need to install an extension manually*

  > On your preferred code editor, Install plugins for the above list of tools

## Usage

- **Install project dependencies**

  - Using Yarn

    ```shell
    yarn
    ```

- **Committing changes to the project**

  - The project is using git-cz and commitlint, therefore it is advised that you use the following command, so that the commits are consistent and follow the rules.

    ```shell
    git add .
    yarn commit
    ```

- **Generate a new stack**

  ```shell
  nx workspace-generator serverless <STACK_NAME>
  ```

  > Run with `-d` or `--dry-run` flag for dry run

- **Generate a new library**

  ```shell
  nx g @nrwl/node:lib --skipBabelrc --tags lib <LIBRARY_NAME>
  ```

  > Run with `-d` or `--dry-run` flag for dry run

- **Package stack**

  - To package single stack

    ```shell
    nx run <STACK_NAME>:build --stage=<STAGE_NAME>
    ```

  - To package stack affected by a change

    ```shell
    nx affected:build --stage=<STAGE_NAME>
    ```

  - To package all stacks

    ```shell
    nx run-many --target=build --stage=<STAGE_NAME>
    ```

- **Deploy stack to cloud**

  - To deploy single stack

    ```shell
    nx run <STACK_NAME>:deploy --stage=<STAGE_NAME>
    ```

  - To deploy stack affected by a change

    ```shell
    nx affected:deploy --stage=<STAGE_NAME>
    ```

  - To deploy all stacks

    ```shell
    nx run-many --target=deploy --all --stage=<STAGE_NAME>
    ```

- **Remove stack from cloud**

  - To remove single stack

    ```shell
    nx run <STACK_NAME>:remove --stage=<STAGE_NAME>
    ```

  - To remove stack affected by a change

    ```shell
    nx affected:remove --stage=<STAGE_NAME>
    ```

  - To remove all stacks

    ```shell
    nx run-many --target=remove --all --stage=<STAGE_NAME>
    ```

- **Run tests**

  - To run tests in single stack

    ```shell
    nx run <STACK_NAME>:test --stage=<STAGE_NAME>
    ```

  - To run tests affected by a change

    ```shell
    nx affected:test --stage=<STAGE_NAME>
    ```

  - To run tests in all stacks

    ```shell
    nx run-many --target=test --all --stage=<STAGE_NAME>
    ```

- **Run offline / locally**

  - To run offlline, configure `serverless-offline` plugin as documented [here](https://github.com/dherault/serverless-offline) and run below command

    ```shell
    nx run <STACK_NAME>:serve --stage=<STAGE_NAME>
    ```

- **Understand your workspace**

  ```shell
  nx dep-graph
  ```

## Further help

- Visit [Serverless Documentation](https://www.serverless.com/framework/docs/) to learn more about Serverless framework
- Visit [Nx Documentation](https://nx.dev) to learn more about Nx dev toolkit
- Why NX, not Lerna? Read [here](https://blog.nrwl.io/migrating-from-lerna-to-nx-better-dev-ergonomics-much-faster-build-times-da76ff14ccbb) from co-founder of Nx

## Nx Cloud

### Computation Memoization in the Cloud

​ Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times.

​ Visit [Nx Cloud](https://nx.app/) to learn more and enable it

## License

MIT

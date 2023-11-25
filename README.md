![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![materialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white) ![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

# About

This is the template for all my private projects. It is based on Next.js and TailwindCSS. It is using pnpm as package
manager. I have in plans to add also Material UI and Storybook.

# To get started

Just type `pnpm i` and then `pnpm dev` and you are ready to go!

```bash
pnpm i && pnpm dev
```

# About folder structure

- **context** => here we store GLOBAL context's of page. Local contexts like will be in separate page's folder
- **const** => static data files like .json or constant variables that does not change.
- **hooks** => for hooks :)
- **utils** => for utils functions like calculating something, or formatting data. Basically here we are storing PURE
  functions. (PURE means a function that is describing itself)
- **components** => here we are storing sorted components that are going to be shared for MULTIPLE pages!
- **app** => for next.js
- **lib** => for third party libraries that are not making any calls to API.
- **config** => for config files like mui theme, or global styles
- **services** => for all external API calls, analytics etc.
- **types** => for all global types.
- **features** => here we store all individual features and its components in sorted folder structure (more
  here => https://youtu.be/UUga4-z7b6s?t=746). "# next.js-template" 

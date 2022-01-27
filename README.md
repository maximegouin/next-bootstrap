# NextJS bootstrap template

Clone this repo to quickly dev a new project, using NextJS framework & other popular react libraries.

## About the stack

- [**NextJS**](https://nextjs.org/) React framework for production web app
- [**MaterialUI**](https://mui.com) UI framework
- [**Husky**](https://github.com/typicode/husky) Git hook for pre-commit and pre-push actions
- [**ESLint**](https://eslint.org/) Linter to find problems and maintaining code style
- [**Prettier**](https://prettier.io/) Used with eslint and husky to auto format code on commit
- [**@svgr/webpack**](https://www.npmjs.com/package/@svgr/webpack) Used to render svg as components
- [**Storybook**](https://storybook.js.org/) Build and explore UI components in isolation
- [**Redux Toolkit**](https://redux-toolkit.js.org/) Application state management
- [**React-Intl**](https://formatjs.io/docs/react-intl#the-react-intl-package) For internationalization

## Tests

Test rendering will be automatically perform on every story.
A custom render is exported from `utils/test-render.tsx` to wrap tested components as they are in the `_app.jsx`

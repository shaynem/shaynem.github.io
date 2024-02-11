# Personal Website

Welcome to my [personal website](https://shayne.au)! This is an [MIT licensed](https://github.com/shaynem/shaynem.github.io/blob/main/LICENSE) React-based application. It offers a simple interface, easy modifications, static export capabilities and automatic deployments via [GitHub Pages](https://pages.github.com/).

## 🚀 Features

- Built with modern JavaScript, using tools and frameworks like [create-react-app](https://github.com/facebook/create-react-app), [React-Router](https://reactrouter.com/), and SCSS.
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- And more!

## 🔧 Dependencies

Ensure you have [node](https://nodejs.org/) >= v21 Optionally, use [volta](https://github.com/volta-cli/volta) to manage node versions.

## 🚀 Setup and Running

1. Clone the repository:

   ```bash
   git clone https://api.github.com/repos/shaynem/shaynem.github.io
   cd shaynem.github.io
   ```

2. (Optional) Ensure you're on Node v16 or higher:

   ```bash
   volta install node@21
   node --version
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the application:

   ```bash
   yarn start
   ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).

## 🚢 Deploying

### Deploying to GitHub Pages

1. Update the environment variables and Git remote URL in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Adjust the `homepage` value in `package.json` based on your hosting preferences.
3. Planning on using a custom domain? Update `public/CNAME`. Otherwise, remove it.

After initial commit to `main`, simply push your changes, and the deployment will be deployed by github actions automatically.

### Static Export

For a static export without deploying to GitHub Pages:

- Remove or disable `.github/workflows/github-pages.yml`.
- Execute:

  ```bash
  yarn predeploy
  ```

This will generate a static version in `shaynem.github.io/build/` which you can host or deploy to a CDN.

## 🙌 Acknowledgements

- Template from [Future Imperfect](https://html5up.net/future-imperfect)
- [create-react-app](https://github.com/facebook/create-react-app) for the base React application.

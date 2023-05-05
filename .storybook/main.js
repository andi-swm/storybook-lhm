/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

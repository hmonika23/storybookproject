/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    "storybook-addon-storybooktoprefab"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  // staticDirs: [{ from: '../public/prefabs', to: '/' }],

  
  staticDirs: [{ from: '../build/prefab', to: '/' }],
};

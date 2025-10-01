module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};

// import type {Config} from 'jest';
//
// const config = {
//     presets: [
//         ['@babel/preset-env', {targets: {node: 'current'}}],
//         '@babel/preset-typescript',
//     ],
// };
//
// export default config;

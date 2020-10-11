// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

module.exports = {
  coverageDirectory: "../../coverage/libs/fairness",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],

  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": [
      "babel-jest",
      { configFile: "./babel-jest.config.json", cwd: __dirname }
    ]
  },
  displayName: "fairness"
};

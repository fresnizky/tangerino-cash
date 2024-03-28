module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "index", "sibling"],
        ],
        pathGroups: [{ pattern: "@components/**", group: "internal" }],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};

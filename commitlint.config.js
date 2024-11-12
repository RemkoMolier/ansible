module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-empty": [2, "never"],
    "signed-off-by": [2, "always", "Signed-off-by:"],
  },
};

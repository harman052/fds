/*
 * This is a secret file that JWT library use to generate
 * and validate tokens. In production environment, this secret
 * key must be placed in environment variable.
 */

module.exports = {
  secret: "thisIsTopSecretSecret"
};

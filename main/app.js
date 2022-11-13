function addTokens(input, tokens) {
  if (typeof input != "string") {
    throw new Error("Invalid input");
  }

  if (input.length < 6) {
    throw new Error("Input should have at least 6 characters");
  }

  if (Array.isArray(tokens)) {
    for (var i = 0; i < tokens.length; i++) {
      if (!(typeof tokens[i].tokenName === "string" && tokens[i].tokenName)) {
        throw new Error("Invalid array format");
      }

      if (
        !tokens[i].hasOwnProperty("tokenName") ||
        Object.keys(tokens[i]).length != 1
      ) {
        throw new Error("Invalid array format");
      }
    }
  }

  if (!input.includes("...")) return "Inputs";
  else {
    for (var i = 0; i < tokens.length; i++)
      input = input.replace("...", "${" + tokens[i].tokenName + "}");
    return input;
  }
}

const app = {
  addTokens: addTokens,
};

// app.addTokens("Inputs ...", [{ tokenName: "subsemnatul" }]);

module.exports = app;

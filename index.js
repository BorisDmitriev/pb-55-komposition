// Takes a "snake_case_string" and returns a split array of the words, e.g. ["snake", "case", "string"]
function desnake(snake_case_string) {
  return snake_case_string.split('_');
}

// Takes a "string" and returns a string with the first letter capitalized, e.g. "String"
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// Takes an ["array", "of", "strings"] and returns a camelized ["array", "Of", "Strings"]
function camelize(stringArray) {
  return stringArray.map(capitalizeFirstLetter);
}

// Write ...

// ... more ...

// ... functions!

// Takes a "snake_case_string" and returns a "camelCaseString"
function snakeToCamel(snake_case_string) {
   const camelCasedArray = desnake(snake_case_string);
   const camelCased = camelCasedArray[0] + camelize(camelCasedArray.slice(1)).join("");
   return camelCased;
}


console.log(snakeToCamel('super_cool_variable'));

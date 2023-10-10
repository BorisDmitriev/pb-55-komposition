# Function Composition

## 🐍To🐪

_Prerequisite: Some experience working with arrays and using methods like `arr.slice()`, `str.split()`, `arr.join()`._

Different programming languages use different conventions for variable names. For example, snake_case variables are common in Python, whereas camelCase variables are common in JavaScript.

Complete the snakeToCamel function to make a composed function that reformats a string from snake_case to camelCase.

### Hints:

- You should break down the transformation into small functions, each doing a job. The function `desnake` has already been defined for you, and a few others have been suggested.
- You can create additional functions if needed.

### Examples:
```js
console.log(snakeToCamel("super_cool_variable")); // "superCoolVariable"
console.log(snakeToCamel("very_long_variables_should_also_work")); // "veryLongVariablesShouldAlsoWork"
console.log(snakeToCamel("edgecase")); // "edgecase"
```

## Bonus

Now, write a `snakeToTrain` function to reformat a string from snake_case to Train-Case. How many of the functions you used in snakeToCamel can you reuse? Which new ones do you need?

## Challenge

Write more functions to translate to [more cases](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Multiple-word_identifiers), e.g. PascalCase, kebab-case, SCREAMING_SNAKE_CASE, SCREAMING-TRAIN-CASE, etc. Try to reuse as much code as possible!

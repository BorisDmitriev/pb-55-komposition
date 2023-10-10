# Funktionskomposition

## 🐍To🐪

Verschiedene Programmiersprachen benutzen unterschiedliche Konventionen für Variablennamen. Beispielsweise sind snake_case Variablen in Python üblich, während camelCase Variablen in JavaScript üblich sind.

Du sollst eine `snakeToCamel`-Funktion erstellen, die aus kleinen Funktionen zusammengesetzt ist und einen String von snake_case zu camelCase umformatiert.

### Hinweise:

- Du sollst die Umformung in kleine Funktionen aufteilen, die jeweils eine Aufgabe erledigen. Die Funktion `desnake` wurde bereits erstellt, und einige andere vorgeschlagen.
- Du kannst weitere Funktionen beim Bedarf selber erstellen.

### Beispiele:
```js
console.log(snakeToCamel("super_cool_variable")); // "superCoolVariable"
console.log(snakeToCamel("very_long_variables_should_also_work")); // "veryLongVariablesShouldAlsoWork"
console.log(snakeToCamel("edgecase")); // "edgecase"
```

## Bonus

Jetzt erstelle eine `snakeToTrain`-Funktion, die einen String von snake_case zu Train-Case umformatiert. Wie viele Funktionen, die du für `snakeToCamel` verwendet hast, kannst du hier wiederverwenden? Und welche neue Funktionen brauchst du?

## Challenge

Schreibe noch mehr Funktionen zur Umformatierung in mehr [cases](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Multiple-word_identifiers), z.B. `PascalCase`, `kebab-case`, `SCREAMING_SNAKE_CASE`, `SCREAMING_TRAIN_CASE`, etc. Versuche so viel Code/Funktion wiederzuverwenden wie möglich!

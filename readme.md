# Translate Nonsense

This is a package that can automatically translate text through many different random languages, and then back to English.

It uses the package [`google-translate-free`](https://www.npmjs.com/package/google-translate-free) as a dependency to achieve this.


## Install

```sh
npm i translate-nonsense
```


## Usage

```js
// translate the text "Hello, I like cheese" through 10 different languages

const translateNonsense = require("translate-nonsense")

translateNonsense.makeNonsense("Hello, I like cheese", 10)

// example output: "Hey, I am cheese"
```


### Details

```js
translateNonsense(text, iterations)
```


#### `text`

Type: `string`

The text to be translated and made into nonsense.


#### `iterations`

Type: `integer`

How many random languages to translate the text through.
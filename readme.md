# Translate Nonsense

This is a package that can automatically translate text through many different random languages, and then back to English.

It uses the package [`google-translate-free`](https://www.npmjs.com/package/google-translate-free) as a dependency to achieve this.


## Install

```sh
npm i translate-nonsense
```


## Usage

### translateNonsense
This is the main function, translate the specified string through many languages and back to English.

```js
// translate the text "Hello, I like cheese" through 10 different languages

const translateNonsense = require("translate-nonsense")

translateNonsense("Hello, I like cheese", 10)
	.then(res=>console.log(res))

// example output: "Hey, I am cheese"
```


#### Details

```js
translateNonsense(text, iterations, [finalLanguage])
```


##### `text`

Type: `string`

The text to be translated and made into nonsense.


##### `iterations`

Type: `integer`

How many random languages to translate the text through.

##### `finalLanguage` (optional)

Type: `string`

The key of the language to give the final translation in.  
If not provided, defaults to english (`en`).
The different language keys can be found by running [`translateNonsense.getLangs()`](#translatenonsensegetlangs) or [here](https://github.com/sufeiweb/google-translate-free/blob/0287b5e/languages.js#L9-L117)



### translateNonsense.getLangs

This returns an object containing all the used languages.

```js
// get an object containing all the used languages, and print it to the console

const translateNonsense = require("translate-nonsense")

const langs = translateNonsense.getLangs()

console.log(langs)

// example output: "Hey, I am cheese"
```

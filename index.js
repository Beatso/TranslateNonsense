const translate = require("google-translate-free")
const { it } = require("google-translate-free/languages")

let langKeys = Object.keys(translate.languages)
for (i of ["auto","isSupported","getCode"]) langKeys.splice(langKeys.indexOf(i), 1)

const randomLanguage = () => langKeys[Math.floor(Math.random()*langKeys.length)]

const makeNonsense = (text, iterations) => {

	let textInProgress = text

	const updateTranslation = (to) => translate(textInProgress, {to:to})
		.then(res=>{
			textInProgress=res.text
			console.log(textInProgress)
		})
		.catch(error=>console.error(error))

	// translate text through many languages
	for (i of [...Array(iterations).keys()]) translate(textInProgress, {to:randomLanguage()})
		.then(res=>{
			textInProgress=res.text
			console.log(textInProgress)
		})
		.catch(error=>console.error(error))
	
	translate(textInProgress, {to:"en"})
		.then(res=>{
			console.log("engrish")
			textInProgress=res.text
			console.log(textInProgress)
		})
		.catch(error=>console.error(error))

}

makeNonsense("hello i like cheese", 2)
// console.log(translate.languages)
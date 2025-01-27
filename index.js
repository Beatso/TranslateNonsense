const translate = require("google-translate-free")

let langKeys = Object.keys(translate.languages)
for (i of ["auto", "isSupported", "getCode"]) langKeys.splice(langKeys.indexOf(i), 1)

const makeNonsense = async (text, iterations, finalLanguage) => {

	if (!finalLanguage) finalLanguage = "en"

	let textInProgress = text
	var finalResult = ""

	// translate text through many languages
	await (async function () {
		for (i of [...Array(iterations).keys()]) {
			try {
				const randomLanguage = langKeys[Math.floor(Math.random()*langKeys.length)]
				const result = await translate(textInProgress, {to:randomLanguage})
				textInProgress = result.text
			} catch (error) {
				console.error(error)
			}
		}
	})()

	// translate text back to English
	await new Promise ( (resolve, reject) => {
		translate(textInProgress, {to:finalLanguage})
			.then(res=>{
				finalResult=res.text
				resolve(res.text)
			})
			.catch(error=>reject(error))
	})

	return finalResult
	
}


const getLangs = () => {
	let langs = translate.languages
	for (key of ["auto", "isSupported", "getCode"]) delete langs[key]
	return langs
}


module.exports = makeNonsense
module.exports.getLangs = getLangs

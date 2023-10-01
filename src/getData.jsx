const getHint = (word, meaningsObject) => {
    const definition = meaningsObject.definitions.find((item) => item.example)
    if (!definition) {
        return meaningsObject.definitions[0].definition.replace(".", ":") + "  ______"
    }
    return definition.example.replaceAll(word, "______")
  }
  
  const getWordData = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  
    const response = await fetch(url)
    const json = await response.json()
    const result = json[0].meanings[0]
  
    const wordData = {
        word: word,
        partOfSpeech: result.partOfSpeech,
        hint: getHint(word, result)
    }
  
    return wordData
  }
  
  const makeDataArray = async (inputString, setFunction) => {
    let inputArray = inputString.match(/[^\s]+/g)
    let output = []
    for (let i = 0; i < inputArray.length; i++) {
        const data = await getWordData(inputArray[i])
        output.push(data)        
    }
    setFunction(output)
  }

const logData = async () => {
    const data = await makeDataArray("house go smoke people nice tool")
    console.log(data)
}

logData()

export default makeDataArray


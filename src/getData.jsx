const getHint = (word, meaningsObject) => {
  //need to edit this function to ensure that the word is still replaced if it begins with a capital letter eg if it is at the start of the example sentence
    const pattern = new RegExp(word, "gi")
    console.log(pattern)

    const definition = meaningsObject.definitions.find((item) => item.example)
    if (!definition) {
        return meaningsObject.definitions[0].definition.replace(".", ":") + "  ______"
    }
    return definition.example.replaceAll(pattern, "______")
  }
  
  const getWordData = async (word) => {
    //add error handling in case word is not available
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    try {
      const response = await fetch(url)
      const json = await response.json()
      const result = json[0].meanings[0]
    
      const wordData = {
          word: word,
          partOfSpeech: result.partOfSpeech,
          hint: getHint(word, result)
      }
    
      return wordData

    } catch (error) {
      const wordData = {
        word: word,
        partOfSpeech: " - ",
        hint: "*** - error: word not found - ***"
    }
      console.error(error)
      return wordData

    }
  }
  
  const makeDataArray = async (inputString, setFunction) => {
    let cleanString = inputString.replaceAll(/[^\w]/g, ' ').toLowerCase()
    console.log("cleanstring = ", cleanString);
    let inputArray = cleanString.match(/[^\s]+/g)
    let output = []
    for (let i = 0; i < inputArray.length; i++) {
        const data = await getWordData(inputArray[i])
        output.push(data)
    }
    setFunction(output)
  }

export default makeDataArray


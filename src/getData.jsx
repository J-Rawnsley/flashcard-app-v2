//given a single word string, and the first item of the "meanings" array returned from a call to the Free Dictionary API, create a "hint" string. The hint string is either the first example sentence with the word itself removed to form a cloze deletion hint, or if no example sentence is available, return the first definition followed by "_____".
const getHint = (word, meaningsObject) => {

    const pattern = new RegExp(word, "gi")

    const definition = meaningsObject.definitions.find((item) => item.example)
    if (!definition) {
        return meaningsObject.definitions[0].definition.replace(".", ":") + "  ______"
    }
    return definition.example.replaceAll(pattern, "______")
  }
  
  const getWordData = async (word) => {
    //given a single word string, call the Free Dictionary API and get the dictionary data for the word. Use getHint() as defined above to create a hint for the word, then return an object containing the word, part of speech and the hint created by the getHint() function in an object literal.
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
    //add error handling in case word is not available
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
    //given an input string from the text entered by the user, remove all punctuation and change to lowercase. Split into separate words and call getWordData() on each word, to create an object with required data for each word. Create an array containing one data object for each word input by the user. Then, call the setFunction (passed in as an arument from App.jsx), which will set this newly-created array as the data to be processed by the table components (TableComponents.jsx)
    const loadingData = [{
      word: "loading...",
      partOfSpeech: "loading...",
      hint: "*** - loading data. Please wait a moment... - ***"
    }]
    setFunction(loadingData)

    const noWordsEntered = [{
      word: "not provided",
      partOfSpeech: "-",
      hint: "*** - Please enter a word or words (separated by spaces or line breaks) in the box above - ***"
    }]

    let cleanString = inputString.replaceAll(/[^\w]/g, ' ').toLowerCase()
    console.log("cleanstring = ", cleanString);
    let inputArray = cleanString.match(/[^\s]+/g)

    if (!inputArray) {
      setFunction(noWordsEntered)
    }

    let output = []
    for (let i = 0; i < inputArray.length; i++) {
        const data = await getWordData(inputArray[i])
        output.push(data)
    }
    setFunction(output)
  }

export default makeDataArray


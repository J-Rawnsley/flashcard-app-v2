
// takes as a parameter a "word" object, containing "word", "part of speech" and "hint" properties. Renders a single line of the output table
const TableRow = (props) => {
    return (
      <tr className='rounded'>
        <th scope="row">{props.index}</th>
        <td>{props.word.word}</td>
        <td>{props.word.partOfSpeech}</td>
        <td>{props.word.hint}</td>
      </tr>
    )
  }
  
  // renders the column headings
  const TableHead = () => {
    return (
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Word</th>
        <th scope="col">Part of Speech</th>
        <th scope="col">Hint</th>
      </tr>
    </thead>
    )
  }
  
  //takes in the data which has been processed by "makeDataArray" function (an array of "word" objects). Calls the TableRow component function to render a table for for each object in the array 
  const TableBody = (props) => {
    const bodyLines = props.data.map((item, index) => 
      <TableRow index={index + 1} word={item} />
    )
  
    return <tbody>{bodyLines}</tbody>
  }
  
  // conbines the component functions defined above to render a table of all words and hints requested by the user
  const Table = (props) => {
    return (
      <div className="width-limited space-above">
      <h3>Here are your flashcards!</h3>
      <table className="table table-primary rounded table-hover">
    <TableHead />
    <TableBody data={props.data}/> 
  </table>
      </div>
      
    )
  }

export { Table }
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
  
  const TableBody = (props) => {
    const bodyLines = props.data.map((item, index) => 
      <TableRow index={index + 1} word={item} />
    )
  
    return <tbody>{bodyLines}</tbody>
  }
  
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
const InputForm = (props) => {
    return (
      <form className="width-limited">
        <div className="mb-3">
          <label htmlFor="inputBox" className="form-label">Input your words here</label>
          <textarea className="form-control" id="inputBox" rows="3"></textarea>
        </div>
        <button type="button" onClick={props.clickFunction} className="btn btn-primary">Create Flashcards</button>
      </form>
      
    )
  }

  export default InputForm
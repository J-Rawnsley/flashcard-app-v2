//creates input text area and "create flashcards" button

const InputForm = (props) => {
    return (
      <>
        <h1 className="width-limited space-above">English Learning Flashcard App</h1>
        <p className="width-limited space-above">Created by Joseph Rawnsley. Code on <a href="#">GitHub</a></p>
        <form className="width-limited space-above">
          <div className="mb-3">
            <label htmlFor="inputBox" className="form-label">Input your words here (up to 500 characters with words separated by lines, spaces or commas)</label>
            <textarea className="form-control" id="inputBox" rows="3" maxlength="500"></textarea>
          </div>
          <button type="button" onClick={props.clickFunction} className="btn btn-primary">Create Flashcards</button>
        </form>
      </>
      
      
    )
  }

  export default InputForm
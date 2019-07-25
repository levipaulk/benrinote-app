import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class CompiledNotes extends Component {

  state = {
    ready: false
  }
  
// =============================================================================
// Pre-Render checks and fetch requests
// =============================================================================

  componentWillMount() {
    let note = JSON.parse(localStorage.getItem('benrinoteBackup'))
    localStorage.clear()
    if(note) {this.props.recoverNote(note.id, note.text)}
  }

  componentDidMount() {
    this.props.clearError()
    let pubId = this.props.match.params.pubId
    pubId = Number(pubId)
    this.props.activePub && this.props.activePub.id === pubId
      ? this.handleNotes()
      : this.handleActivePub(pubId)
  }

  handleActivePub = (pubId) => {
    return this.props.getActivePub(pubId)
      .then((activePub) => {
        return this.handleNotes();
      })
  }

  handleNotes = () => {
    return this.props.getNotes()
      .then(() => {
        return this.setState({ ready: true });
      })
  }

// =============================================================================
// Clean Up
// =============================================================================

  componenetWillUnmount() {
    this.setState({ ready: false })
    this.props.setNotes([])
  }

// =============================================================================
// Toggle Confirm Clear Note
// =============================================================================

  toggleConfirm = (confirmId, normalId) => {
    const pub = document.getElementById(confirmId)
    const norm = document.getElementById(normalId)
    if (pub.style.display === "none") {
      pub.style.display = "block";
      if (norm.style.display === "none") {
        norm.style.display = "block";
      } else {
        norm.style.display = "none";
      }
    } else {
      pub.style.display = "none";
      if (norm.style.display === "none") {
        norm.style.display = "block";
      } else {
        norm.style.display = "none";
      }
    }
  }

// =============================================================================
// Render Each Section along corresponding note
// =============================================================================

  backUpNote = (id, text) => {
    window.localStorage.setItem('benrinoteBackup', JSON.stringify({id, text}))
  }

  updateNote = (noteId, noteText) => {
    return this.props.updateNote(noteId, noteText)
  }

  updateAndRemoveNote = (noteId, noteText, textBoxId) => {
    const note = document.getElementById(textBoxId)
    note.value = '';
    return this.props.updateNote(noteId, noteText)
  }

  handleRender() {
    const notes = this.props.notes.map((note) => {
      return (
        <section key={note.id}>
          <label>
            <Link to={`/publication/${this.props.activePub.id}`} className='title-link'>
              <h3>{note.title}</h3>
            </Link>
          </label>
          <div className={'col-1'}>
            <div id={`normal-options-${note.id}`} style={{display: 'block'}}>
              <div className={'row'}>
                <button onClick={() => this.toggleConfirm(`confirm-${note.id}`, `normal-options-${note.id}`)}><label>Clear Notes</label></button>
              </div>
            </div>
            <div id={`confirm-${note.id}`} className={'row'} style={{display: 'none'}}>
              <h3>Are you sure you want to delete your notes for {note.title}</h3>
              <button onClick={() => this.updateAndRemoveNote(note.id, '', `note-text-${note.id}`)}><label>Confirm</label></button>
              <button onClick={() => this.toggleConfirm(`confirm-${note.id}`, `normal-options-${note.id}`)}><label>Cancel</label></button>
            </div>
          </div>
          <label>
            <textarea 
              id={`note-text-${note.id}`}
              rows="6" 
              cols="500" 
              defaultValue={note.text} 
              onChange={e => this.backUpNote(note.id, e.target.value)} 
              onBlur={e => this.updateNote(note.id, e.target.value)}
            >
            </textarea>
          </label>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <Link to={`/publication/${this.props.activePub.id}`} className='title-link'>
          <header>
            <h1>{this.props.activePub.title}</h1>
            <img src={this.props.activePub.cover} alt={`${this.props.activePub.title}'s Cover`} className={'img-cover'}/>
          </header>
        </Link>
        {notes}
      </div>
    )
  }
  render() {
    return (
      <>
        {this.state.ready
          ? this.handleRender()
          : <h1>Loading...</h1>
        }
      </>
    )
  }
}
  
export default withRouter(CompiledNotes);
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
// Render Each Section along corresponding note
// =============================================================================

  backUpNote = (id, text) => {
    window.localStorage.setItem('benrinoteBackup', JSON.stringify({id, text}))
  }

  updateNote = (noteId, noteText) => {
    return this.props.updateNote(noteId, noteText)
  }

  handleRender() {
    const notes = this.props.notes.map((note) => {
      return (
        <section key={note.id}>
          <Link to={`/publication/${this.props.activePub.id}`}>
            <h3>{note.title}</h3>
          </Link>
          <textarea rows="4" cols="50" defaultValue={note.text} onChange={e => this.backUpNote(note.id, e.target.value)} onBlur={e => this.updateNote(note.id, e.target.value)}></textarea>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <Link to={`/publication/${this.props.activePub.id}`}>
          <header role='banner'>
            <h1>{this.props.activePub.title}</h1>
            <img src={this.props.activePub.cover} alt={`${this.props.activePub.title}'s Cover`}/>
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
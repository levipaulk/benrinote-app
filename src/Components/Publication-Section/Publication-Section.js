import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MDReactComponent from 'markdown-react-js';

export default class PublicationSection extends Component {
// =============================================================================
// Note Helper Functions
// =============================================================================

  backUpNote = (id, text) => {
    window.localStorage.setItem('benrinoteBackup', JSON.stringify({id, text}))
  }

  updateNote = (noteId, noteText) => {
    return this.props.updateNote(noteId, noteText)
  }

  

  toggleNote = id => {
    const note = document.getElementById(id)
    if (note.style.display === "none") {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  }

// =============================================================================
// Render Sections alongside Associated Notes
// =============================================================================

  render() {
    let { section, note, activePub } = this.props
    return (
      <>
        <header>
          <h3>{section.title}</h3>
        </header>
        <div className="section-content-wrapper">
          <MDReactComponent text={section.text} />
        </div>
        <div className="notes-wrapper">
          <button onClick={() => this.toggleNote(`note${note[0].id}`)}>Notes</button>
          <div className="notes-collapseable" id={`note${note[0].id}`} style={{display:'none'}}>
            <Link to={`/dashboard/${activePub.id}`}>
              All Notes
            </Link>
            <textarea 
              rows="4" 
              cols="50" 
              placeholder={`Notes for Section ${section.section}: "${section.title}"`}
              defaultValue={note[0].text} 
              onChange={e => this.backUpNote(note[0].id, e.target.value)} 
              onBlur={e => this.updateNote(note[0].id, e.target.value)}
            >
            </textarea>
          </div>
        </div>
      </>
    )
  }
}
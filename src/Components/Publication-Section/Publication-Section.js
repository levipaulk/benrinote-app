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
          <h3>Section {section.section}: {section.title}</h3>
        </header>
        <button onClick={() => this.toggleNote(`note${note[0].id}`)}>Section {section.section} Notes</button>
        <div className="section-content-wrapper">
          <MDReactComponent text={section.text} />
        </div>
        <div className="notes-collapseable flex-conatiner" id={`note${note[0].id}`} style={{display:'none'}}>
          <div className='row'>
            <h5 className='note-title'>Notes for Section {section.section}, {section.title}</h5>
            <button onClick={() => this.toggleNote(`note${note[0].id}`)} className='note-title'>Hide</button>
            <Link to={`/dashboard/${activePub.id}`} className='note-title'>
              <button>All Notes</button>
            </Link>
          </div>
          <textarea 
            rows="4" 
            cols="80" 
            placeholder={`Notes for Section ${section.section}: "${section.title}"`}
            defaultValue={note[0].text} 
            onChange={e => this.backUpNote(note[0].id, e.target.value)} 
            onBlur={e => this.updateNote(note[0].id, e.target.value)}
          >
          </textarea>
        </div>
      </>
    )
  }
}
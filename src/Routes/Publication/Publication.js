import React from 'react';
import { withRouter } from 'react-router';
import PublicationSection from '../../Components/Publication-Section/Publication-Section'


class Publication extends React.Component {
  state = {
    ready: false,
    // activeNote: null
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
    let pubId = this.props.match.params.publication
    pubId = Number(pubId)
    this.props.activePub && this.props.activePub.id === pubId
      ? this.handleNotesAndSections()
      : this.handleActivePub(pubId)
  }

  handleActivePub = (pubId) => {
    this.props.getActivePub(pubId)
      .then(() => {
        return this.handleNotesAndSections();
      })
  }

  handleNotesAndSections = () => {
    Promise.all([this.props.getNotes(), this.props.getSections()])
          .then((res) => {
            return this.setState({ ready: true })
          })
  }

// =============================================================================
// Clean Up
// =============================================================================

  componenetWillUnmount() {
    this.setState({ ready: false })
    this.props.setNotes([])
    this.props.setSections([])
  }

// =============================================================================
// Render Each Section along corresponding note
// =============================================================================
  
  handleRender() {
    let { updateNote, activePub } = this.props
    const sections = this.props.sections.map((section) => {
      const note = this.props.notes.filter(n => n.section === section.section)
      return (
        <section key={section.id}>
          <PublicationSection 
            updateNote={updateNote}
            section={section}
            note={note}
            activePub={activePub}
          />
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <header role='banner'>
          <h1>{this.props.activePub.title}</h1>
          <img src={this.props.activePub.cover} alt={`${this.props.activePub.title}'s Cover`}/>
          <div>{this.props.activePub.authors}</div>
        </header>
        {sections}
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
  
export default withRouter(Publication);
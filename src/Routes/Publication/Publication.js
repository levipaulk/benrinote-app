import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class Publication extends React.Component {
  state = {
    ready: false
  }

  componentDidMount() {
    this.props.clearError()
    let pubId = this.props.match.params.publication
    pubId = Number(pubId)
    console.log(pubId, typeof pubId)
    this.props.activePub && this.props.activePub.id === pubId
      ? this.handleNotesAndSections()
      : this.handleActivePub(pubId)
  }

  handleActivePub = (pubId) => {
    console.log('handleActivePub ran with pubId ', pubId)
    debugger;
    this.props.getActivePub(pubId)
      .then((activePub) => {
        console.log(`Active Publication is `, activePub)
      })
      .catch(e => console.error(e))
  }

  handleNotesAndSections = () => {
    console.log('handleNotesAndSections ran')
    // Promise.all([this.props.getNotes(), this.props.getSections()])
    //       .then((res) => this.setState({ ready: true }))
    //       .catch(e => console.error(e))
  }

  componenetWillUnmount() {
    this.setState({ ready: false })
    this.props.setNotes([])
    this.props.setSections([])
  }

  handleRender() {
    const sections = this.props.sections.map((section) => {
      const note = this.props.notes.filter(n => n.section === section.section)
      console.log(note)
      return (
        <section>
          <header role="banner">
            <h3>{section.title}</h3>
          </header>
          <div className="section-content-wrapper">
            <p>{section.text}</p>
          </div>
          <div className="notes-wrapper">
            <button>Notes</button>
            <div className="notes-collapseable">
              <Link to={`/dashboard/${this.section.pub_id}`}>
                All Notes
              </Link>
              <textarea rows="4" cols="50">{note.text}</textarea>
            </div>
          </div>
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
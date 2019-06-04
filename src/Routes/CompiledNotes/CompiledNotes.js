import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class CompiledNotes extends Component {

  componentDidMount() {
    this.props.clearError()
    let pubId = this.props.location.pathname.slice(11)
    pubId = Number(pubId)
    console.log(pubId, typeof pubId)
    this.props.activePub && this.props.activePub === pubId
      ? console.log(`activePub is `, this.props.activePub)
      : this.props.getActivePub(pubId)
          .catch(e => console.error(e))
  }

  handleRender() {
    const notes = this.props.notes.map((note) => {
      return (
        <section>
          {/* <h3>{this.sections.filter(section => section.id === note.sec_id).title}</h3> */}
          <Link to={`/publication/${this.props.activePub.id}`}>
            <h3>{note.title}</h3>
          </Link>
          <p>{note.text}</p>
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
      {this.props.activePub
        ? this.handleRender()
        : <h1>Loading...</h1>
      }
      </>
    )
  }
}
  
export default withRouter(CompiledNotes);
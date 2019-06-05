import React, {Component} from 'react';
import PublicationSummary from '../../Components/PublicationSummary/PublicationSummary'

class ListOfPublications extends Component {
  
// =============================================================================
// Pre-Render Fetch Requests
// =============================================================================

  componentDidMount() {
    this.props.clearError()
    this.props.getPublications()
  }

// =============================================================================
// Cleanup
// =============================================================================

  componentWillUnmount() {
    this.props.setPublications([])
  }

  onDisable = id => {
    const existy = this.props.userpub.filter(
      up => up.pub_id === id
    )
    return !!existy.length
  }

  renderPublications() {
    const publications = this.props.publications.map((publication) => {

      const disable = this.onDisable(publication.id)
      return (
        <PublicationSummary 
          key={publication.id}
          id={publication.id}
          title={publication.title}
          cover={publication.cover}
          summary={publication.summary}
          addUserPub={this.props.addUserPub}
          userpub={this.props.userpub}
          disable={disable}
        />
      )
    })
    return (
      <>
        <header role='banner'>
          <h1>Publications</h1>
        </header>
        {publications}
      </>
    )
  }

  handleRender() {
    return (
      <div className='list-of-publications-wrapper'>
      {this.props.error 
        ? <p className='red'>There was an error, try again</p>
        : this.renderPublications()}
    </div>
    )
  }

  render() {
    return(
      <>
        {this.props.publications[0] ? this.handleRender() : <h1>Loading...</h1>}
      </>
    )
  }
}
  
export default ListOfPublications;
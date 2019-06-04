import React, {Component} from 'react';
import PublicationSummary from '../../Components/PublicationSummary/PublicationSummary'

class ListOfPublications extends Component {
  
  componentDidMount() {
    this.props.clearError()
    this.props.getPublications()
      .then(pubs => this.props.setPublications(pubs))
      .catch(this.props.setError())
  }

  componentWillUnmount() {
    this.props.setPublications([])
  }

  renderPublications() {
    const publications = this.props.publications.map((publication) => {
      return (
        <PublicationSummary 
          key={publication.id}
          id={publication.id}
          title={publication.title}
          cover={publication.cover}
          summary={publication.summary}
          addUserPub={this.props.addUserPub}
          userpub={this.props.userpub}
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
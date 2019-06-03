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
    this.props.clearPublications()
  }

  renderPublications() {
    const publications = this.props.publications.map((publication) => {
      return (
        <PublicationSummary 
          id={publication.id}
          title={publication.title}
          cover={publication.cover}
          summary={publication.summary}
          addUserPub={this.props.addUserPub}
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

  render() {
    return(
      <div className='list-of-publications-wrapper'>
        {this.props.error 
          ? <p className='red'>There was an error, try again</p>
          : this.renderPublications()}
      </div>
    )
  }
}
  
export default ListOfPublications;
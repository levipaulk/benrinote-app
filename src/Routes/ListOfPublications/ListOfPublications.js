import React, {Component} from 'react';

class ListOfPublications extends Component {

  publications = [
    {
      id: 1,
      title: 'Textbook 1',
      cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
      author_id: 1,
      publisher_id: 1,
      summary: 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      id: 2,
      title: 'Textbook 2',
      cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
      author_id: 1,
      publisher_id: 1,
      summary: 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      id: 3,
      title: 'Textbook 3',
      cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
      author_id: 1,
      publisher_id: 1,
      summary: 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
  ]

  render() {
    const publications = this.publications.map((publication) => {
      return (
        <section>
          <header role="banner">
            <h3>{publication.title}</h3>
          </header>
          <img src={publication.cover} alt={`${publication.title}'s Cover`}/>
          <p>{publication.summary}</p>
          <button>Add</button>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <header role='banner'>
          <h1>Publications</h1>
        </header>
        {publications}
      </div>
    )
  }
}
  
export default ListOfPublications;
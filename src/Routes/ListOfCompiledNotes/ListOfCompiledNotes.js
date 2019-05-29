import React, {Component} from 'react';

class ListOfCompiledNotes extends Component {

  user = {
    id: 2,
    name: 'bobby',
    full_name: 'bobby',
    password: 'abc123',
    nickname: 'bob',
    type: 'usr',
    date_created: '5/29/2019',
    date_modified: '5/29/2019'
  }

  user_pub = [
    {
      user_id: 2,
      pub_id: 1
    },
    {
      user_id: 2,
      pub_id: 2
    }
  ]

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
    }
  ]

  render() {
    const publicationList = this.publications.map((publication) => {
      return (
        <section>
          <h3>{publication.title}</h3>
          <img src={publication.cover} alt={`${publication.title}'s Cover`}/>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <header role='banner'>
          <h1>{`${this.user.nickname}'s Notes`}</h1>
        </header>
        {publicationList}
      </div>
    )
  }
}
  
export default ListOfCompiledNotes;
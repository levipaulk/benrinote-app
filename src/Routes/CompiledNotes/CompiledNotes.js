import React, {Component} from 'react';

class CompiledNotes extends Component {

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

  publication = {
    id: 1,
    title: 'Textbook 1',
    cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    author_id: 1,
    publisher_id: 1,
    summary: 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
  }

  sections = [
    {
      id: 1,
      pub_id: 1,
      sec: 1,
      type: 'md',
      title: 'What is it?',
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    },
    {
      id: 2,
      pub_id: 1,
      sec: 2,
      type: 'md',
      title: 'Why do we use it?',
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    },
    {
      id: 3,
      pub_id: 1,
      sec: 3,
      type: 'md',
      title: 'Who uses it?',
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    }
  ]

  notes = [
    {
      id: 1,
      user_id: 2,
      sec_id: 1,
      date_created: '5/29/2019',
      date_modified: '5/29/2019',
      text: 'Example Notes, lalalalalaalalalaalalaalalalaalalaalalalaalala'
    },
    {
      id: 2,
      user_id: 2,
      sec_id: 2,
      date_created: '5/29/2019',
      date_modified: '5/29/2019',
      text: 'Example Notes, lalalalalaalalalaalalaalalalaalalaalalalaalala'
    },
    {
      id: 3,
      user_id: 2,
      sec_id: 3,
      date_created: '5/29/2019',
      date_modified: '5/29/2019',
      text: 'Example Notes, lalalalalaalalalaalalaalalalaalalaalalalaalala'
    },
  ]

  render() {
    const notes = this.notes.map((note) => {
      return (
        <section>
          <h3>{this.sections.filter(section => section.id === note.sec_id).title}</h3>
          <p>{note.text}</p>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <header role='banner'>
          <h1>{this.publication.title}</h1>
          <img src={this.publication.cover} alt={`${this.publication.title}'s Cover`}/>
        </header>
        {notes}
      </div>
    )
  }
}
  
export default CompiledNotes;
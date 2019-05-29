import React, {Component} from 'react';

class Landing extends Component {
  sections = [
    {
      header: 'Take note',
      placeholder: 'placeholder for screenshot of taking notes alongside the reading',
      description: 'BenriNote lets you take notes as you read, all on the same page'
    },
    {
      header: 'Stay organized',
      placeholder: 'placeholder for gif demonstrating that notes for a specific section will only display for that section of the reading',
      description: 'BenriNote keeps you organized. As you study, we only display your notes for the current section. No more jumbled, messy notes.'
    },
    {
      header: 'Intertwined',
      placeholder: `placeholder for gif demonstrating that clicking on the header of a note's section will link to the related section of the reading`,
      description: 'Finding what your notes are referencing is as easy as one click.'
    },
    {
      header: 'Automatic Filing',
      placeholder: 'placeholder for screenshot of notes, ogranized by reading, with dropdown of notes page for each chapter',
      description: 'BenriNote keeps your notes organized by publication and chapte'
    },
    {
      header: 'Sharing is Caring',
      placeholder: 'placeholder for screenshot of "share with friends" modal',
      description: 'Share notes with your friends.'
    }
  ]

  render() {
    const sections = this.sections.map((section) => {
      return (
        <section>
          <header>
            <h3>{section.header}</h3>
          </header>
          <p>[<em>{section.placeholder}</em>]</p>
          <p>{section.description}</p>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <header role='banner'>
          <h1>BenriNote</h1>
          <h2>Spend less time searching and more time learning</h2>
        </header>
        {sections}
      </div>
    )
  }
}
  
export default Landing;
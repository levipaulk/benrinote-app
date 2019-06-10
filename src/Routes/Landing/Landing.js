import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

import Publications from '../../images/Publications-screenshot.png'
import Dashboard from '../../images/Dashboard-screenshot.png'
import Publication from '../../images/Publication-screenshot.png'
import CompiledNotes from '../../images/CompiledNotes-screenshot.png'
import Delete from '../../images/Delete-Dashboard-screenshot.png'

class Landing extends Component {
  sections = [
    {
      id: 1,
      link: '/publications',
      header: "Learn",
      img: Publications,
      alt: 'Screenshot of the Publications Page',
      description: 'Browse from a list of Publications and add them to your Dashboard'
    },
    {
      id: 2,
      link: '/dashboard',
      header: 'Stay Organized',
      img: Dashboard,
      alt: 'Screenshot of the Dashboard Page',
      description: 'View all of your saved Publications and Notes from your Dashboard'
    },
    {
      id: 3,
      link: '/dashboard',
      header: 'Take note',
      img: Publication,
      alt: `Screenshot of a Publication's Page`,
      description: 'Publications have notes for each section, simply click the note button for each section'
    },
    {
      id: 4,
      link: '/dashboard',
      header: 'Intertwined',
      img: CompiledNotes,
      alt: 'Screenshot of the Notes page for a Publication',
      description: 'View all of your notes for a given Publication on a single page'
    },
    {
      id: 5,
      link: '/dashboard',
      header: 'Discard',
      img: Delete,
      alt: 'Screenshot of the Dashboard Page with delete notes confirmation notification',
      description: 'Delete all or some of your notes at any time'
    }
  ]

  render() {
    const sections = this.sections.map((section) => {
      return (
        <section key={section.id} className={'landing-section-wrapper'}>
          <div className='row landing-title-wrapper'>
            <Link to={section.link} className='landing-col landing-title'>
              <header className={'landing-header'}>
                <h2 className='landing-header-h2'>{section.header}</h2>
              </header>
            </Link>
          </div>
          <div className='row'>
            <div className={'landing-col'}>
              <div className='landing-img'>
                <img src={section.img} alt={section.alt} className={'img-screenshot'} height={400} width={267}/>
              </div>
            </div>
            <div className={'col-1'}>
              <p className='row landing-description'>{section.description}</p>
            </div>
          </div>
        </section>
      )
    })
    return (
      <div className='landing-wrapper'>
        <header role='banner' className={'hero-image'}>
          <div className={'hero-text'}>
            <h1>BenriNote</h1>
            <h2>Spend less time searching and more time learning</h2>
          </div>
        </header>
        {sections}
      </div>
    )
  }
}
  
export default Landing;
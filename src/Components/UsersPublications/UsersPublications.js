import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class UsersPublications extends Component {

  state = {
    displayConfirm: false,
  }

  toggleConfirm = (confirmId, normalId) => {
    const pub = document.getElementById(confirmId)
    const norm = document.getElementById(normalId)
    if (pub.style.display === "none") {
      pub.style.display = "block";
      if (norm.style.display === "none") {
        norm.style.display = "block";
      } else {
        norm.style.display = "none";
      }
    } else {
      pub.style.display = "none";
      if (norm.style.display === "none") {
        norm.style.display = "block";
      } else {
        norm.style.display = "none";
      }
    }
  }

// =============================================================================
// Render Sections alongside Associated Notes
// =============================================================================

  render() {
    const { pub, deleteUserPub } = this.props
    return (
      <div className={'flex-conatiner'}>
        <div className={'col-1'}>
          <Link to={`/publication/${pub.pub_id}`} className='dashboard-pubs'>
            <div className={'row'}>
              <h3>{pub.title}</h3>
            </div>
            <div className={'row'}>
              <img src={pub.cover} alt={`${pub.title}'s Cover`} className={'img-cover'}/>
            </div>
          </Link>
        </div>
        <div className={'col-1'}>
          <div id={`normal-options-${pub.pub_id}`} style={{display: 'block'}}>
            <div className={'row'}>
              <Link to={`/dashboard/${pub.pub_id}`}>
                <button>Notes</button>
              </Link>
            </div>
            <div className={'row'}>
              <button onClick={() => this.toggleConfirm(`confirm-${pub.pub_id}`, `normal-options-${pub.pub_id}`)}>Delete Notes</button>
            </div>
          </div>
          <div id={`confirm-${pub.pub_id}`} className={'row'} style={{display: 'none'}}>
            <h3>Are you sure you want to delete all of your notes for {pub.title} and remove it from your dashboard?</h3>
            <button onClick={() => deleteUserPub(pub.pub_id)}>Confirm</button>
            <button onClick={() => this.toggleConfirm(`confirm-${pub.pub_id}`, `normal-options-${pub.pub_id}`)}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
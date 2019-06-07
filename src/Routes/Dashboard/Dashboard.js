import React, {Component} from 'react';
import UsersPublications from '../../Components/UsersPublications/UsersPublications'

class Dashboard extends Component {

// =============================================================================
// Pre-Render fetch requests
// =============================================================================

  componentDidMount() {
    this.props.getUserInfo()
  }

// =============================================================================
// Render a list of the User's Publications
// =============================================================================

  handleRender() {
    const { user, userpub, deleteUserPub } = this.props
    const publicationList = userpub.map((pub) => {
      return (
        <section key={pub.pub_id}>
          <UsersPublications 
            pub={pub}
            deleteUserPub={deleteUserPub}
          />
        </section>
      )
    })
    return (
      <div className='dashboard-wrapper'>
        <header role='banner'>
          <h1>{user.nickname ? `${user.nickname}'s Dashboard` : `${user.user_name}'s Dashboard`}</h1>
        </header>
        {publicationList}
      </div>
    )
  }
  render() {
    return (
      <>
        {this.props.userpub[0]
          ? this.handleRender() 
          : <div><h1>Loading...</h1><h2>Make sure have added Publications</h2></div>
        }
      </>
    )
  }
}
  
export default Dashboard;
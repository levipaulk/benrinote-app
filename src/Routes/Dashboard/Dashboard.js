import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserInfo()
  }

  handleRender() {
    const { user, userpub } = this.props
    const publicationList = userpub.map((pub) => {
      return (
        <section key={pub.pub_id} onClick={() => this.props.getActivePub(pub.pub_id)}>
          <Link to={`/publication/${pub.pub_id}`}>
            <h3>{pub.title}</h3>
            <img src={pub.cover} alt={`${pub.title}'s Cover`}/>
          </Link>
          <Link to={`/dashboard/${pub.pub_id}`}>
            <h4>Notes</h4>
          </Link>
          <button onClick={() => this.props.deleteUserPub(pub.pub_id)}>DELETE NOTES</button>
        </section>
      )
    })
    return (
      <div className='dashboard-wrapper'>
        <header role='banner'>
          <h1>{user.nickname ? `${user.nickname}'s Notes` : `${user.user_name}'s Notes`}</h1>
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
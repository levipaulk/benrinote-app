import React from 'react';
// import TokenService from '../../services/token-service'
import config from '../../config'

class Landing extends React.Component {

  componentDidMount() {
    return (
      fetch(`${config.API_ENDPOINT}/`, {
        // headers: {
        //   'authorization': `bearer ${TokenService.getAuthToken()}`
        // },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : console.log(res.json())
        )
    )
  }

  
  
  render() {
    return (
      <p>This is the Landing Page</p>
    )
  }
}
  
export default Landing;
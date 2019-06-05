import React from 'react';

const PublicationSummary = (props) => {
  return (
    <section id={props.id} className={props.id}>
      <header>
        <h3>{props.title}</h3>
      </header>
      <img src={props.cover} alt={`${props.title}'s Cover`}/>
      {/* <p>{props.author}</p> */}
      <p>{props.summary}</p>
      <button 
        onClick={() => props.addUserPub(props.id)} 
        disabled={props.disable}>Add</button>
    </section>
  )
}

export default PublicationSummary;
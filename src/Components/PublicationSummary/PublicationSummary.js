import React from 'react';

const PublicationSummary = (props) => {
  console.log(props.userpub)
  console.log(props.id, typeof props.id)
  console.log(props.userpub.includes(props.id))
  return (
    <section id={props.id} className={props.id}>
      <header>
        <h3>{props.title}</h3>
      </header>
      <img src={props.cover} alt={`${props.title}'s Cover`}/>
      <p>{props.author}</p>
      <p>{props.summary}</p>
      <button onClick={() => props.addUserPub(props.id)} disabled={props.userpub.filter(up => up.pub_id === props.id).length}>Add</button>
    </section>
  )
}

export default PublicationSummary;
import React from 'react';

const PublicationSummary = (props) => {
  return (
    <section id={props.id} className={`${props.id} flex-conatiner`}>
      <div className={'pub-sum-subsection'}>
      <header className={'row'}>
        <h3>{props.title}</h3>
      </header>
      <div className={'col-1'}>
        <img src={props.cover} alt={`${props.title}'s Cover`} className={'img-cover'}/>
      </div>
      {/* <p>{props.author}</p> */}
      </div>
      <div className={'pub-sum-subsection col-1'}>
        <p className={'row'}>{props.summary}</p>
        <div className={'row'}>
          <button 
            onClick={() => props.addUserPub(props.id)} 
            disabled={props.disable}
          >
            Add
          </button>
        </div>
        </div>
    </section>
  )
}

export default PublicationSummary;
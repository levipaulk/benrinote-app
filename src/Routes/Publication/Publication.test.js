import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Publication from './Publication';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Publication 
          error={() => {}} 
          setError={() => {}} 
          clearError={() => {}}
          userpub={[
            {pub_id: 1, date_created: '5/31/2019', title: 'Publication 1', cover: 'url'},
            {pub_id: 2, date_created: '6/1/2019', title: 'Publication 2', cover: 'url'}
          ]}
          sections={[
            {id: 1, pub_id: 1, section: 1, title: 'first section', text: '...Stuff'},
            {id: 2, pub_id: 1, section: 2, title: 'second section', text: '...Stuff'}
          ]}
          notes={[
            {id: 1, pub_id: 1, sec_id: 1, title: 'first section', text: 'These are my notes, lalalalaalalalalala'},
            {id: 2, pub_id: 1, sec_id: 2, title: 'second section', text: 'These are my notes, lalalalaalalalalala'},
          ]}
          activePub={{pub_id: 2, date_created: '6/1/2019', title: 'Publication 2', cover: 'url'}}
          getActivePub={() => {
            return new Promise(function(resolve, reject) {
              setTimeout(function() {
                resolve('foo');
              }, 300);
            });
          }}
          getNotes={() => {}}
          setNotes={() => {}}
          updateNote={() => {}}
          getSections={() => {}}
          setSections={() => {}}
          recoverNote={() => {}}
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicationSection from './Publication-Section';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <PublicationSection 
            updateNote={() => {}}
            section={{id: 1, pub_id: 1, section: 1, title: 'first section', text: '...Stuff'}}
            note={[{id: 1, pub_id: 1, sec_id: 1, title: 'first section', text: 'These are my notes, lalalalaalalalalala'}]}
            activePub={{id: 1, title: 'Publication 1', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'}}
          />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
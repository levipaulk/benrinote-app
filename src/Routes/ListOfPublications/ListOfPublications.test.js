import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ListOfPublications from './ListOfPublications';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <ListOfPublications 
          error={() => {}} 
          setError={() => {}} 
          clearError={() => {}}
          getPublications={() => {}}
          setPublications={() => {}}
          addUserPub={() => {}}
          publications={[
            {id: 1, title: 'Publication 1', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'},
            {id: 2, title: 'Publication 2', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'},
          ]}
          userpub={[
            {pub_id: 1, date_created: '5/31/2019', title: 'Publication 1', cover: 'url'},
            {pub_id: 2, date_created: '6/1/2019', title: 'Publication 2', cover: 'url'}
          ]}
          getSections={() => {}}
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
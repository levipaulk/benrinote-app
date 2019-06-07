import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UsersPublications from './UsersPublications';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <UsersPublications 
          pub={{id: 1, title: 'Publication 1', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'}}
          deleteUserPub={() => {}}
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
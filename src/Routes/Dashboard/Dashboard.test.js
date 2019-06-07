import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Dashboard 
          error={() => {}} 
          setError={() => {}} 
          clearError={() => {}}
          user={{
            user_name: '',
            nickname: '',
            type: ''
          }}
          userpub={[
            {pub_id: 1, date_created: '5/31/2019', title: 'Publication 1', cover: 'url'},
            {pub_id: 2, date_created: '6/1/2019', title: 'Publication 2', cover: 'url'}
          ]}
          deleteUserPub={() => {}}
          getUserInfo={() => {}}
          getActivePub={() => {}}
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
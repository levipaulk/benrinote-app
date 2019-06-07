import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicationSummary from './PublicationSummary';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <PublicationSummary />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
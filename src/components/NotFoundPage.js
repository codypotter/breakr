import React from 'react';
import {Link} from 'react-router-dom'; 

const NotFoundPage = () => (
  <div>
    <h1>Error 400 - Page Not Found</h1>
    <br></br>
    <h3>Oops! Looks like that page doesn't exist</h3>
    <br/>
    <Link to="/" >Go Home instead.</Link>
  </div>
);

export default NotFoundPage;
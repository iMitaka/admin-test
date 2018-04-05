import React, { Component } from 'react';
import './PageNotFound.css'
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {

  render() {
    return (
        <div className="error-page-wrap">
          <article className="error-page gradient">
            <hgroup>
              <h1><strong>404</strong></h1>
              <br />
              <br />
              <h2><strong>Oops! Page not found!</strong></h2>
            </hgroup>
            <Link to="/" title="Back to site" className="btn btn-default">Назад към началото</Link>
          </article>
        </div>
    )
  }
}

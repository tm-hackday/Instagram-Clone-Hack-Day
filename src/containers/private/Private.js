import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clickLogout, hello } from '../../redux/auth/actions/auth';

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

class Private extends Component {
  handleSignOut = this.handleSignOut.bind(this);
  handleSignOut(e) {
    e.preventDefault();
    this.props.dispatch(clickLogout());
  }

  render() {
    const { hello } = this.props.auth;

    return (
      <div className="container">
        <h1>Welcome</h1>
        {hello && <h2>{hello.Message}</h2>}
        <form className="form">
          <Link to="imageUpload" className="button">
            Upload Image
          </Link>
          <Link to="imageView" className="button">
            View Images
          </Link>
          <button className="button" onClick={this.handleSignOut}>
            Logout
          </button>
        </form>
      </div>
    );
  }
}

Private.propTypes = propTypes;

function select({ auth }) {
  return { auth };
}
export default connect(select)(Private);

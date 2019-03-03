import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions';

class Header extends Component {
  handleLogout = e => {
    e.preventDefault();

    this.props.logoutUser(this.props.history);
  };

  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="!#" onClick={this.handleLogout}>
              Logout
            </a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-1">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo">
            Feedbox
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const withRouterHeader = withRouter(Header);

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouterHeader);

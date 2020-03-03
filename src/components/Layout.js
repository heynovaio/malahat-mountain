import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isPreloaded: true,
      show: true
    };
  }

  showModal  = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false, isPreloaded: false });
  }

  componentDidMount() {

  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    const { show } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Eventually' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            {this.state.show &&
              <div className="modal">
                <h2>Adults welcome, young and old</h2>
                <p>Are you over 19?</p>
                <div className="buttons">
                  <button className="yes" onClick={this.hideModal}>Yes</button>
                  <a href="https://en.wikipedia.org/wiki/Malahat,_British_Columbia" target="_blank" className="no">No</a>
                </div>
              </div>
            }
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <div id="wrapper">{children}</div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

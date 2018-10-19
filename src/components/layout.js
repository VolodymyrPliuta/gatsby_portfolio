import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'uikit/dist/css/uikit.min.css';
import Header from './Header';
import Footer from './footer';

class Layout extends React.Component {
  componentDidMount = () => {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons');
    uikit.use(icons);
  }

  render = () => (
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
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <body>
            <div className='uk-offcanvas-content uk-height-viewport uk-flex uk-flex-column uk-flex-between'>
              <Header siteTitle={data.site.siteMetadata.title} />
              <main className='uk-padding' aria-label='content'>
                <div className='uk-container'>
                  {this.props.children}
                </div>
              </main>
              <Footer/>
            </div>
          </body>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

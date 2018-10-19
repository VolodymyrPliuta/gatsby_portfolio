import React from 'react'
import { Link } from 'gatsby'
import 'uikit/dist/css/uikit.min.css';
import Layout from '../components/layout';

class IndexPage extends React.Component {
  componentDidMount = () => {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons');
    uikit.use(icons);
  }

  render = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
}

export default IndexPage

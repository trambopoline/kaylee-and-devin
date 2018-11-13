import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import MrBubz from '../components/MrBubz'
import Emoji from '../components/Emoji'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="hero is-bold is-info is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <div className="level">
                  <div className="level-left">Tale as Old as Time </div>
                  <div className="level-right"><Emoji symbol="😗😗😗" label="three kiss-face emoji" /></div></div>
              </h1>
              <p className="subtitle">
                ‒ Agatha Christie
              </p>
            </div>
          </div>
        </div>
        <section className="content">
          <MrBubz />
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

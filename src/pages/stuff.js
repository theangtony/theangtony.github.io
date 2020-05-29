import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Post from 'templates/post'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'

class Blog extends React.Component {
  render() {
    const { location, data } = this.props
    const posts = get(data, 'remark.posts')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Blog" />
        {posts.map(({ post }, i) => (
          <Post
            data={post}
            options={{
              isIndex: true,
            }}
            key={i}
          />
        ))}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query PostQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`

import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Meta from 'components/meta'
import Layout from 'components/layout'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          backgroundColor: 'black',
          width: '100%',
          opacity: 0.9,
        }}
      >
        <div
          style={{
            height: '93.4vh',
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1564092566747-4dd00afb59c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            style={{
              padding: '12px',
              display: 'flex',
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                color: 'black',
                fontWeight: 900,
                fontSize: 120,
              }}
            >
              <span style={{ color: '#03a9f4' }}>Hello </span>World
            </h1>
            <p style={{ color: 'black', fontWeight: 700, fontSize: 30 }}>
              Nice to meet you, check out my{'  '}
              <Link
                to="/stuff"
                className="btn btn-primary"
                style={{ margin: 0, paddingTop: 0 }}
              >
                <span style={{ color: 'white', fontWeight: 700, fontSize: 30 }}>
                  stuff
                </span>
              </Link>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
  }
`

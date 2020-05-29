import Layout from 'components/layout'
import React from 'react'
import Meta from 'components/meta'
import get from 'lodash/get'

const About = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} title="About" />
      <div
        className="jumbotron jumbotron-fluid"
        style={{ height: '30vh', overflow: 'hidden', margin: 0, padding: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1509380247342-83d059a517a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1351&q=80"
          style={{ width: '100%' }}
        ></img>
      </div>
      <div className="container" style={{ height: '50vh' }}>
        <h1>Hi, William Here</h1>
        <h2>Sometimes I also go by Tong or Pao </h2>
        <p>
          I am happy to help people in getting bigger and better. I am
          Interested if there is a project which make the world a better place.
          In my leisure time, i works on my personal project which i call
          Stickey. I picture it as something that might help all of us in the
          future.
        </p>
        <p>
          Currently, my focus is to help people who trust me to make the world a
          better place and to spread love and positive impact to the world. In
          case you feel like you need to deepdive more about me, check{' '}
          <a href="https://williamangtony.surge.sh" target="_blank">
            this
          </a>{' '}
          out, or you could also hit me with an{' '}
          <a href="mailto:williamangtony@gmail.com">email</a>
        </p>
      </div>
    </Layout>
  )
}

export default About
export const pageQuery = graphql`
  query AboutQuery {
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

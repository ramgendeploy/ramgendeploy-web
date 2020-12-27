import * as React from 'react'
import './css/extra.css'
import './css/main.css'
import Projects from '../comp/Projects.js'
import Nav from '../comp/Nav.js'
import { Helmet } from 'react-helmet'

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RamgenDeploy</title>
      </Helmet>
      <Nav />
      {/* <Header /> */}
      <main>
        <h1 class="pop">Projects</h1>
        <Projects />
      </main>
      <footer>
        Made by <a href="https://twitter.com/ramgendeploy">@ramgendeploy</a> ||
        {/* Header pattern by{' '}
        <a href="https://www.heropatterns.com/">HeroPatterns</a> */}
      </footer>
    </div>
  )
}

export default IndexPage

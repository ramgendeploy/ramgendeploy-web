import * as React from 'react'

const Nav = () => {
  return (
    <nav>
      <span class="rama">RamgenDeploy</span>
      <div class="links">
        <a
          href="https://twitter.com/ramgendeploy"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a href="https://ramagg.com" target="_blank" rel="noreferrer">
          Blog
        </a>
        <a href="mailto:ramaagg3@gmail.com" target="_blank" rel="noreferrer">
          Contact
        </a>
        {/* <a href="" target="_blank">CV</a> */}
      </div>
    </nav>
  )
}

export default Nav

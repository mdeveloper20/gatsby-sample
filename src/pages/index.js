import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default () => (
  <div>
    <Header >Home Page</Header>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <Link to={'/about/'}>About</Link>
  </div>
)
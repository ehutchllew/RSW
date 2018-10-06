import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ProjectViews } from './subViews'
import './css/projects.css'

export default class Projects extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="projectsContainer">
        <ProjectViews />
      </div>
    )
  }
}

Projects.propTypes = {
  proyectos: PropTypes.array,
}

Projects.defaultProps = {
  proyectos: new Array(6),
}

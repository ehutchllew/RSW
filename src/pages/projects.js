import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/projects.css'

export default class Projects extends Component {
  constructor() {
    super()
  }
  renderProjects = () => {
    const { proyectos } = this.props
    let classCounter = 1
    let classSize = 'small'
    const allProjects = [1, 2, 3, 4].map((item, index) => {
      if (index !== 0 && classCounter == 2) {
        classSize = classSize == 'small' ? 'large' : 'small'
        classCounter = 1
      } else {
        classCounter++
      }

      return (
        <li
          className={`projectTile ${classSize}`}
          style={{
            backgroundImage: `url(${require(`../assets/mountain${index +
              1}.jpg`)})`,
          }}
        />
      )
    })
    return allProjects
  }
  render() {
    return (
      <div className="projectsContainer">
        <ul className="projectGrid">{this.renderProjects()}</ul>
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

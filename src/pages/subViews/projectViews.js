import React from 'react'
import '../css/projects.css'

const ProjectViews = () => {
  const renderProjects = () => {
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
          key={index}
          style={{
            backgroundImage: `url(${require(`../../assets/mountain${index +
              1}.jpg`)})`,
          }}
        />
      )
    })
    return allProjects
  }
  return <ul className="projectGrid">{renderProjects()}</ul>
}

export default ProjectViews

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/projects.css';

export default class Projects extends Component {
    constructor(){
        super();
    }
    renderProjects = () => {
        const { proyectos } = this.props;
        const allProjects = [1, 2, 3, 4].map((item, index) => {
            return(
                <li className="projectTile" style={{backgroundImage: `url(${require(`../assets/mountain${index+1}.jpg`)})`}}></li>
            )})
        return allProjects;
    }
    render(){
        return (
            <div className='projectsContainer'>
                <h1>Projects</h1>
                <ul className='projectGrid'>
                    {this.renderProjects()}
                </ul>
            </div>
        )
    }
}

Projects.propTypes = {
    proyectos: PropTypes.array
}

Projects.defaultProps = {
    proyectos: new Array(6)
}


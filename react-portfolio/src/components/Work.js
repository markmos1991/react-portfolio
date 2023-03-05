import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";

import projects from "./projects.json";

class Work extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects: projects
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        
        {this.state.projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            link={project.deployed}
            github={project.github}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Work;
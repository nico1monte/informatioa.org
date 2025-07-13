import "./index.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.icon} className="project-card-icon" alt="icon" />
      <div className="project-card-content">
        <div className="project-card-title">{project.title}</div>
        <div className="project-card-description">{project.description}</div>
      </div>
    </div>
  );
}
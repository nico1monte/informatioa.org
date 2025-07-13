import "./index.css";

export const ProjectsCube = ({ projects }) => {
  return (
    <div class="container">
      <div class="box-card">
        <div class="face front">{projects[0].title}</div>
        <div class="face back">{projects[1].title}</div>
        <div class="face right">{projects[2].title}</div>
        <div class="face left">{projects[3].title}</div>
        <div class="face top">{projects[4].title}</div>
        <div class="face bottom">{projects[5].title}</div>
      </div>
    </div>
  );
}
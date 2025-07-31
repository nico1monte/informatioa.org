import "./index.css";


export const ProjectsCube = ({ projects }) => {
  const getTitleWithFallback = (index) => {
    if (!projects[index]?.title) {
      return '';
    }
    return projects[index].title;
  }
  
  return (
    <div class="container">
      <div class="box-card">
        <div class="face front">{getTitleWithFallback(0)}</div>
        <div class="face back">{getTitleWithFallback(1)}</div>
        <div class="face right">{getTitleWithFallback(2)}</div>
        <div class="face left">{getTitleWithFallback(3)}</div>
        <div class="face top">{getTitleWithFallback(4)}</div>
        <div class="face bottom">{getTitleWithFallback(5)}</div>
      </div>
    </div>
  );
}
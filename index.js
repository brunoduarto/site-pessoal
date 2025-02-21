document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.work__project');
  let currentIndex = 0;
  const interval = 3000; // 3 seconds

  const showProject = (index) => {
    projects.forEach((project, i) => {
      project.classList.toggle('active', i === index);
    });
  };

  const nextProject = () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
  };

  setInterval(nextProject, interval);

  // Show the first project initially
  showProject(currentIndex);
});
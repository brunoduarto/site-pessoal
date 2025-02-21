document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.work__project');
  const prevButton = document.querySelector('.carousel__button--prev');
  const nextButton = document.querySelector('.carousel__button--next');
  let currentIndex = 0;

  const showProject = (index) => {
    projects.forEach((project, i) => {
      project.classList.toggle('active', i === index);
    });
  };

  const nextProject = () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
  };

  const prevProject = () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
  };

  nextButton.addEventListener('click', nextProject);
  prevButton.addEventListener('click', prevProject);

  // Show the first project initially
  showProject(currentIndex);

  // Test Button
  const testButton = document.getElementById('testButton');
  if (testButton) {
    console.log('Test button found');
    testButton.addEventListener('click', () => {
      console.log('Button clicked');
      testButton.textContent = 'Button Clicked!';
    });
  } else {
    console.log('Test button not found');
  }
});
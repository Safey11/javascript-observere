const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hiddens');

if (hiddenElements.length > 0) {
  hiddenElements.forEach(element => {
    observer.observe(element);
  });
} else {
  console.error("No elements found with the 'hiddens' class");
}

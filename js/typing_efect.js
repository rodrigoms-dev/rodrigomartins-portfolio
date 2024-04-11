const textElements = document.querySelectorAll(".home__job");

textElements.forEach(element => {
  let text = element.textContent.trim();
  let index = 1;
  let isDeleting = false;

  function typeWriter() {
    if (index <= text.length) {
      element.textContent = text.substring(0, index);
      index = isDeleting ? index - 1 : index + 1;
      isDeleting = index === text.length + 1 ? true : index === 0 ? false : isDeleting;

      const typingSpeed = isDeleting ? 0 : 100; //ajuste a velocidade de escrita aqui!

      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
});

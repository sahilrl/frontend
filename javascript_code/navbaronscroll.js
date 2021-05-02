const header = document.querySelector("nav");
const sectionOne = document.querySelector("header");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

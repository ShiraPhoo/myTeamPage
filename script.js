gsap.from(".team__heading", { duration: 1, y: "-100%", ease: "circ.out" });
gsap.from(".team__subHeading", {
  duration: 1,
  x: "100%",
  ease: "circ.out",
  delay: 1,
});

gsap.from(".animation", {
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  delay: 2,
});

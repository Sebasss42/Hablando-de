gsap.registerPlugin(Flip);

let element = document.querySelector("#element");

element.addEventListener("click", function() {
  // get the current state (before we make changes)
  let state = Flip.getState(element, "backgroundColor");
  
  // now make our changes
  element.classList.toggle("fixed");
  if (element.classList.contains("fixed")) {
    gsap.set(element, {backgroundColor: "#1D1B1B"});
  } else {
    gsap.set(element, {backgroundColor: "#1D1B1B"});
  }
  
  // "FLIP" animate from that previous state. 
  Flip.from(state, {
    duration: 0.5,
    ease: "power1.inOut"
  });
  
});
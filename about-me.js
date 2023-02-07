document.addEventListener("mousemove", function(event) {
    var x = event.clientX / window.innerWidth - 0.1;
    var y = event.clientY / window.innerHeight - 0.25;
    
    document.body.style.backgroundPosition = x * 10 + "px " + y * 10 + "px";
});

document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let elements = document.querySelectorAll("h1, h2, .about-me *");
    elements.forEach(function(element) {
      element.style.transform = `translate(${-x / 100}px, ${-y / 100}px)`;
    });
});
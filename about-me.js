document.addEventListener("mousemove", function(event) {
    var x = event.clientX / window.innerWidth - 0.1;
    var y = event.clientY / window.innerHeight - 0.25;
    
    document.body.style.backgroundPosition = x * 10 + "px " + y * 10 + "px";
  });
  
  document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let elements = document.querySelectorAll("h1, h2, h3, .about-me *");
    elements.forEach(function(element) {
      element.style.transform = `translate(${-x / 100}px, ${-y / 100}px)`;
    });
  });
  const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg",
    "photos/photo6.jpg",
    "photos/photo7.jpg",
    "photos/photo8.jpg",
    "photos/photo9.jpg",
    "photos/photo10.jpg",
    "photos/photo11.jpg",
    "photos/photo12.JPG",
    "photos/photo13.JPG",
    "photos/photo14.jpg",
    "photos/photo15.jpg",
    "photos/photo16.jpg",
    "photos/photo17.jpg",
    "photos/photo18.jpg",
    "photos/photo19.jpg",
    "photos/photo20.JPG",
    "photos/photo21.jpg",
    "photos/photo22.jpg",
    "photos/photo23.jpg",
    "photos/photo24.jpeg",
    "photos/photo25.jpg",
    "photos/photo26.jpg",
    "photos/photo27.jpg",
    "photos/photo28.jpg",
    "photos/photo29.jpg",
    "photos/photo30.jpg",
    "photos/photo31.jpg",
    "photos/photo32.jpg",
    "photos/photo33.jpg",
    "photos/photo34.jpg",
    "photos/photo35.jpg",
    "photos/photo36.jpg",
    "photos/photo37.jpg",
    "photos/photo38.jpg",
    "photos/photo39.jpg",
    "photos/photo40.jpg",
    "photos/photo41.jpg"
    ];
    
    $(document).ready(function() {
      let displayedImages = [];
      
      function displayRandomImage() {
        let nextImage;
        do {
          nextImage = photos[Math.floor(Math.random() * photos.length)];
        } while (displayedImages.includes(nextImage));
        
        displayedImages.push(nextImage);
        
        if (displayedImages.length === photos.length) {
          displayedImages = [];
        }
        
        $("#container img").fadeOut(1500, function() {
          $("#container img").fadeOut(1500, function() {
            $(this).attr("src", nextImage).fadeIn(1500);
          });
        });
      }
      
      displayRandomImage();
      
      $("#container img").click(function() {
        displayRandomImage();
      });
    });
    
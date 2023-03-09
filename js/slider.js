
      // fitur slider
      const image = document.querySelectorAll(".img-slider");
      let slideIndex = 1;
      showImg(slideIndex);

      function next(n) {
        showImg((slideIndex += n));
      }
      function showImg(n) {
        if (n > image.length) {
          slideIndex = 1;
        } else if (n < 1) {
          slideIndex = image.length;
        }
        // hide image
        for (let i = 0; i < image.length; i++) {
          image[i].style.display = "none";
        }
        // show image
        image[slideIndex - 1].style.display = "block";
      }
      // set otomotis
      setInterval(() => {
        next(1);
      }, 5000);

      // fitur slider end
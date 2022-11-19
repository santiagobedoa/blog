document.addEventListener("DOMContentLoaded", function(event) {
    // -------------- 01 --------------
    // Get the modal_playground_01
    var modal_01 = document.getElementById("modal_playground_01");

    // Get the image and insert it inside the modal_01 - use its "alt" text as a caption
    var img_01 = document.getElementById("logo_full_color");
    var modalImg = document.getElementById("img_playground_01");
    var captionText = document.getElementById("caption_playground_01");
    img_01.onclick = function(){
      modal_01.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal_01
    var span = document.getElementById("close_playground_01");

    // When the user clicks on <span> (x), close the modal_01
    span.onclick = function() {
      modal_01.style.display = "none";
    }


    // -------------- 02 --------------
    // Get the modal_playground_02
    var modal_02 = document.getElementById("modal_playground_02");

    // Get the image and insert it inside the modal_02 - use its "alt" text as a caption
    var img_02 = document.getElementById("logo_fotomosaico");
    var modalImg_02 = document.getElementById("img_playground_02");
    var captionText_02 = document.getElementById("caption_playground_02");
    img_02.onclick = function(){
      modal_02.style.display = "block";
      modalImg_02.src = this.src;
      captionText_02.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal_02
    var span_02 = document.getElementById("close_playground_02");

    // When the user clicks on <span> (x), close the modal_03
    span_02.onclick = function() {
      modal_02.style.display = "none";
    }
});
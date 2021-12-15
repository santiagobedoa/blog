document.addEventListener("DOMContentLoaded", function(event) {
    // -------------- 01 --------------
    // Get the modal_01
    var modal_01 = document.getElementById("modal_proyecto_01");

    // Get the image and insert it inside the modal_01 - use its "alt" text as a caption
    var img_01 = document.getElementById("input_img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption_01");
    img_01.onclick = function(){
      modal_01.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal_01
    var span = document.getElementById("close_01");

    // When the user clicks on <span> (x), close the modal_01
    span.onclick = function() {
      modal_01.style.display = "none";
    }


    // -------------- 02 --------------
    // Get the modal_02
    var modal_02 = document.getElementById("modal_proyecto_02");

    // Get the image and insert it inside the modal_02 - use its "alt" text as a caption
    var img_02 = document.getElementById("output_img");
    var modalImg_02 = document.getElementById("img02");
    var captionText_02 = document.getElementById("caption_02");
    img_02.onclick = function(){
      modal_02.style.display = "block";
      modalImg_02.src = this.src;
      captionText_02.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal_02
    var span_02 = document.getElementById("close_02");

    // When the user clicks on <span> (x), close the modal_03
    span_02.onclick = function() {
      modal_02.style.display = "none";
    }


    // -------------- 03 --------------
    // Get the modal_03
    var modal_03 = document.getElementById("modal_proyecto_03");

    // Get the image and insert it inside the modal_03 - use its "alt" text as a caption
    var img_03 = document.getElementById("explanation_img");
    var modalImg_03 = document.getElementById("img03");
    var captionText_03 = document.getElementById("caption_03");
    img_03.onclick = function(){
      modal_03.style.display = "block";
      modalImg_03.src = this.src;
      captionText_03.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal_03
    var span_03 = document.getElementById("close_03");

    // When the user clicks on <span> (x), close the modal_03
    span_03.onclick = function() {
      modal_03.style.display = "none";
    }
});
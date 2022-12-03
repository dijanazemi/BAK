(function (){
    "use strict";

    const addForm = document.getElementById("add-form");
    const addModal = document.getElementById("add-modal");
    const closeModalEl = document.getElementById("close-modal");
    const productList = document.getElementById("products-section");
    const addButtons = document.getElementsByClassName("add_button");

    Array.from(addButtons).forEach(function (element){
        element.addEventListener("click", showAddModal);
    });
    function showAddModal(){
        addModal.classList.add("add_modal--shown");
    }

    closeModalEl.addEventListener("click", closeModal);


    document.addEventListener("keydown", (e) => {
        if(e.key == "Escape"){
            closeModal();
        }
    });

    function closeModal(){
        addModal.classList.remove("add_modal--shown");
        addForm.reset();
    }

    addForm.addEventListener("submit", function (e){
        e.preventDefault();

        const formData = new FormData(e.target);

        productList.insertAdjacentHTML(
            "beforeend",
            `<div class="products-section-item">
              <div class="products-section-item__thumb">
                <img src="./assets/images/image-first.jpg" alt="Item Thumbnail" />
              </div>
              <div class="products-section-item__content">
                <div class="products-section-item__headings">
                  <h3 class="products-section-item__title">
                  ${formData.get("title")}
                  </h3>
          
                  <p class="products-section-item__description">
                  ${formData.get("description")}
                  </p>
                </div>
          
                <span class="products-section-item__price">
                  ${formData.get("price")}€
                </span>
              </div>
            </div>`
          );
          
          addModal.classList.remove("add_modal--shown");

          this.reset();
    });

})();
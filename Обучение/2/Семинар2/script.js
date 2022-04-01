window.onload = function(){
    let button = document.getElementById("Burger")
    let header_links = document.getElementById("MenuLinks")
    button.addEventListener("click", function(){
        if (header_links.classList.contains("header__dropdown-links_show")){
            header_links.classList.remove("header__dropdown-links_show")
        }else{
            header_links.classList.add("header__dropdown-links_show")
        } 
    })
}
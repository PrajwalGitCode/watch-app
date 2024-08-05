function add_watch() {
    // Get the watch list element
    let watch_list = document.getElementById("watch-list");
    watch_list.style.backgroundColor="black";

    // Create card div
    let watch_card = document.createElement("div");
    watch_card.classList.add("card");
    watch_card.style.marginLeft="70px";
    watch_card.style.marginTop="70px";

    // Create image part
    let image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = "image/img1.jpg";
    watch_card.style.width="18rem";


    // Create card body div
    let card_body = document.createElement("div");
    card_body.classList.add("card-body");


    // Create card title
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML="Titan";

    // Create card title
    let card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.innerHTML = "It is a long established fact that a reader will be distracted by the readable content"; 

    // Create link section (button)
    let card_button = document.createElement("a");
    card_button.classList.add("btn");
    card_button.classList.add("btn-primary");
    card_button.innerHTML = "Go Somewhere";


    // Append elements to card body

    watch_card.appendChild(image);
    card_body.appendChild(title);
    card_body.appendChild(card_text);
    card_body.appendChild(card_button);
    watch_card.appendChild(card_body);

    watch_list.appendChild(watch_card);


    console.log(watch_list);

}

add_watch();
add_watch();
add_watch();
add_watch();
add_watch();
add_watch();


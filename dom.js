const grandparent=document.getElementsByClassName("grandparent");
const parent=document.getElementsByClassName("parent");
const child=document.getElementsByClassName("child");

grandparent.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true);

parent.addEventListener("click", (event) => {
    console.log("Parent clicked");
    event.stopPropagation(); // Prevents the event from bubbling up to the grandparent
}); 

child.addEventListener("click", () => {
    console.log("Child clicked");
});

